(function () {
  const C = window.CAREER;
  const esc = C.esc;
  const $ = (id) => document.getElementById(id);
  const all = C.allProjects();
  const fields = C.themes.concat([{ id: 'all', name: '전체', blurb: '분야를 가리지 않고 최근 작업부터 모두' }]);

  $('name').textContent = C.profile.name;
  $('role').textContent = C.profile.role;
  $('statement').textContent = C.profile.statement;
  $('summary').textContent = C.profile.summary;

  const count = (id) => (id === 'all' ? all.length : all.filter((p) => p.theme === id).length);

  $('themes').innerHTML =
    '<ul>' +
    fields
      .map(
        (f) =>
          '<li><a href="#' + f.id + '" data-field="' + f.id + '"><span class="field-name">' + esc(f.name) + '</span>' +
          '<span class="field-count" aria-label="작업 ' + count(f.id) + '개">' + count(f.id) + '</span></a></li>'
      )
      .join('') +
    '</ul>';

  const linkItem = (l, withText) =>
    '<li><a href="' + l.href + '"' + (l.href.startsWith('mailto') ? '' : ' target="_blank" rel="noopener noreferrer"') +
    (withText ? '' : ' aria-label="' + esc(l.label) + '"') + '><i class="ph ' + l.icon + '" aria-hidden="true"></i>' +
    (withText ? '<span><strong>' + esc(l.label) + '</strong>' + esc(l.value) + '</span>' : '') + '</a></li>';
  $('panel-links').innerHTML = C.links.map((l) => linkItem(l, false)).join('');
  $('contact').innerHTML = C.links.map((l) => linkItem(l, true)).join('');

  $('career-rows').innerHTML = C.companies
    .map(
      (co) =>
        '<li><span class="period">' + esc(co.period) + '</span><strong>' + esc(co.name) + '</strong><span class="career-role">' +
        esc(co.role) + '</span></li>'
    )
    .join('');

  $('basics').innerHTML =
    '<div><dt>주요 기술</dt><dd>' + C.skills.major.map(esc).join(', ') + '</dd></div>' +
    '<div><dt>보조 기술</dt><dd>' + C.skills.minor.map(esc).join(', ') + '</dd></div>' +
    '<div><dt>학력</dt><dd>' + C.education.map((e) => esc(e.school + ' ' + e.major) + '<span class="period">' + esc(e.period) + '</span>').join('') + '</dd></div>' +
    '<div><dt>자격</dt><dd>' + C.certifications.map((c) => esc(c.name)).join(', ') + '</dd></div>';

  $('side').innerHTML = C.sideProjects
    .map(
      (s) =>
        '<li><a href="' + s.href + '" target="_blank" rel="noopener noreferrer"><span class="side-name">' + esc(s.name) +
        ' <i class="ph ph-arrow-up-right" aria-hidden="true"></i></span><span class="side-meta">' + esc(s.category) + ', ' +
        s.tech.map(esc).join(', ') + '</span><span class="side-desc">' + esc(s.description) + '</span></a></li>'
    )
    .join('');

  function render(id, animate) {
    const field = fields.find((f) => f.id === id) || fields[0];
    const list = field.id === 'all' ? all : all.filter((p) => p.theme === field.id);
    document.querySelectorAll('#themes a').forEach((a) => {
      if (a.dataset.field === field.id) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
    const view = $('view');
    view.innerHTML =
      '<header class="view-head"><h2><span>' + esc(field.name) + '</span></h2><p>' + esc(field.blurb) + '</p></header>' +
      '<ul class="entries">' +
      list
        .map(
          (p, i) =>
            '<li class="entry" style="--i:' + i + '"><h3>' + esc(p.title) + '</h3>' +
            '<p class="entry-meta">' + esc(p.company.name) + ', ' + esc(p.company.period) + '</p>' +
            '<ul>' + p.bullets.map((b) => '<li>' + esc(b) + '</li>').join('') + '</ul></li>'
        )
        .join('') +
      '</ul>';
    if (animate && !window.REVIEW.still) {
      view.classList.remove('enter');
      void view.offsetWidth; // restart the entrance for the new field
      view.classList.add('enter');
    }
    const active = document.querySelector('#themes a[aria-current]');
    if (active && animate && active.scrollIntoView) active.scrollIntoView({ block: 'nearest', inline: 'center' });
  }

  function current() {
    const id = decodeURIComponent(location.hash.slice(1));
    return fields.some((f) => f.id === id) ? id : fields[0].id;
  }

  $('themes').addEventListener('click', (e) => {
    const a = e.target.closest('a[data-field]');
    if (!a) return;
    e.preventDefault();
    history.pushState(null, '', '#' + a.dataset.field);
    render(a.dataset.field, true);
    // On narrow screens the list is below the fold of the sticky index: bring it into view.
    if (matchMedia('(max-width: 899px)').matches) {
      $('view').scrollIntoView({ block: 'start', behavior: window.REVIEW.still ? 'auto' : 'smooth' });
    }
  });
  window.addEventListener('popstate', () => render(current(), true));
  render(current(), false);
})();
