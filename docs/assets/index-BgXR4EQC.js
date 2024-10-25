import { P as A } from './index-B24a6rfW.js';
import { C as x } from '../index.js';
import { b as I } from './antd-BmrhB3rb.js';
import {
  d as L,
  a7 as D,
  Z as B,
  a8 as U,
  a9 as v,
  k as j,
  u as w,
  G as O,
} from './vue-BjERyvPm.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
var C = { exports: {} };
(function (P, M) {
  (function (f, n) {
    P.exports = n();
  })(window, function () {
    return (function (m) {
      var f = {};
      function n(o) {
        if (f[o]) return f[o].exports;
        var s = (f[o] = { i: o, l: !1, exports: {} });
        return m[o].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
      }
      return (
        (n.m = m),
        (n.c = f),
        (n.d = function (o, s, a) {
          n.o(o, s) || Object.defineProperty(o, s, { enumerable: !0, get: a });
        }),
        (n.r = function (o) {
          typeof Symbol != 'undefined' &&
            Symbol.toStringTag &&
            Object.defineProperty(o, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(o, '__esModule', { value: !0 });
        }),
        (n.t = function (o, s) {
          if ((s & 1 && (o = n(o)), s & 8 || (s & 4 && typeof o == 'object' && o && o.__esModule)))
            return o;
          var a = Object.create(null);
          if (
            (n.r(a),
            Object.defineProperty(a, 'default', { enumerable: !0, value: o }),
            s & 2 && typeof o != 'string')
          )
            for (var b in o)
              n.d(
                a,
                b,
                function (i) {
                  return o[i];
                }.bind(null, b),
              );
          return a;
        }),
        (n.n = function (o) {
          var s =
            o && o.__esModule
              ? function () {
                  return o.default;
                }
              : function () {
                  return o;
                };
          return n.d(s, 'a', s), s;
        }),
        (n.o = function (o, s) {
          return Object.prototype.hasOwnProperty.call(o, s);
        }),
        (n.p = ''),
        n((n.s = 0))
      );
    })({
      './src/index.js': function (m, f, n) {
        n.r(f), n('./src/sass/index.scss');
        var o = n('./src/js/init.js'),
          s = o.default.init;
        typeof window != 'undefined' && (window.printJS = s), (f.default = s);
      },
      './src/js/browser.js': function (m, f, n) {
        n.r(f);
        var o = {
          isFirefox: function () {
            return typeof InstallTrigger != 'undefined';
          },
          isIE: function () {
            return navigator.userAgent.indexOf('MSIE') !== -1 || !!document.documentMode;
          },
          isEdge: function () {
            return !o.isIE() && !!window.StyleMedia;
          },
          isChrome: function () {
            var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window;
            return !!a.chrome;
          },
          isSafari: function () {
            return (
              Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 ||
              navigator.userAgent.toLowerCase().indexOf('safari') !== -1
            );
          },
          isIOSChrome: function () {
            return navigator.userAgent.toLowerCase().indexOf('crios') !== -1;
          },
        };
        f.default = o;
      },
      './src/js/functions.js': function (m, f, n) {
        n.r(f),
          n.d(f, 'addWrapper', function () {
            return b;
          }),
          n.d(f, 'capitalizePrint', function () {
            return i;
          }),
          n.d(f, 'collectStyles', function () {
            return l;
          }),
          n.d(f, 'addHeader', function () {
            return e;
          }),
          n.d(f, 'cleanUp', function () {
            return u;
          }),
          n.d(f, 'isRawHTML', function () {
            return p;
          });
        var o = n('./src/js/modal.js'),
          s = n('./src/js/browser.js');
        function a(t) {
          '@babel/helpers - typeof';
          return (
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? (a = function (c) {
                  return typeof c;
                })
              : (a = function (c) {
                  return c &&
                    typeof Symbol == 'function' &&
                    c.constructor === Symbol &&
                    c !== Symbol.prototype
                    ? 'symbol'
                    : typeof c;
                }),
            a(t)
          );
        }
        function b(t, d) {
          var c =
            'font-family:' +
            d.font +
            ' !important; font-size: ' +
            d.font_size +
            ' !important; width:100%;';
          return '<div style="' + c + '">' + t + '</div>';
        }
        function i(t) {
          return t.charAt(0).toUpperCase() + t.slice(1);
        }
        function l(t, d) {
          for (
            var c = document.defaultView || window, h = '', y = c.getComputedStyle(t, ''), E = 0;
            E < y.length;
            E++
          )
            (d.targetStyles.indexOf('*') !== -1 ||
              d.targetStyle.indexOf(y[E]) !== -1 ||
              r(d.targetStyles, y[E])) &&
              y.getPropertyValue(y[E]) &&
              (h += y[E] + ':' + y.getPropertyValue(y[E]) + ';');
          return (
            (h +=
              'max-width: ' +
              d.maxWidth +
              'px !important; font-size: ' +
              d.font_size +
              ' !important;'),
            h
          );
        }
        function r(t, d) {
          for (var c = 0; c < t.length; c++)
            if (a(d) === 'object' && d.indexOf(t[c]) !== -1) return !0;
          return !1;
        }
        function e(t, d) {
          var c = document.createElement('div');
          if (p(d.header)) c.innerHTML = d.header;
          else {
            var h = document.createElement('h1'),
              y = document.createTextNode(d.header);
            h.appendChild(y), h.setAttribute('style', d.headerStyle), c.appendChild(h);
          }
          t.insertBefore(c, t.childNodes[0]);
        }
        function u(t) {
          t.showModal && o.default.close(),
            t.onLoadingEnd && t.onLoadingEnd(),
            (t.showModal || t.onLoadingStart) && window.URL.revokeObjectURL(t.printable);
          var d = 'mouseover';
          (s.default.isChrome() || s.default.isFirefox()) && (d = 'focus');
          var c = function h() {
            window.removeEventListener(d, h), t.onPrintDialogClose();
            var y = document.getElementById(t.frameId);
            y && y.remove();
          };
          window.addEventListener(d, c);
        }
        function p(t) {
          var d = new RegExp('<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>');
          return d.test(t);
        }
      },
      './src/js/html.js': function (m, f, n) {
        n.r(f);
        var o = n('./src/js/functions.js'),
          s = n('./src/js/print.js');
        function a(l) {
          '@babel/helpers - typeof';
          return (
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? (a = function (e) {
                  return typeof e;
                })
              : (a = function (e) {
                  return e &&
                    typeof Symbol == 'function' &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
            a(l)
          );
        }
        f.default = {
          print: function (r, e) {
            var u = i(r.printable) ? r.printable : document.getElementById(r.printable);
            if (!u) {
              window.console.error('Invalid HTML element id: ' + r.printable);
              return;
            }
            (r.printableElement = b(u, r)),
              r.header && Object(o.addHeader)(r.printableElement, r),
              s.default.send(r, e);
          },
        };
        function b(l, r) {
          for (
            var e = l.cloneNode(), u = Array.prototype.slice.call(l.childNodes), p = 0;
            p < u.length;
            p++
          )
            if (r.ignoreElements.indexOf(u[p].id) === -1) {
              var t = b(u[p], r);
              e.appendChild(t);
            }
          switch (
            (r.scanStyles &&
              l.nodeType === 1 &&
              e.setAttribute('style', Object(o.collectStyles)(l, r)),
            l.tagName)
          ) {
            case 'SELECT':
              e.value = l.value;
              break;
            case 'CANVAS':
              e.getContext('2d').drawImage(l, 0, 0);
              break;
          }
          return e;
        }
        function i(l) {
          return a(l) === 'object' && l && (l instanceof HTMLElement || l.nodeType === 1);
        }
      },
      './src/js/image.js': function (m, f, n) {
        n.r(f);
        var o = n('./src/js/functions.js'),
          s = n('./src/js/print.js'),
          a = n('./src/js/browser.js');
        f.default = {
          print: function (i, l) {
            i.printable.constructor !== Array && (i.printable = [i.printable]),
              (i.printableElement = document.createElement('div')),
              i.printable.forEach(function (r) {
                var e = document.createElement('img');
                if ((e.setAttribute('style', i.imageStyle), (e.src = r), a.default.isFirefox())) {
                  var u = e.src;
                  e.src = u;
                }
                var p = document.createElement('div');
                p.appendChild(e), i.printableElement.appendChild(p);
              }),
              i.header && Object(o.addHeader)(i.printableElement, i),
              s.default.send(i, l);
          },
        };
      },
      './src/js/init.js': function (m, f, n) {
        n.r(f);
        var o = n('./src/js/browser.js'),
          s = n('./src/js/modal.js'),
          a = n('./src/js/pdf.js'),
          b = n('./src/js/html.js'),
          i = n('./src/js/raw-html.js'),
          l = n('./src/js/image.js'),
          r = n('./src/js/json.js');
        function e(p) {
          '@babel/helpers - typeof';
          return (
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? (e = function (d) {
                  return typeof d;
                })
              : (e = function (d) {
                  return d &&
                    typeof Symbol == 'function' &&
                    d.constructor === Symbol &&
                    d !== Symbol.prototype
                    ? 'symbol'
                    : typeof d;
                }),
            e(p)
          );
        }
        var u = ['pdf', 'html', 'image', 'json', 'raw-html'];
        f.default = {
          init: function () {
            var t = {
                printable: null,
                fallbackPrintable: null,
                type: 'pdf',
                header: null,
                headerStyle: 'font-weight: 300;',
                maxWidth: 800,
                properties: null,
                gridHeaderStyle: 'font-weight: bold; padding: 5px; border: 1px solid #dddddd;',
                gridStyle: 'border: 1px solid lightgray; margin-bottom: -1px;',
                showModal: !1,
                onError: function (T) {
                  throw T;
                },
                onLoadingStart: null,
                onLoadingEnd: null,
                onPrintDialogClose: function () {},
                onIncompatibleBrowser: function () {},
                modalMessage: 'Retrieving Document...',
                frameId: 'printJS',
                printableElement: null,
                documentTitle: 'Document',
                targetStyle: [
                  'clear',
                  'display',
                  'width',
                  'min-width',
                  'height',
                  'min-height',
                  'max-height',
                ],
                targetStyles: ['border', 'box', 'break', 'text-decoration'],
                ignoreElements: [],
                repeatTableHeader: !0,
                css: null,
                style: null,
                scanStyles: !0,
                base64: !1,
                onPdfOpen: null,
                font: 'TimesNewRoman',
                font_size: '12pt',
                honorMarginPadding: !0,
                honorColor: !1,
                imageStyle: 'max-width: 100%;',
              },
              d = arguments[0];
            if (d === void 0) throw new Error('printJS expects at least 1 attribute.');
            switch (e(d)) {
              case 'string':
                (t.printable = encodeURI(d)),
                  (t.fallbackPrintable = t.printable),
                  (t.type = arguments[1] || t.type);
                break;
              case 'object':
                (t.printable = d.printable),
                  (t.fallbackPrintable =
                    typeof d.fallbackPrintable != 'undefined' ? d.fallbackPrintable : t.printable),
                  (t.fallbackPrintable = t.base64
                    ? 'data:application/pdf;base64,'.concat(t.fallbackPrintable)
                    : t.fallbackPrintable);
                for (var c in t)
                  c === 'printable' ||
                    c === 'fallbackPrintable' ||
                    (t[c] = typeof d[c] != 'undefined' ? d[c] : t[c]);
                break;
              default:
                throw new Error(
                  'Unexpected argument type! Expected "string" or "object", got ' + e(d),
                );
            }
            if (!t.printable) throw new Error('Missing printable information.');
            if (!t.type || typeof t.type != 'string' || u.indexOf(t.type.toLowerCase()) === -1)
              throw new Error(
                'Invalid print type. Available types are: pdf, html, image and json.',
              );
            t.showModal && s.default.show(t), t.onLoadingStart && t.onLoadingStart();
            var h = document.getElementById(t.frameId);
            h && h.parentNode.removeChild(h);
            var y = document.createElement('iframe');
            switch (
              (o.default.isFirefox()
                ? y.setAttribute(
                    'style',
                    'width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0',
                  )
                : y.setAttribute(
                    'style',
                    'visibility: hidden; height: 0; width: 0; position: absolute; border: 0',
                  ),
              y.setAttribute('id', t.frameId),
              t.type !== 'pdf' &&
                ((y.srcdoc = '<html><head><title>' + t.documentTitle + '</title>'),
                t.css &&
                  (Array.isArray(t.css) || (t.css = [t.css]),
                  t.css.forEach(function (g) {
                    y.srcdoc += '<link rel="stylesheet" href="' + g + '">';
                  })),
                (y.srcdoc += '</head><body></body></html>')),
              t.type)
            ) {
              case 'pdf':
                if (o.default.isIE())
                  try {
                    var E = window.open(t.fallbackPrintable, '_blank');
                    E.focus(), t.onIncompatibleBrowser();
                  } catch (g) {
                    t.onError(g);
                  } finally {
                    t.showModal && s.default.close(), t.onLoadingEnd && t.onLoadingEnd();
                  }
                else a.default.print(t, y);
                break;
              case 'image':
                l.default.print(t, y);
                break;
              case 'html':
                b.default.print(t, y);
                break;
              case 'raw-html':
                i.default.print(t, y);
                break;
              case 'json':
                r.default.print(t, y);
                break;
            }
          },
        };
      },
      './src/js/json.js': function (m, f, n) {
        n.r(f);
        var o = n('./src/js/functions.js'),
          s = n('./src/js/print.js');
        function a(i) {
          '@babel/helpers - typeof';
          return (
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? (a = function (r) {
                  return typeof r;
                })
              : (a = function (r) {
                  return r &&
                    typeof Symbol == 'function' &&
                    r.constructor === Symbol &&
                    r !== Symbol.prototype
                    ? 'symbol'
                    : typeof r;
                }),
            a(i)
          );
        }
        f.default = {
          print: function (l, r) {
            if (a(l.printable) !== 'object')
              throw new Error('Invalid javascript data object (JSON).');
            if (typeof l.repeatTableHeader != 'boolean')
              throw new Error('Invalid value for repeatTableHeader attribute (JSON).');
            if (!l.properties || !Array.isArray(l.properties))
              throw new Error('Invalid properties array for your JSON data.');
            (l.properties = l.properties.map(function (e) {
              return {
                field: a(e) === 'object' ? e.field : e,
                displayName: a(e) === 'object' ? e.displayName : e,
                columnSize:
                  a(e) === 'object' && e.columnSize
                    ? e.columnSize + ';'
                    : 100 / l.properties.length + '%;',
              };
            })),
              (l.printableElement = document.createElement('div')),
              l.header && Object(o.addHeader)(l.printableElement, l),
              (l.printableElement.innerHTML += b(l)),
              s.default.send(l, r);
          },
        };
        function b(i) {
          var l = i.printable,
            r = i.properties,
            e = '<table style="border-collapse: collapse; width: 100%;">';
          i.repeatTableHeader && (e += '<thead>'), (e += '<tr>');
          for (var u = 0; u < r.length; u++)
            e +=
              '<th style="width:' +
              r[u].columnSize +
              ';' +
              i.gridHeaderStyle +
              '">' +
              Object(o.capitalizePrint)(r[u].displayName) +
              '</th>';
          (e += '</tr>'), i.repeatTableHeader && (e += '</thead>'), (e += '<tbody>');
          for (var p = 0; p < l.length; p++) {
            e += '<tr>';
            for (var t = 0; t < r.length; t++) {
              var d = l[p],
                c = r[t].field.split('.');
              if (c.length > 1) for (var h = 0; h < c.length; h++) d = d[c[h]];
              else d = d[r[t].field];
              e += '<td style="width:' + r[t].columnSize + i.gridStyle + '">' + d + '</td>';
            }
            e += '</tr>';
          }
          return (e += '</tbody></table>'), e;
        }
      },
      './src/js/modal.js': function (m, f, n) {
        n.r(f);
        var o = {
          show: function (a) {
            var b =
                'font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;',
              i = document.createElement('div');
            i.setAttribute('style', b), i.setAttribute('id', 'printJS-Modal');
            var l = document.createElement('div');
            l.setAttribute(
              'style',
              'display:table-cell; vertical-align:middle; padding-bottom:100px;',
            );
            var r = document.createElement('div');
            r.setAttribute('class', 'printClose'),
              r.setAttribute('id', 'printClose'),
              l.appendChild(r);
            var e = document.createElement('span');
            e.setAttribute('class', 'printSpinner'), l.appendChild(e);
            var u = document.createTextNode(a.modalMessage);
            l.appendChild(u),
              i.appendChild(l),
              document.getElementsByTagName('body')[0].appendChild(i),
              document.getElementById('printClose').addEventListener('click', function () {
                o.close();
              });
          },
          close: function () {
            var a = document.getElementById('printJS-Modal');
            a && a.parentNode.removeChild(a);
          },
        };
        f.default = o;
      },
      './src/js/pdf.js': function (m, f, n) {
        n.r(f);
        var o = n('./src/js/print.js'),
          s = n('./src/js/functions.js');
        f.default = {
          print: function (i, l) {
            if (i.base64) {
              var r = Uint8Array.from(atob(i.printable), function (u) {
                return u.charCodeAt(0);
              });
              a(i, l, r);
              return;
            }
            i.printable = /^(blob|http|\/\/)/i.test(i.printable)
              ? i.printable
              : window.location.origin +
                (i.printable.charAt(0) !== '/' ? '/' + i.printable : i.printable);
            var e = new window.XMLHttpRequest();
            (e.responseType = 'arraybuffer'),
              e.addEventListener('error', function () {
                Object(s.cleanUp)(i), i.onError(e.statusText, e);
              }),
              e.addEventListener('load', function () {
                if ([200, 201].indexOf(e.status) === -1) {
                  Object(s.cleanUp)(i), i.onError(e.statusText, e);
                  return;
                }
                a(i, l, e.response);
              }),
              e.open('GET', i.printable, !0),
              e.send();
          },
        };
        function a(b, i, l) {
          var r = new window.Blob([l], { type: 'application/pdf' });
          (r = window.URL.createObjectURL(r)), i.setAttribute('src', r), o.default.send(b, i);
        }
      },
      './src/js/print.js': function (m, f, n) {
        n.r(f);
        var o = n('./src/js/browser.js'),
          s = n('./src/js/functions.js'),
          a = {
            send: function (e, u) {
              document.getElementsByTagName('body')[0].appendChild(u);
              var p = document.getElementById(e.frameId);
              p.onload = function () {
                if (e.type === 'pdf') {
                  o.default.isFirefox()
                    ? setTimeout(function () {
                        return b(p, e);
                      }, 1e3)
                    : b(p, e);
                  return;
                }
                var t = p.contentWindow || p.contentDocument;
                if (
                  (t.document && (t = t.document),
                  t.body.appendChild(e.printableElement),
                  e.type !== 'pdf' && e.style)
                ) {
                  var d = document.createElement('style');
                  (d.innerHTML = e.style), t.head.appendChild(d);
                }
                var c = t.getElementsByTagName('img');
                c.length > 0
                  ? i(Array.from(c)).then(function () {
                      return b(p, e);
                    })
                  : b(p, e);
              };
            },
          };
        function b(r, e) {
          try {
            if ((r.focus(), o.default.isEdge() || o.default.isIE()))
              try {
                r.contentWindow.document.execCommand('print', !1, null);
              } catch (u) {
                r.contentWindow.print();
              }
            else r.contentWindow.print();
          } catch (u) {
            e.onError(u);
          } finally {
            o.default.isFirefox() && ((r.style.visibility = 'hidden'), (r.style.left = '-1px')),
              Object(s.cleanUp)(e);
          }
        }
        function i(r) {
          var e = r.map(function (u) {
            if (u.src && u.src !== window.location.href) return l(u);
          });
          return Promise.all(e);
        }
        function l(r) {
          return new Promise(function (e) {
            var u = function p() {
              !r || typeof r.naturalWidth == 'undefined' || r.naturalWidth === 0 || !r.complete
                ? setTimeout(p, 500)
                : e();
            };
            u();
          });
        }
        f.default = a;
      },
      './src/js/raw-html.js': function (m, f, n) {
        n.r(f);
        var o = n('./src/js/print.js');
        f.default = {
          print: function (a, b) {
            (a.printableElement = document.createElement('div')),
              a.printableElement.setAttribute('style', 'width:100%'),
              (a.printableElement.innerHTML = a.printable),
              o.default.send(a, b);
          },
        };
      },
      './src/sass/index.scss': function (m, f, n) {},
      0: function (m, f, n) {
        m.exports = n('./src/index.js');
      },
    }).default;
  });
})(C);
var W = C.exports;
const S = I(W),
  V = L({
    name: 'AppLogo',
    __name: 'index',
    setup(P) {
      function M() {
        S({
          printable: [
            { name: 'll', email: '123@gmail.com', phone: '123' },
            { name: 'qq', email: '456@gmail.com', phone: '456' },
          ],
          properties: ['name', 'email', 'phone'],
          type: 'json',
        });
      }
      function m() {
        S({
          printable: [
            'https://anncwb.github.io/anncwb/images/preview1.png',
            'https://anncwb.github.io/anncwb/images/preview2.png',
          ],
          type: 'image',
          header: 'Multiple Images',
          imageStyle: 'width:100%;',
        });
      }
      return (f, n) => {
        const o = D('a-button');
        return (
          B(),
          U(
            w(A),
            { title: '打印示例' },
            {
              default: v(() => [
                j(
                  w(x),
                  { title: 'json打印表格' },
                  {
                    default: v(() => [
                      j(
                        o,
                        { type: 'primary', onClick: M },
                        { default: v(() => [O('打印')]), _: 1 },
                      ),
                    ]),
                    _: 1,
                  },
                ),
                j(
                  o,
                  { type: 'primary', class: 'mt-5', onClick: m },
                  { default: v(() => [O('Image Print')]), _: 1 },
                ),
              ]),
              _: 1,
            },
          )
        );
      };
    },
  });
export { V as default };
