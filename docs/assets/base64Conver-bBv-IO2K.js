function s(a) {
  const o = a.split(','),
    r = o[0].match(/:(.*?);/)[1],
    t = window.atob(o[1]);
  let n = t.length;
  const e = new Uint8Array(n);
  for (; n--; ) e[n] = t.charCodeAt(n);
  return new Blob([e], { type: r });
}
function l(a, o) {
  return new Promise((c, r) => {
    let t = document.createElement('CANVAS');
    const n = t.getContext('2d'),
      e = new Image();
    (e.crossOrigin = ''),
      (e.onload = function () {
        if (!t || !n) return r();
        (t.height = e.height), (t.width = e.width), n.drawImage(e, 0, 0);
        const i = t.toDataURL(o || 'image/png');
        (t = null), c(i);
      }),
      (e.src = a);
  });
}
export { s as d, l as u };
