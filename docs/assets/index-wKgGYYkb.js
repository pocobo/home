import { p as Z, f as q, aE as J } from '../index.js';
import { aC as D, l as K, aA as Q, aL as e2, aM as t2 } from './antd-BmrhB3rb.js';
import {
  d as y,
  c as x,
  Z as C,
  _ as N,
  k as c,
  a9 as S,
  ae as n2,
  F as c2,
  aa as s2,
  a8 as b,
  u as a,
  ac as O,
  ad as i2,
  a1 as l2,
  r as a2,
  f as V,
  h as o2,
  G as W,
  x as r2,
  a7 as f2,
} from './vue-BjERyvPm.js';
import { P as d2 } from './index-B24a6rfW.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const m2 = y({
    name: 'ImagePreview',
    __name: 'Preview',
    props: { functional: Z.bool, imageList: { type: Array } },
    setup(n) {
      const r = D.PreviewGroup,
        f = n,
        { prefixCls: d } = q('image-preview'),
        t = x(() => {
          const { imageList: o } = f;
          return o ? o.map((m) => (K(m) ? { src: m, placeholder: !1 } : m)) : [];
        });
      return (o, m) => (
        C(),
        N(
          'div',
          { class: l2(a(d)) },
          [
            c(a(r), null, {
              default: S(() => [
                !n.imageList || o.$slots.default
                  ? n2(o.$slots, 'default', { key: 0 })
                  : (C(!0),
                    N(
                      c2,
                      { key: 1 },
                      s2(
                        t.value,
                        (u) => (
                          C(),
                          b(
                            a(D),
                            O({ key: u.src, ref_for: !0 }, u),
                            i2({ _: 2 }, [
                              u.placeholder
                                ? {
                                    name: 'placeholder',
                                    fn: S(() => [
                                      c(
                                        a(D),
                                        O({ ref_for: !0 }, u, { src: u.placeholder, preview: !1 }),
                                        null,
                                        16,
                                        ['src'],
                                      ),
                                    ]),
                                    key: '0',
                                  }
                                : void 0,
                            ]),
                            1040,
                          )
                        ),
                      ),
                      128,
                    )),
              ]),
              _: 3,
            }),
          ],
          2,
        )
      );
    },
  }),
  g2 =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1595307154239'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='7317'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='48'%20height='48'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e%3c/style%3e%3c/defs%3e%3cpath%20d='M316%20672h60c4.4%200%208-3.6%208-8V360c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v304c0%204.4%203.6%208%208%208zM512%20622c22.1%200%2040-17.9%2040-39%200-23.1-17.9-41-40-41s-40%2017.9-40%2041c0%2021.1%2017.9%2039%2040%2039zM512%20482c22.1%200%2040-17.9%2040-39%200-23.1-17.9-41-40-41s-40%2017.9-40%2041c0%2021.1%2017.9%2039%2040%2039z'%20p-id='7318'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20d='M880%20112H144c-17.7%200-32%2014.3-32%2032v736c0%2017.7%2014.3%2032%2032%2032h736c17.7%200%2032-14.3%2032-32V144c0-17.7-14.3-32-32-32z%20m-40%20728H184V184h656v656z'%20p-id='7319'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20d='M648%20672h60c4.4%200%208-3.6%208-8V360c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v304c0%204.4%203.6%208%208%208z'%20p-id='7320'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e",
  u2 =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1595306944988'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='1820'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='48'%20height='48'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e%3c/style%3e%3c/defs%3e%3cpath%20d='M1464.3%20279.7'%20p-id='1821'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20d='M512%20960c-60.5%200-119.1-11.9-174.4-35.2-53.4-22.6-101.3-54.9-142.4-96s-73.4-89-96-142.4C75.9%20631.1%2064%20572.5%2064%20512s11.9-119.1%2035.2-174.4c22.6-53.4%2054.9-101.3%2096-142.4s89-73.4%20142.4-96C392.9%2075.9%20451.5%2064%20512%2064s119.1%2011.9%20174.4%2035.2c53.4%2022.6%20101.3%2054.9%20142.4%2096s73.4%2089%2096%20142.4C948.1%20392.9%20960%20451.5%20960%20512c0%2019.1-15.5%2034.6-34.6%2034.6s-34.6-15.5-34.6-34.6c0-51.2-10-100.8-29.8-147.4-19.1-45.1-46.4-85.6-81.2-120.4C745%20209.4%20704.5%20182%20659.4%20163c-46.7-19.7-96.3-29.8-147.4-29.8-51.2%200-100.8%2010-147.4%2029.8-45.1%2019.1-85.6%2046.4-120.4%2081.2S182%20319.5%20163%20364.6c-19.7%2046.7-29.8%2096.3-29.8%20147.4%200%2051.2%2010%20100.8%2029.8%20147.4%2019.1%2045.1%2046.4%2085.6%2081.2%20120.4C279%20814.6%20319.5%20842%20364.6%20861c46.7%2019.7%2096.3%2029.8%20147.4%2029.8%2064.6%200%20128.4-16.5%20184.4-47.8%2054.4-30.4%20100.9-74.1%20134.6-126.6%2010.3-16.1%2031.7-20.8%2047.8-10.4%2016.1%2010.3%2020.8%2031.7%2010.4%2047.8-39.8%2062-94.8%20113.7-159.1%20149.6-66.2%2037-141.7%2056.6-218.1%2056.6z'%20p-id='1822'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20d='M924%20552c-19.8%200-36-16.2-36-36V228c0-19.8%2016.2-36%2036-36s36%2016.2%2036%2036v288c0%2019.8-16.2%2036-36%2036zM275.4%20575.5c9.5-2.5%2019.1%202.9%2022.3%2012.2%203.5%2010.2%209.9%2017.7%2019.1%2022.6%207.1%203.9%2015.1%205.8%2024%205.8%2016.6%200%2030.8-6.9%2042.5-20.8%2011.7-13.8%2020-32.7%2024.9-75.1-7.7%2012.2-17.3%2020.8-28.7%2025.8-11.4%205-23.7%207.4-36.8%207.4-26.7%200-47.7-8.3-63.3-24.9-15.5-16.6-23.3-37.9-23.3-64.1%200-25.1%207.7-47.1%2023-66.2%2015.3-19%2037.9-28.6%2067.8-28.6%2040.3%200%2068.1%2018.1%2083.4%2054.4%208.5%2019.9%2012.7%2044.9%2012.7%2074.9%200%2033.8-5.1%2063.8-15.3%2089.9-16.9%2043.5-45.5%2065.2-85.8%2065.2-27%200-47.6-7.1-61.6-21.2-10-10.1-16.4-22-19.3-35.8-2-9.6%204-19.1%2013.5-21.6l0.9%200.1z%20m103-74.4c9.4-7.5%2014.1-20.6%2014.1-39.3%200-16.8-4.2-29.3-12.7-37.5S360.6%20412%20347.5%20412c-14%200-25.2%204.7-33.4%2014.1-8.2%209.4-12.4%2022-12.4%2037.7%200%2014.9%203.6%2026.7%2010.9%2035.5%207.2%208.8%2018.8%2013.1%2034.6%2013.1%2011.4%200%2021.8-3.8%2031.2-11.3zM646.6%20414.4c12.4%2022.8%2018.5%2054%2018.5%2093.7%200%2037.6-5.6%2068.7-16.8%2093.3-16.2%2035.3-42.8%2052.9-79.6%2052.9-33.2%200-57.9-14.4-74.2-43.3-13.5-24.1-20.3-56.4-20.3-97%200-31.4%204.1-58.4%2012.2-80.9%2015.2-42%2042.7-63%2082.5-63%2035.9%200%2061.8%2014.8%2077.7%2044.3z%20m-40.2%20173.3c9.4-13.9%2014-39.9%2014-78%200-27.4-3.4-50-10.1-67.7-6.8-17.7-19.9-26.6-39.4-26.6-17.9%200-31%208.4-39.3%2025.2-8.3%2016.8-12.4%2041.6-12.4%2074.3%200%2024.6%202.6%2044.4%207.9%2059.4%208.1%2022.8%2022%2034.3%2041.6%2034.3%2015.7%200%2028.3-7%2037.7-20.9zM803.3%20387.2c11.2%2011.3%2016.8%2025%2016.8%2041.2%200%2016.7-5.8%2030.7-17.5%2041.8C791%20481.4%20777.4%20487%20762%20487c-17.1%200-31.2-5.8-42.1-17.4-10.9-11.6-16.4-25.1-16.4-40.6%200-16.5%205.8-30.4%2017.3-41.7%2011.5-11.3%2025.3-17%2041.2-17%2016.3%200%2030.1%205.7%2041.3%2016.9zM739.5%20451c6.2%206.2%2013.7%209.3%2022.5%209.3%208.4%200%2015.8-3.1%2022.1-9.3%206.3-6.2%209.4-13.7%209.4-22.6%200-8.5-3.1-15.9-9.3-22.1-6.2-6.2-13.6-9.3-22.2-9.3s-16.1%203.1-22.4%209.3c-6.3%206.2-9.4%2013.7-9.4%2022.6-0.1%208.4%203%2015.8%209.3%2022.1z'%20p-id='1823'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e",
  h2 =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1595307195033'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='8116'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='48'%20height='48'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e%3c/style%3e%3c/defs%3e%3cpath%20d='M887.081%20904.791a25.8%2025.8%200%200%201-18.376-7.619L705.618%20734.075l-4.163%203.369c-58.255%2047.18-131.522%2073.16-206.32%2073.16-181.07%200-328.377-147.308-328.377-328.367%200-181.068%20147.308-328.376%20328.377-328.376%20181.063%200%20328.376%20147.308%20328.376%20328.376%200%2077.072-27.412%20152.07-77.169%20211.17l-3.522%204.173%20162.719%20162.744a25.846%2025.846%200%200%201%207.639%2018.432%2026.081%2026.081%200%200%201-26.051%2026.045l-0.046-0.01zM495.13%20205.957c-152.336%200-276.27%20123.935-276.27%20276.27%200%20152.33%20123.934%20276.27%20276.27%20276.27%20152.34%200%20276.275-123.94%20276.275-276.27%200-152.335-123.935-276.27-276.275-276.27z'%20fill='%23ffffff'%20p-id='8117'%3e%3c/path%3e%3cpath%20d='M626.545%20508.355h-262.83a26.127%2026.127%200%200%201%200-52.255h262.83a26.127%2026.127%200%200%201%200%2052.255z'%20fill='%23ffffff'%20p-id='8118'%3e%3c/path%3e%3cpath%20d='M495.13%20639.77a26.127%2026.127%200%200%201-26.128-26.128v-262.83a26.127%2026.127%200%200%201%2052.255%200v262.835a26.127%2026.127%200%200%201-26.127%2026.123z'%20fill='%23ffffff'%20p-id='8119'%3e%3c/path%3e%3c/svg%3e",
  p2 =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1595308005241'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='9878'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='48'%20height='48'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e%3c/style%3e%3c/defs%3e%3cpath%20d='M750.3%20198.7C598%2046.4%20351.1%2046.4%20198.7%20198.7s-152.3%20399.2%200%20551.5C345.1%20896.6%20578.8%20902.3%20732%20767.3l172.1%20172.1%2035.4-35.4-172.1-171.9c135-153.2%20129.3-387-17.1-533.4z%20m39.3%20403.8c-17.1%2042.1-42.2%2080-74.7%20112.4-32.5%2032.5-70.3%2057.6-112.4%2074.7-40.7%2016.5-83.8%2024.9-128%2024.9s-87.2-8.4-128-24.9c-42.1-17.1-80-42.2-112.4-74.7s-57.6-70.3-74.7-112.4c-16.5-40.7-24.9-83.8-24.9-128s8.4-87.2%2024.9-128c17.1-42.1%2042.2-80%2074.7-112.4s70.3-57.6%20112.4-74.7c40.7-16.5%2083.8-24.9%20128-24.9s87.2%208.4%20128%2024.9c42.1%2017.1%2080%2042.2%20112.4%2074.7%2032.5%2032.5%2057.6%2070.3%2074.7%20112.4%2016.5%2040.7%2024.9%2083.8%2024.9%20128s-8.4%2087.3-24.9%20128zM671%20502H271v-50h400v50z'%20fill='%23ffffff'%20p-id='9879'%3e%3c/path%3e%3c/svg%3e",
  v2 =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1595306911635'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='1352'%20width='48'%20height='48'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e%3c/style%3e%3c/defs%3e%3cpath%20d='M924.8%20337.6c-22.6-53.4-54.9-101.3-96-142.4s-89-73.4-142.4-96C631.1%2075.9%20572.5%2064%20512%2064S392.9%2075.9%20337.6%2099.2c-53.4%2022.6-101.3%2054.9-142.4%2096-22.4%2022.4-42.2%2046.8-59.2%2073.1V228c0-19.8-16.2-36-36-36s-36%2016.2-36%2036v288c0%2019.8%2016.2%2036%2036%2036s36-16.2%2036-36v-50.2c4.2-34.8%2013.2-68.7%2027-101.2%2019.1-45.1%2046.4-85.6%2081.2-120.4C279%20209.4%20319.5%20182%20364.6%20163c46.7-19.7%2096.3-29.8%20147.4-29.8%2051.2%200%20100.8%2010%20147.4%2029.8%2045.1%2019.1%2085.6%2046.4%20120.4%2081.2C814.6%20279%20842%20319.5%20861%20364.6c19.7%2046.7%2029.8%2096.3%2029.8%20147.4%200%2051.2-10%20100.8-29.8%20147.4-19.1%2045.1-46.4%2085.6-81.2%20120.4C745%20814.6%20704.5%20842%20659.4%20861c-46.7%2019.7-96.3%2029.8-147.4%2029.8-64.6%200-128.4-16.5-184.4-47.8-54.4-30.4-100.9-74.1-134.6-126.6-10.3-16.1-31.7-20.8-47.8-10.4-16.1%2010.3-20.8%2031.7-10.4%2047.8%2039.8%2062%2094.8%20113.7%20159.1%20149.6%2066.2%2037%20141.7%2056.6%20218.1%2056.6%2060.5%200%20119.1-11.9%20174.4-35.2%2053.4-22.6%20101.3-54.9%20142.4-96%2041.1-41.1%2073.4-89%2096-142.4C948.1%20631.1%20960%20572.5%20960%20512s-11.9-119.1-35.2-174.4z'%20p-id='1353'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20d='M275.4%20575.5c9.5-2.5%2019.1%202.9%2022.3%2012.2%203.5%2010.2%209.9%2017.7%2019.1%2022.6%207.1%203.9%2015.1%205.8%2024%205.8%2016.6%200%2030.8-6.9%2042.5-20.8%2011.7-13.8%2020-32.7%2024.9-75.1-7.7%2012.2-17.3%2020.8-28.7%2025.8-11.4%205-23.7%207.4-36.8%207.4-26.7%200-47.7-8.3-63.3-24.9-15.5-16.6-23.3-37.9-23.3-64.1%200-25.1%207.7-47.1%2023-66.2%2015.3-19%2037.9-28.6%2067.8-28.6%2040.3%200%2068.1%2018.1%2083.4%2054.4%208.5%2019.9%2012.7%2044.9%2012.7%2074.9%200%2033.8-5.1%2063.8-15.3%2089.9-16.9%2043.5-45.5%2065.2-85.8%2065.2-27%200-47.6-7.1-61.6-21.2-10-10.1-16.4-22-19.3-35.8-2-9.6%204-19.1%2013.5-21.6l0.9%200.1z%20m103-74.4c9.4-7.5%2014.1-20.6%2014.1-39.3%200-16.8-4.2-29.3-12.7-37.5S360.6%20412%20347.5%20412c-14%200-25.2%204.7-33.4%2014.1-8.2%209.4-12.4%2022-12.4%2037.7%200%2014.9%203.6%2026.7%2010.9%2035.5%207.2%208.8%2018.8%2013.1%2034.6%2013.1%2011.4%200%2021.8-3.8%2031.2-11.3zM646.6%20414.4c12.4%2022.8%2018.5%2054%2018.5%2093.7%200%2037.6-5.6%2068.7-16.8%2093.3-16.2%2035.3-42.8%2052.9-79.6%2052.9-33.2%200-57.9-14.4-74.2-43.3-13.5-24.1-20.3-56.4-20.3-97%200-31.4%204.1-58.4%2012.2-80.9%2015.2-42%2042.7-63%2082.5-63%2035.9%200%2061.8%2014.8%2077.7%2044.3z%20m-40.2%20173.3c9.4-13.9%2014-39.9%2014-78%200-27.4-3.4-50-10.1-67.7-6.8-17.7-19.9-26.6-39.4-26.6-17.9%200-31%208.4-39.3%2025.2-8.3%2016.8-12.4%2041.6-12.4%2074.3%200%2024.6%202.6%2044.4%207.9%2059.4%208.1%2022.8%2022%2034.3%2041.6%2034.3%2015.7%200%2028.3-7%2037.7-20.9zM803.3%20387.2c11.2%2011.3%2016.8%2025%2016.8%2041.2%200%2016.7-5.8%2030.7-17.5%2041.8C791%20481.4%20777.4%20487%20762%20487c-17.1%200-31.2-5.8-42.1-17.4-10.9-11.6-16.4-25.1-16.4-40.6%200-16.5%205.8-30.4%2017.3-41.7%2011.5-11.3%2025.3-17%2041.2-17%2016.3%200%2030.1%205.7%2041.3%2016.9zM739.5%20451c6.2%206.2%2013.7%209.3%2022.5%209.3%208.4%200%2015.8-3.1%2022.1-9.3%206.3-6.2%209.4-13.7%209.4-22.6%200-8.5-3.1-15.9-9.3-22.1-6.2-6.2-13.6-9.3-22.2-9.3s-16.1%203.1-22.4%209.3c-6.3%206.2-9.4%2013.7-9.4%2022.6-0.1%208.4%203%2015.8%209.3%2022.1z'%20p-id='1354'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e";
