// Review bar for comparing the concepts. State lives in the query string so a view can be shared.
//   ?theme=light|dark   force a theme (default: system)
//   ?still=1            turn every animation off
//   ?embed=1            hide this bar (used for screenshots)
(function () {
  const params = new URLSearchParams(location.search);
  const root = document.documentElement;
  const system = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = params.get('theme') === 'dark' || params.get('theme') === 'light' ? params.get('theme') : system;
  root.dataset.theme = theme;
  if (params.get('still') === '1') root.classList.add('still');

  window.REVIEW = {
    still: root.classList.contains('still') || matchMedia('(prefers-reduced-motion: reduce)').matches,
  };

  if (params.get('embed') === '1') return;

  const concepts = window.REVIEW_CONCEPTS || [
    { dir: 'concept-01', label: '01 기판' },
    { dir: 'concept-02', label: '02 문서' },
    { dir: 'concept-03', label: '03 색인' },
  ];
  const current = concepts.find((c) => location.pathname.includes('/' + c.dir + '/'));

  function href(dir, next) {
    const p = new URLSearchParams(location.search);
    Object.keys(next || {}).forEach((k) => (next[k] === null ? p.delete(k) : p.set(k, next[k])));
    const q = p.toString();
    return '../' + dir + '/index.html' + (q ? '?' + q : '');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const bar = document.createElement('nav');
    bar.className = 'review';
    bar.setAttribute('aria-label', '시안 검토 도구');
    const here = current ? current.dir : concepts[0].dir;
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const still = root.classList.contains('still');
    bar.innerHTML =
      concepts
        .map(
          (c) =>
            '<a href="' + href(c.dir) + '"' + (c.dir === here ? ' aria-current="page"' : '') + '>' + c.label + '</a>'
        )
        .join('') +
      '<span class="review-sep" aria-hidden="true"></span>' +
      '<a href="' + href(here, { theme: nextTheme }) + '" aria-label="' + (nextTheme === 'dark' ? '다크' : '라이트') + ' 테마로 보기">' +
      '<i class="ph ' + (nextTheme === 'dark' ? 'ph-moon' : 'ph-sun') + '" aria-hidden="true"></i>' +
      '<span class="review-label">' + (nextTheme === 'dark' ? '다크' : '라이트') + '</span></a>' +
      '<a href="' + href(here, { still: still ? null : '1' }) + '" aria-label="' + (still ? '모션 켜기' : '모션 끄기') + '">' +
      '<i class="ph ' + (still ? 'ph-play' : 'ph-pause') + '" aria-hidden="true"></i>' +
      '<span class="review-label">' + (still ? '모션' : '정지') + '</span></a>';
    document.body.appendChild(bar);
  });
})();
