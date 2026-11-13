// Helpers for the simple round. Work is shown as a title; its detail opens on demand.
(function () {
  const C = window.CAREER;
  const esc = C.esc;
  const S = {};

  S.items = (projects) =>
    '<ul class="items">' +
    projects
      .map(
        (p) =>
          !p.bullets.length
            ? '<li class="item-plain"><span>' + esc(p.title) + '</span></li>'
            : '<li><details class="item"><summary><i class="ph ph-plus" aria-hidden="true"></i><span>' + esc(p.title) + '</span></summary>' +
          '<ul class="bul">' + p.bullets.map((b) => '<li>' + esc(b) + '</li>').join('') + '</ul></details></li>'
      )
      .join('') +
    '</ul>';

  // Contact as plain words.
  S.links = () =>
    C.links
      .map(
        (l) =>
          '<li><a href="' + l.href + '"' + (l.href.startsWith('mailto') ? '' : ' target="_blank" rel="noopener noreferrer"') + '>' + esc(l.label) + '</a></li>'
      )
      .join('');

  // Contact with the address spelled out.
  S.linksFull = () =>
    C.links
      .map(
        (l) =>
          '<li><span>' + esc(l.label) + '</span><a href="' + l.href + '"' + (l.href.startsWith('mailto') ? '' : ' target="_blank" rel="noopener noreferrer"') + '>' + esc(l.value) + '</a></li>'
      )
      .join('');

  S.side = () =>
    C.sideProjects
      .map(
        (s) =>
          '<li><a href="' + s.href + '" target="_blank" rel="noopener noreferrer">' + esc(s.name) + '</a><span>' + esc(s.highlight) + '</span></li>'
      )
      .join('');

  S.skillsLine = () => C.skills.major.concat(C.skills.minor).map(esc).join(', ');
  S.eduLine = () => C.education.map((e) => esc(e.school + ' ' + e.major)).join(', ');
  S.eduPeriod = () => C.education.map((e) => esc(e.period)).join(', ');
  S.certLine = () => C.certifications.map((c) => esc(c.name)).join(', ');

  S.init = () => {
    document.querySelectorAll('[data-print]').forEach((b) => b.addEventListener('click', () => window.print()));
    let reopened = [];
    window.addEventListener('beforeprint', () => {
      reopened = Array.from(document.querySelectorAll('details:not([open])'));
      reopened.forEach((d) => (d.open = true));
    });
    window.addEventListener('afterprint', () => reopened.forEach((d) => (d.open = false)));
  };

  window.SIMPLE = S;
})();
