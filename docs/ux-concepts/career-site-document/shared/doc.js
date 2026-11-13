// Render helpers shared by the five document variants. Content comes from ../../career-site/shared/data.js.
(function () {
  const C = window.CAREER;
  const esc = C.esc;
  const D = {};

  D.months = (co) => {
    const end = co.end || C.now;
    return end[0] * 12 + end[1] - (co.start[0] * 12 + co.start[1]) + 1;
  };
  D.duration = (co) => {
    const m = D.months(co);
    const parts = [];
    if (m >= 12) parts.push(Math.floor(m / 12) + '년');
    if (m % 12) parts.push((m % 12) + '개월');
    return parts.join(' ');
  };

  D.work = (p, withCompany) =>
    '<li class="work"><h4>' + esc(p.title) + '</h4>' +
    (withCompany ? '<p class="work-meta">' + esc(p.company.name) + ', ' + esc(p.company.period) + '</p>' : '') +
    '<ul>' + p.bullets.map((b) => '<li>' + esc(b) + '</li>').join('') + '</ul></li>';
  D.works = (list, withCompany) => '<ul class="works">' + list.map((p) => D.work(p, withCompany)).join('') + '</ul>';

  D.contact = () =>
    C.links
      .map(
        (l) =>
          '<li><a href="' + l.href + '"' + (l.href.startsWith('mailto') ? '' : ' target="_blank" rel="noopener noreferrer"') + '>' +
          '<i class="ph ' + l.icon + '" aria-hidden="true"></i><span class="sr-only">' + esc(l.label) + ' </span>' + esc(l.value) + '</a></li>'
      )
      .join('');

  D.skills = () =>
    '<div><dt>주요</dt><dd>' + C.skills.major.map(esc).join(', ') + '</dd></div>' +
    '<div><dt>보조</dt><dd>' + C.skills.minor.map(esc).join(', ') + '</dd></div>';

  D.education = () =>
    C.education
      .map((e) => '<p><strong>' + esc(e.school) + '</strong> ' + esc(e.major) + ' <span class="date">' + esc(e.period) + '</span></p>')
      .join('');
  D.certs = () => C.certifications.map((c) => '<p><strong>' + esc(c.name) + '</strong></p>').join('');

  D.facts = () =>
    '<strong>9년 넘게</strong> 개발했습니다. <strong>70명</strong> 규모 조직에 AI 도구 셀프서비스 체계를 제공했고, ' +
    '크래시 분석 데이터 <strong>550건</strong>을 AI로 만들었습니다.';

  D.side = () =>
    C.sideProjects
      .map(
        (s) =>
          '<li class="side-item"><h3><a href="' + s.href + '" target="_blank" rel="noopener noreferrer">' + esc(s.name) +
          ' <i class="ph ph-arrow-up-right" aria-hidden="true"></i></a></h3><p class="side-meta">' + esc(s.category) + ', ' +
          s.tech.map(esc).join(', ') + '</p><p class="side-desc">' + esc(s.description) + '</p></li>'
      )
      .join('');

  D.set = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };
  D.text = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  // Fill the ids every variant shares, when present.
  D.fillCommon = () => {
    D.set('name', esc(C.profile.name) + ' <span class="name-en">' + esc(C.profile.nameEn) + '</span>');
    D.text('role', C.profile.role);
    D.text('statement', C.profile.statement + '.');
    D.text('about', C.profile.about);
    D.set('facts', D.facts());
    D.set('contact', D.contact());
    D.set('skills', D.skills());
    D.set('education', D.education());
    D.set('certs', D.certs());
    D.set('side', D.side());
    document.querySelectorAll('[data-print]').forEach((b) => b.addEventListener('click', () => window.print()));
    // Printing shows the whole resume, including collapsed parts.
    let reopened = [];
    window.addEventListener('beforeprint', () => {
      reopened = Array.from(document.querySelectorAll('details:not([open])'));
      reopened.forEach((d) => (d.open = true));
    });
    window.addEventListener('afterprint', () => reopened.forEach((d) => (d.open = false)));
  };

  window.DOC = D;
})();