var h = (function (n) {
  return (
    (n[(n.LOADING = 0)] = 'LOADING'), (n[(n.DONE = 1)] = 'DONE'), (n[(n.FAIL = 2)] = 'FAIL'), n
  );
})(h || {});
const w2 = {
    show: { type: Boolean, default: !1 },
    imageList: { type: Array, default: null },
    index: { type: Number, default: 0 },
    scaleStep: { type: Number },
    defaultWidth: { type: Number },
    maskClosable: { type: Boolean },
    rememberState: { type: Boolean },
  },
  i = 'img-preview',
  x2 = y({
    name: 'ImagePreview',
    props: w2,
    emits: ['img-load', 'img-error'],
    setup(n, { expose: r, emit: f }) {
      const d = new Map(),
        t = a2({
          currentUrl: '',
          imgScale: 1,
          imgRotate: 0,
          imgTop: 0,
          imgLeft: 0,
          status: h.LOADING,
          currentIndex: 0,
          moveX: 0,
          moveY: 0,
          show: n.show,
        }),
        o = V(null),
        m = V(null);
      function u() {
        A();
        const { index: e, imageList: s } = n;
        if (!s || !s.length) throw new Error('imageList is undefined');
        (t.currentIndex = e), z(s[e]);
      }
      function L() {
        (t.imgScale = 1), (t.imgRotate = 0), (t.imgTop = 0), (t.imgLeft = 0);
      }
      function A() {
        const e = a(o);
        e &&
          ((e.onmousewheel = _),
          document.body.addEventListener('DOMMouseScroll', _),
          (document.ondragstart = function () {
            return !1;
          }));
      }
      const v = x(() => {
        var s;
        const e = (s = n == null ? void 0 : n.scaleStep) != null ? s : 0;
        return e != null && e ? e / 100 : t.imgScale / 10;
      });
      function _(e) {
        (e = e || window.event),
          (e.delta = e.wheelDelta || -e.detail),
          e.preventDefault(),
          e.delta > 0 && w(v.value),
          e.delta < 0 && w(-v.value);
      }
      function w(e) {
        (t.imgScale <= 0.2 && e < 0) ||
          ((t.imgScale += e * 0.1), t.imgScale < 0 && (t.imgScale = 0.02));
      }
      function k(e) {
        t.imgRotate += e;
      }
      function B() {
        const e = a(m);
        e && (e.onmousemove = null);
      }
      function z(e) {
        t.status = h.LOADING;
        const s = new Image();
        (s.src = e),
          (s.onload = (l) => {
            if (t.currentUrl !== e) {
              const g = l.composedPath();
              if (n.rememberState) {
                d.set(t.currentUrl, {
                  scale: t.imgScale,
                  top: t.imgTop,
                  left: t.imgLeft,
                  rotate: t.imgRotate,
                });
                const p = d.get(e);
                p
                  ? ((t.imgScale = p.scale),
                    (t.imgTop = p.top),
                    (t.imgRotate = p.rotate),
                    (t.imgLeft = p.left))
                  : (L(), n.defaultWidth && (t.imgScale = n.defaultWidth / g[0].naturalWidth));
              } else n.defaultWidth && (t.imgScale = n.defaultWidth / g[0].naturalWidth);
              g && f('img-load', { index: t.currentIndex, dom: g[0], url: e });
            }
            (t.currentUrl = e), (t.status = h.DONE);
          }),
          (s.onerror = (l) => {
            const g = l.composedPath();
            g && f('img-error', { index: t.currentIndex, dom: g[0], url: e }), (t.status = h.FAIL);
          });
      }
      function G(e) {
        e && e.stopPropagation(), T();
      }
      function T() {
        (t.show = !1),
          document.body.removeEventListener('DOMMouseScroll', _),
          (document.ondragstart = null);
      }
      function E() {
        L();
      }
      r({
        resume: E,
        close: T,
        prev: I.bind(null, 'left'),
        next: I.bind(null, 'right'),
        setScale: (e) => {
          e > 0 && e <= 10 && (t.imgScale = e);
        },
        setRotate: (e) => {
          t.imgRotate = e;
        },
      });
      function I(e) {
        const { currentIndex: s } = t,
          { imageList: l } = n;
        e === 'left' && (t.currentIndex--, s <= 0 && (t.currentIndex = l.length - 1)),
          e === 'right' && (t.currentIndex++, s >= l.length - 1 && (t.currentIndex = 0)),
          z(l[t.currentIndex]);
      }
      function R(e) {
        (e = e || window.event), (t.moveX = e.clientX), (t.moveY = e.clientY);
        const s = a(m);
        s && (s.onmousemove = Y);
      }
      function Y(e) {
        (e = e || window.event), e.preventDefault();
        const s = e.clientX - t.moveX,
          l = e.clientY - t.moveY;
        (t.imgLeft += s), (t.imgTop += l), (t.moveX = e.clientX), (t.moveY = e.clientY);
      }
      const U = x(() => {
          const { imgScale: e, imgRotate: s, imgTop: l, imgLeft: g } = t;
          return {
            transform: `scale(${e}) rotate(${s}deg)`,
            marginTop: `${l}px`,
            marginLeft: `${g}px`,
            maxWidth: n.defaultWidth ? 'unset' : '100%',
          };
        }),
        P = x(() => {
          const { imageList: e } = n;
          return e.length > 1;
        });
      o2(() => {
        n.show && u(), n.imageList && L();
      });
      const F = (e) => {
          n.maskClosable && e.target && e.target.classList.contains(`${i}-content`) && G(e);
        },
        X = () =>
          c('div', { class: `${i}__close`, onClick: G }, [
            c(Q, { class: `${i}__close-icon` }, null),
          ]),
        H = () => {
          if (!a(P)) return null;
          const { currentIndex: e } = t,
            { imageList: s } = n;
          return c('div', { class: `${i}__index` }, [e + 1, W(' / '), s.length]);
        },
        j = () =>
          c('div', { class: `${i}__controller` }, [
            c('div', { class: `${i}__controller-item`, onClick: () => w(-v.value) }, [
              c('img', { src: p2 }, null),
            ]),
            c('div', { class: `${i}__controller-item`, onClick: () => w(v.value) }, [
              c('img', { src: h2 }, null),
            ]),
            c('div', { class: `${i}__controller-item`, onClick: E }, [c('img', { src: g2 }, null)]),
            c('div', { class: `${i}__controller-item`, onClick: () => k(-90) }, [
              c('img', { src: v2 }, null),
            ]),
            c('div', { class: `${i}__controller-item`, onClick: () => k(90) }, [
              c('img', { src: u2 }, null),
            ]),
          ]),
        $ = (e) =>
          a(P)
            ? c('div', { class: [`${i}__arrow`, e], onClick: () => I(e) }, [
                e === 'left' ? c(e2, null, null) : c(t2, null, null),
              ])
            : null;
      return () =>
        t.show &&
        c('div', { class: i, ref: o, onMouseup: B, onClick: F }, [
          c('div', { class: `${i}-content` }, [
            c(
              'img',
              {
                style: a(U),
                class: [`${i}-image`, t.status === h.DONE ? '' : 'hidden'],
                ref: m,
                src: t.currentUrl,
                onMousedown: R,
              },
              null,
            ),
            X(),
            H(),
            j(),
            $('left'),
            $('right'),
          ]),
        ]);
    },
  });
let M = null;
function C2(n) {
  var d;
  if (!J) return;
  const r = {},
    f = document.createElement('div');
  return (
    Object.assign(r, { show: !0, index: 0, scaleStep: 100 }, n),
    (M = c(x2, r)),
    r2(M, f),
    document.body.appendChild(f),
    (d = M.component) == null ? void 0 : d.exposed
  );
}
const k2 = y({
  __name: 'index',
  setup(n) {
    const r = [
      'https://picsum.photos/id/66/346/216',
      'https://picsum.photos/id/67/346/216',
      'https://picsum.photos/id/68/346/216',
    ];
    function f() {
      C2({
        imageList: r,
        defaultWidth: 700,
        rememberState: !0,
        onImgLoad: ({ index: t, url: o, dom: m }) => {},
      });
    }
    return (d, t) => {
      const o = f2('a-button');
      return (
        C(),
        b(
          a(d2),
          { title: '图片预览示例' },
          {
            default: S(() => [
              c(a(m2), { imageList: r }),
              c(o, { onClick: f, type: 'primary' }, { default: S(() => [W('无预览图')]), _: 1 }),
            ]),
            _: 1,
          },
        )
      );
    };
  },
});
export { k2 as default };
