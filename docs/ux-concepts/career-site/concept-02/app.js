(function () {
  const C = window.CAREER;
  const esc = C.esc;
  const $ = (id) => document.getElementById(id);
  const VISIBLE = 5; // projects shown before "more" for a long employer entry

  $('name').innerHTML = esc(C.profile.name) + ' <span class="name-en">' + esc(C.profile.nameEn) + '</span>';
  $('role').textContent = C.profile.role;
  $('statement').textContent = C.profile.statement + '.';
  $('about').textContent = C.profile.about;
  $('facts').innerHTML =
    '<strong>9년 넘게</strong> 개발했습니다. <strong>70명</strong> 규모 조직에 AI 도구 셀프서비스 체계를 제공했고, ' +
    '크래시 분석 데이터 <strong>550건</strong>을 AI로 만들었습니다.';

  $('contact').innerHTML = C.links
    .map(
      (l) =>
        '<li><a href="' + l.href + '"' + (l.href.startsWith('mailto') ? '' : ' target="_blank" rel="noopener noreferrer"') + '>' +
        '<i class="ph ' + l.icon + '" aria-hidden="true"></i><span class="sr-only">' + esc(l.label) + ' </span>' + esc(l.value) + '</a></li>'
    )
    .join('');

  $('skills').innerHTML =
    '<div><dt>주요</dt><dd>' + C.skills.major.map(esc).join(', ') + '</dd></div>' +
    '<div><dt>보조</dt><dd>' + C.skills.minor.map(esc).join(', ') + '</dd></div>';

  $('education').innerHTML = C.education
    .map((e) => '<p><strong>' + esc(e.school) + '</strong><br>' + esc(e.major) + '<br><span class="date">' + esc(e.period) + '</span></p>')
    .join('');
  $('certs').innerHTML = C.certifications.map((c) => '<p><strong>' + esc(c.name) + '</strong></p>').join('');

  const work = (p) =>
    '<li class="work"><h4>' + esc(p.title) + '</h4><ul>' + p.bullets.map((b) => '<li>' + esc(b) + '</li>').join('') + '</ul></li>';

  $('jobs').innerHTML = C.companies
    .map((co) => {
      const first = co.projects.slice(0, VISIBLE);
      const rest = co.projects.slice(VISIBLE);
      return (
        '<article class="job"><p class="date">' + esc(co.period) + '</p><div class="job-body">' +
        '<h3>' + esc(co.name) + '</h3><p class="job-role">' + esc(co.role) + '</p><p class="job-desc">' + esc(co.description) + '</p>' +
        (first.length ? '<ul class="works">' + first.map(work).join('') + '</ul>' : '') +
        (rest.length
          ? '<details class="more"><summary><i class="ph ph-plus" aria-hidden="true"></i> 작업 ' + rest.length + '개 더 보기</summary>' +
            '<ul class="works">' + rest.map(work).join('') + '</ul></details>'
          : '') +
        '</div></article>'
      );
    })
    .join('');

  $('side').innerHTML = C.sideProjects
    .map(
      (s) =>
        '<article class="job"><p class="date">' + esc(s.category) + '</p><div class="job-body">' +
        '<h3><a href="' + s.href + '" target="_blank" rel="noopener noreferrer">' + esc(s.name) +
        ' <i class="ph ph-arrow-up-right" aria-hidden="true"></i></a></h3>' +
        '<p class="job-desc">' + esc(s.description) + '</p><p class="tech">' + s.tech.map(esc).join(', ') + '</p></div></article>'
    )
    .join('');

  // Printing shows the whole resume, including collapsed work.
  const details = () => Array.from(document.querySelectorAll('details.more'));
  let reopened = [];
  window.addEventListener('beforeprint', () => {
    reopened = details().filter((d) => !d.open);
    reopened.forEach((d) => (d.open = true));
  });
  window.addEventListener('afterprint', () => reopened.forEach((d) => (d.open = false)));
  $('print').addEventListener('click', () => window.print());
})();
