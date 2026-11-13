(function () {
  const C = window.CAREER;
  const esc = C.esc;
  const $ = (id) => document.getElementById(id);
  const all = C.allProjects();
  const chrono = C.companies.slice().sort((a, b) => a.start[0] * 12 + a.start[1] - (b.start[0] * 12 + b.start[1]));

  $('statement').textContent = C.profile.statement;
  $('lede').textContent = C.profile.summary;

  // ---- Board geometry -------------------------------------------------------------------------
  const X0 = 50, X1 = 1050, Y0 = 2015, Y1 = 2027;
  const tx = (ym) => X0 + ((ym[0] + (ym[1] - 1) / 12 - Y0) / (Y1 - Y0)) * (X1 - X0);
  const LEVEL = { hospital: 250, dlab: 250, pentacube: 230, smilegate: 210 };
  const BODY_H = 92;

  const xP = tx([2017, 3]);  // pentacube start
  const xS = tx([2023, 7]);  // smilegate start
  const xNow = tx(C.now);
  const tracePath =
    'M' + tx([2015, 6]) + ' 250 H' + (xP - 20) + ' L' + xP + ' 230 H' + (xS - 22) + ' L' + (xS - 2) + ' 210 H' + xNow;

  let svg = '';
  // Year ruler (silkscreen).
  svg += '<g class="ruler" aria-hidden="true"><line x1="' + X0 + '" y1="392" x2="' + xNow + '" y2="392"/>';
  for (let y = Y0; y <= 2026; y++) {
    const x = tx([y, 1]);
    svg += '<line x1="' + x + '" y1="386" x2="' + x + '" y2="398"/><text x="' + x + '" y="416">' + y + '</text>';
  }
  svg += '<text class="ruler-now" x="' + xNow + '" y="416">현재</text></g>';

  svg += '<path class="trace-under" d="' + tracePath + '"/><path class="trace" id="trace" d="' + tracePath + '"/>';
  svg += '<circle class="via" cx="' + tx([2015, 6]) + '" cy="250" r="7"/>';
  svg += '<circle class="via via-now" cx="' + xNow + '" cy="210" r="9"/>';

  chrono.forEach((co) => {
    const cy = LEVEL[co.id];
    const x1 = tx(co.start);
    let x2 = co.end ? tx([co.end[0], co.end[1] + 1]) : xNow;
    if (co.id === 'pentacube') x2 = xS - 24;
    const w = x2 - x1;
    const label = co.name + ', ' + co.role + ', ' + co.period;

    if (!co.projects.length) {
      // Two-terminal part: no pins, just a body on the trace.
      const ly = co.id === 'hospital' ? 292 : 314;
      svg +=
        '<g class="part part-small" role="button" tabindex="0" data-company="' + co.id + '" aria-label="' + esc(label) + '">' +
        '<rect class="pad" x="' + (x1 - 5) + '" y="' + (cy - 9) + '" width="10" height="18"/>' +
        '<rect class="pad" x="' + (x2 - 5) + '" y="' + (cy - 9) + '" width="10" height="18"/>' +
        '<rect class="body" x="' + (x1 + 5) + '" y="' + (cy - 14) + '" width="' + (w - 10) + '" height="28" rx="2"/>' +
        '<line class="leader" x1="' + (x1 + w / 2) + '" y1="' + (cy + 16) + '" x2="' + (x1 + w / 2) + '" y2="' + (ly - 13) + '"/>' +
        '<text class="small-label" x="' + (x1 + w / 2) + '" y="' + ly + '"><tspan class="ref">' + co.ref + '</tspan> ' + esc(co.name) + '</text>' +
        '</g>';
      return;
    }

    const by = cy - BODY_H / 2;
    svg +=
      '<g class="part" role="button" tabindex="0" data-company="' + co.id + '" aria-label="' + esc(label) + '">' +
      '<rect class="body" x="' + x1 + '" y="' + by + '" width="' + w + '" height="' + BODY_H + '" rx="2"/>' +
      '<circle class="notch" cx="' + (x1 + 12) + '" cy="' + (by + 12) + '" r="3.5"/>' +
      '<text class="ref" x="' + (x1 + 24) + '" y="' + (by + 17) + '">' + co.ref + '</text>' +
      '<text class="co-name" x="' + (x1 + 16) + '" y="' + (by + 46) + '">' + esc(co.name) + '</text>' +
      '<text class="co-role" x="' + (x1 + 16) + '" y="' + (by + 64) + '">' + esc(co.role) + '</text>' +
      '<text class="co-period" x="' + (x1 + 16) + '" y="' + (by + 81) + '">' + esc(co.period) + '</text>' +
      '</g>';

    // Pins. Smilegate has two rows, Pentacube one.
    const twoRows = co.projects.length > 7;
    const perRow = twoRows ? Math.ceil(co.projects.length / 2) : co.projects.length;
    const pitch = w / perRow;
    co.projects.forEach((p, i) => {
      const top = !twoRows || i < perRow;
      const col = top ? i : i - perRow;
      const px = x1 + pitch * (col + 0.5);
      const ref = co.ref + '-' + String(i + 1).padStart(2, '0');
      const padY = top ? by - 13 : by + BODY_H;
      const lx = px - 3, ly = top ? by - 20 : by + BODY_H + 24;
      const hitY = top ? by - 46 : by + BODY_H;
      svg +=
        '<g class="pin" role="button" tabindex="0" aria-pressed="false" data-ref="' + ref + '" data-theme="' + p.theme + '"' +
        ' aria-label="' + esc(ref + ' ' + p.title + ', ' + C.themeName(p.theme)) + '">' +
        '<rect class="hit" x="' + (px - pitch / 2) + '" y="' + hitY + '" width="' + pitch + '" height="46"/>' +
        '<rect class="pad" x="' + (px - 7) + '" y="' + padY + '" width="14" height="13" rx="1"/>' +
        '<text class="pin-label" transform="translate(' + lx + ' ' + ly + ') rotate(' + (top ? -45 : 45) + ')">' + esc(p.short) + '</text>' +
        '</g>';
    });
  });
  $('pcb').innerHTML = svg;

  // ---- Layer filter ---------------------------------------------------------------------------
  const layers = [{ id: 'all', name: '전체' }].concat(C.themes);
  $('layers').innerHTML = layers
    .map((t) => {
      const n = t.id === 'all' ? all.length : all.filter((p) => p.theme === t.id).length;
      return '<button type="button" class="layer" data-layer="' + t.id + '" aria-pressed="' + (t.id === 'all') + '">' +
        esc(t.name) + ' <span class="num">' + n + '</span></button>';
    })
    .join('');

  function setLayer(id) {
    document.querySelectorAll('.layer').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.layer === id)));
    document.querySelectorAll('.pin').forEach((pin) => {
      pin.classList.toggle('dim', id !== 'all' && pin.dataset.theme !== id);
    });
  }
  $('layers').addEventListener('click', (e) => {
    const b = e.target.closest('.layer');
    if (b) setLayer(b.dataset.layer);
  });

  // ---- Probe card -----------------------------------------------------------------------------
  function showProject(ref, updateHash) {
    const p = all.find((x) => x.ref === ref);
    if (!p) return false;
    document.querySelectorAll('.pin').forEach((pin) => pin.setAttribute('aria-pressed', String(pin.dataset.ref === ref)));
    document.querySelectorAll('.part').forEach((g) => g.classList.remove('is-on'));
    $('probe').innerHTML =
      '<div class="probe-meta"><span class="ref">' + ref + '</span>' +
      '<span>' + esc(p.company.name) + '</span><span class="num">' + esc(p.company.period) + '</span>' +
      '<span class="tag">' + esc(C.themeName(p.theme)) + '</span></div>' +
      '<div class="probe-body"><h3>' + esc(p.title) + '</h3><ul>' +
      p.bullets.map((b) => '<li>' + esc(b) + '</li>').join('') + '</ul></div>';
    if (updateHash) history.replaceState(null, '', '#' + ref);
    return true;
  }

  function showCompany(id) {
    const co = C.companies.find((x) => x.id === id);
    if (!co) return;
    document.querySelectorAll('.pin').forEach((pin) => pin.setAttribute('aria-pressed', 'false'));
    document.querySelectorAll('.part').forEach((g) => g.classList.toggle('is-on', g.dataset.company === id));
    $('probe').innerHTML =
      '<div class="probe-meta"><span class="ref">' + co.ref + '</span><span class="num">' + esc(co.period) + '</span></div>' +
      '<div class="probe-body"><h3>' + esc(co.name) + '</h3><p class="probe-role">' + esc(co.role) + '</p><p>' + esc(co.description) + '</p>' +
      (co.projects.length ? '<p class="probe-hint">작업 ' + co.projects.length + '개가 이 부품의 핀에 있습니다.</p>' : '') + '</div>';
  }

  function activate(target) {
    const pin = target.closest('.pin');
    if (pin) return showProject(pin.dataset.ref, true);
    const part = target.closest('.part');
    if (part) showCompany(part.dataset.company);
  }
  $('pcb').addEventListener('click', (e) => activate(e.target));
  $('pcb').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      activate(e.target);
    }
  });

  const fromHash = decodeURIComponent(location.hash.slice(1));
  if (!showProject(fromHash, false)) showProject('U2-06', false);

  // ---- Parts list (the readable version of the board, newest first) ----------------------------
  $('parts-list').innerHTML = C.companies
    .map((co) => {
      const items = co.projects
        .map((p, i) => {
          const ref = co.ref + '-' + String(i + 1).padStart(2, '0');
          return '<li class="entry" id="p-' + ref + '"><div class="entry-head"><span class="ref">' + ref + '</span>' +
            '<span class="tag">' + esc(C.themeName(p.theme)) + '</span></div>' +
            '<h4>' + esc(p.title) + '</h4><ul>' + p.bullets.map((b) => '<li>' + esc(b) + '</li>').join('') + '</ul></li>';
        })
        .join('');
      return '<article class="company"><header><p class="num">' + esc(co.period) + '</p><h3>' + esc(co.name) + '</h3>' +
        '<p class="company-role">' + esc(co.role) + '</p><p class="company-desc">' + esc(co.description) + '</p></header>' +
        (items ? '<ul class="entries">' + items + '</ul>' : '') + '</article>';
    })
    .join('');

  // ---- Title block, side projects, links ------------------------------------------------------
  const cell = (k, v, cls) => '<div class="' + (cls || '') + '"><dt>' + k + '</dt><dd>' + v + '</dd></div>';
  $('titleblock').innerHTML =
    cell('이름', esc(C.profile.name) + ' <span class="en">' + esc(C.profile.nameEn) + '</span>', 'wide') +
    cell('직무', esc(C.profile.role), 'wide') +
    cell('주요 기술', C.skills.major.map(esc).join(', ')) +
    cell('보조 기술', C.skills.minor.map(esc).join(', ')) +
    cell('학력', C.education.map((e) => esc(e.school + ' ' + e.major) + ' <span class="num">' + esc(e.period) + '</span>').join('<br>')) +
    cell('자격', C.certifications.map((c) => esc(c.name)).join(', ')) +
    C.profile.facts.map((f) => cell(esc(f.label), '<span class="fact">' + esc(f.value) + '</span>')).join('');

  $('modules').innerHTML = C.sideProjects
    .map(
      (s) =>
        '<li><a href="' + s.href + '" target="_blank" rel="noopener noreferrer"><span class="module-name">' + esc(s.name) +
        ' <i class="ph ph-arrow-up-right" aria-hidden="true"></i></span><span class="module-cat">' + esc(s.category) + '</span>' +
        '<span class="module-desc">' + esc(s.description) + '</span><span class="module-tech">' + s.tech.map(esc).join(', ') + '</span></a></li>'
    )
    .join('');

  $('links').innerHTML = C.links
    .map(
      (l) =>
        '<li><a href="' + l.href + '"' + (l.href.startsWith('mailto') ? '' : ' target="_blank" rel="noopener noreferrer"') + '>' +
        '<i class="ph ' + l.icon + '" aria-hidden="true"></i><span class="link-label">' + esc(l.label) + '</span>' +
        '<span class="link-value">' + esc(l.value) + '</span></a></li>'
    )
    .join('');

  // ---- One authored motion: the trace is routed from 2015 to now -----------------------------
  if (!window.REVIEW.still) {
    const trace = $('trace');
    const len = trace.getTotalLength();
    trace.style.strokeDasharray = len;
    trace.style.strokeDashoffset = len;
    requestAnimationFrame(() => document.documentElement.classList.add('routed'));
  }
})();
