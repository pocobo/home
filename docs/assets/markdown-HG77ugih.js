import { r as J } from './index-Ck6h_6RS.js';
import { r as ce } from './xml-w1k-fQXr.js';
var O = { exports: {} },
  z = { exports: {} },
  C;
function fe() {
  return (
    C ||
      ((C = 1),
      (function (Q, G) {
        (function (l) {
          l(J());
        })(function (l) {
          l.modeInfo = [
            { name: 'APL', mime: 'text/apl', mode: 'apl', ext: ['dyalog', 'apl'] },
            {
              name: 'PGP',
              mimes: [
                'application/pgp',
                'application/pgp-encrypted',
                'application/pgp-keys',
                'application/pgp-signature',
              ],
              mode: 'asciiarmor',
              ext: ['asc', 'pgp', 'sig'],
            },
            { name: 'ASN.1', mime: 'text/x-ttcn-asn', mode: 'asn.1', ext: ['asn', 'asn1'] },
            {
              name: 'Asterisk',
              mime: 'text/x-asterisk',
              mode: 'asterisk',
              file: /^extensions\.conf$/i,
            },
            { name: 'Brainfuck', mime: 'text/x-brainfuck', mode: 'brainfuck', ext: ['b', 'bf'] },
            { name: 'C', mime: 'text/x-csrc', mode: 'clike', ext: ['c', 'h', 'ino'] },
            {
              name: 'C++',
              mime: 'text/x-c++src',
              mode: 'clike',
              ext: ['cpp', 'c++', 'cc', 'cxx', 'hpp', 'h++', 'hh', 'hxx'],
              alias: ['cpp'],
            },
            { name: 'Cobol', mime: 'text/x-cobol', mode: 'cobol', ext: ['cob', 'cpy', 'cbl'] },
            {
              name: 'C#',
              mime: 'text/x-csharp',
              mode: 'clike',
              ext: ['cs'],
              alias: ['csharp', 'cs'],
            },
            {
              name: 'Clojure',
              mime: 'text/x-clojure',
              mode: 'clojure',
              ext: ['clj', 'cljc', 'cljx'],
            },
            { name: 'ClojureScript', mime: 'text/x-clojurescript', mode: 'clojure', ext: ['cljs'] },
            { name: 'Closure Stylesheets (GSS)', mime: 'text/x-gss', mode: 'css', ext: ['gss'] },
            {
              name: 'CMake',
              mime: 'text/x-cmake',
              mode: 'cmake',
              ext: ['cmake', 'cmake.in'],
              file: /^CMakeLists\.txt$/,
            },
            {
              name: 'CoffeeScript',
              mimes: ['application/vnd.coffeescript', 'text/coffeescript', 'text/x-coffeescript'],
              mode: 'coffeescript',
              ext: ['coffee'],
              alias: ['coffee', 'coffee-script'],
            },
            {
              name: 'Common Lisp',
              mime: 'text/x-common-lisp',
              mode: 'commonlisp',
              ext: ['cl', 'lisp', 'el'],
              alias: ['lisp'],
            },
            {
              name: 'Cypher',
              mime: 'application/x-cypher-query',
              mode: 'cypher',
              ext: ['cyp', 'cypher'],
            },
            { name: 'Cython', mime: 'text/x-cython', mode: 'python', ext: ['pyx', 'pxd', 'pxi'] },
            { name: 'Crystal', mime: 'text/x-crystal', mode: 'crystal', ext: ['cr'] },
            { name: 'CSS', mime: 'text/css', mode: 'css', ext: ['css'] },
            { name: 'CQL', mime: 'text/x-cassandra', mode: 'sql', ext: ['cql'] },
            { name: 'D', mime: 'text/x-d', mode: 'd', ext: ['d'] },
            {
              name: 'Dart',
              mimes: ['application/dart', 'text/x-dart'],
              mode: 'dart',
              ext: ['dart'],
            },
            { name: 'diff', mime: 'text/x-diff', mode: 'diff', ext: ['diff', 'patch'] },
            { name: 'Django', mime: 'text/x-django', mode: 'django' },
            {
              name: 'Dockerfile',
              mime: 'text/x-dockerfile',
              mode: 'dockerfile',
              file: /^Dockerfile$/,
            },
            { name: 'DTD', mime: 'application/xml-dtd', mode: 'dtd', ext: ['dtd'] },
            { name: 'Dylan', mime: 'text/x-dylan', mode: 'dylan', ext: ['dylan', 'dyl', 'intr'] },
            { name: 'EBNF', mime: 'text/x-ebnf', mode: 'ebnf' },
            { name: 'ECL', mime: 'text/x-ecl', mode: 'ecl', ext: ['ecl'] },
            { name: 'edn', mime: 'application/edn', mode: 'clojure', ext: ['edn'] },
            { name: 'Eiffel', mime: 'text/x-eiffel', mode: 'eiffel', ext: ['e'] },
            { name: 'Elm', mime: 'text/x-elm', mode: 'elm', ext: ['elm'] },
            {
              name: 'Embedded JavaScript',
              mime: 'application/x-ejs',
              mode: 'htmlembedded',
              ext: ['ejs'],
            },
            {
              name: 'Embedded Ruby',
              mime: 'application/x-erb',
              mode: 'htmlembedded',
              ext: ['erb'],
            },
            { name: 'Erlang', mime: 'text/x-erlang', mode: 'erlang', ext: ['erl'] },
            { name: 'Esper', mime: 'text/x-esper', mode: 'sql' },
            { name: 'Factor', mime: 'text/x-factor', mode: 'factor', ext: ['factor'] },
            { name: 'FCL', mime: 'text/x-fcl', mode: 'fcl' },
            { name: 'Forth', mime: 'text/x-forth', mode: 'forth', ext: ['forth', 'fth', '4th'] },
            {
              name: 'Fortran',
              mime: 'text/x-fortran',
              mode: 'fortran',
              ext: ['f', 'for', 'f77', 'f90', 'f95'],
            },
            { name: 'F#', mime: 'text/x-fsharp', mode: 'mllike', ext: ['fs'], alias: ['fsharp'] },
            { name: 'Gas', mime: 'text/x-gas', mode: 'gas', ext: ['s'] },
            { name: 'Gherkin', mime: 'text/x-feature', mode: 'gherkin', ext: ['feature'] },
            {
              name: 'GitHub Flavored Markdown',
              mime: 'text/x-gfm',
              mode: 'gfm',
              file: /^(readme|contributing|history)\.md$/i,
            },
            { name: 'Go', mime: 'text/x-go', mode: 'go', ext: ['go'] },
            {
              name: 'Groovy',
              mime: 'text/x-groovy',
              mode: 'groovy',
              ext: ['groovy', 'gradle'],
              file: /^Jenkinsfile$/,
            },
            { name: 'HAML', mime: 'text/x-haml', mode: 'haml', ext: ['haml'] },
            { name: 'Haskell', mime: 'text/x-haskell', mode: 'haskell', ext: ['hs'] },
            {
              name: 'Haskell (Literate)',
              mime: 'text/x-literate-haskell',
              mode: 'haskell-literate',
              ext: ['lhs'],
            },
            { name: 'Haxe', mime: 'text/x-haxe', mode: 'haxe', ext: ['hx'] },
            { name: 'HXML', mime: 'text/x-hxml', mode: 'haxe', ext: ['hxml'] },
            {
              name: 'ASP.NET',
              mime: 'application/x-aspx',
              mode: 'htmlembedded',
              ext: ['aspx'],
              alias: ['asp', 'aspx'],
            },
            {
              name: 'HTML',
              mime: 'text/html',
              mode: 'htmlmixed',
              ext: ['html', 'htm', 'handlebars', 'hbs'],
              alias: ['xhtml'],
            },
            { name: 'HTTP', mime: 'message/http', mode: 'http' },
            { name: 'IDL', mime: 'text/x-idl', mode: 'idl', ext: ['pro'] },
            { name: 'Pug', mime: 'text/x-pug', mode: 'pug', ext: ['jade', 'pug'], alias: ['jade'] },
            { name: 'Java', mime: 'text/x-java', mode: 'clike', ext: ['java'] },
            {
              name: 'Java Server Pages',
              mime: 'application/x-jsp',
              mode: 'htmlembedded',
              ext: ['jsp'],
              alias: ['jsp'],
            },
            {
              name: 'JavaScript',
              mimes: [
                'text/javascript',
                'text/ecmascript',
                'application/javascript',
                'application/x-javascript',
                'application/ecmascript',
              ],
              mode: 'javascript',
              ext: ['js'],
              alias: ['ecmascript', 'js', 'node'],
            },
            {
              name: 'JSON',
              mimes: ['application/json', 'application/x-json'],
              mode: 'javascript',
              ext: ['json', 'map'],
              alias: ['json5'],
            },
            {
              name: 'JSON-LD',
              mime: 'application/ld+json',
              mode: 'javascript',
              ext: ['jsonld'],
              alias: ['jsonld'],
            },
            { name: 'JSX', mime: 'text/jsx', mode: 'jsx', ext: ['jsx'] },
            { name: 'Jinja2', mime: 'text/jinja2', mode: 'jinja2', ext: ['j2', 'jinja', 'jinja2'] },
            { name: 'Julia', mime: 'text/x-julia', mode: 'julia', ext: ['jl'], alias: ['jl'] },
            { name: 'Kotlin', mime: 'text/x-kotlin', mode: 'clike', ext: ['kt'] },
            { name: 'LESS', mime: 'text/x-less', mode: 'css', ext: ['less'] },
            {
              name: 'LiveScript',
              mime: 'text/x-livescript',
              mode: 'livescript',
              ext: ['ls'],
              alias: ['ls'],
            },
            { name: 'Lua', mime: 'text/x-lua', mode: 'lua', ext: ['lua'] },
            {
              name: 'Markdown',
              mime: 'text/x-markdown',
              mode: 'markdown',
              ext: ['markdown', 'md', 'mkd'],
            },
            { name: 'mIRC', mime: 'text/mirc', mode: 'mirc' },
            { name: 'MariaDB SQL', mime: 'text/x-mariadb', mode: 'sql' },
            {
              name: 'Mathematica',
              mime: 'text/x-mathematica',
              mode: 'mathematica',
              ext: ['m', 'nb', 'wl', 'wls'],
            },
            { name: 'Modelica', mime: 'text/x-modelica', mode: 'modelica', ext: ['mo'] },
            { name: 'MUMPS', mime: 'text/x-mumps', mode: 'mumps', ext: ['mps'] },
            { name: 'MS SQL', mime: 'text/x-mssql', mode: 'sql' },
            { name: 'mbox', mime: 'application/mbox', mode: 'mbox', ext: ['mbox'] },
            { name: 'MySQL', mime: 'text/x-mysql', mode: 'sql' },
            { name: 'Nginx', mime: 'text/x-nginx-conf', mode: 'nginx', file: /nginx.*\.conf$/i },
            { name: 'NSIS', mime: 'text/x-nsis', mode: 'nsis', ext: ['nsh', 'nsi'] },
            {
              name: 'NTriples',
              mimes: ['application/n-triples', 'application/n-quads', 'text/n-triples'],
              mode: 'ntriples',
              ext: ['nt', 'nq'],
            },
            {
              name: 'Objective-C',
              mime: 'text/x-objectivec',
              mode: 'clike',
              ext: ['m'],
              alias: ['objective-c', 'objc'],
            },
            {
              name: 'Objective-C++',
              mime: 'text/x-objectivec++',
              mode: 'clike',
              ext: ['mm'],
              alias: ['objective-c++', 'objc++'],
            },
            {
              name: 'OCaml',
              mime: 'text/x-ocaml',
              mode: 'mllike',
              ext: ['ml', 'mli', 'mll', 'mly'],
            },
            { name: 'Octave', mime: 'text/x-octave', mode: 'octave', ext: ['m'] },
            { name: 'Oz', mime: 'text/x-oz', mode: 'oz', ext: ['oz'] },
            { name: 'Pascal', mime: 'text/x-pascal', mode: 'pascal', ext: ['p', 'pas'] },
            { name: 'PEG.js', mime: 'null', mode: 'pegjs', ext: ['jsonld'] },
            { name: 'Perl', mime: 'text/x-perl', mode: 'perl', ext: ['pl', 'pm'] },
            {
              name: 'PHP',
              mimes: ['text/x-php', 'application/x-httpd-php', 'application/x-httpd-php-open'],
              mode: 'php',
              ext: ['php', 'php3', 'php4', 'php5', 'php7', 'phtml'],
            },
            { name: 'Pig', mime: 'text/x-pig', mode: 'pig', ext: ['pig'] },
            {
              name: 'Plain Text',
              mime: 'text/plain',
              mode: 'null',
              ext: ['txt', 'text', 'conf', 'def', 'list', 'log'],
            },
            { name: 'PLSQL', mime: 'text/x-plsql', mode: 'sql', ext: ['pls'] },
            { name: 'PostgreSQL', mime: 'text/x-pgsql', mode: 'sql' },
            {
              name: 'PowerShell',
              mime: 'application/x-powershell',
              mode: 'powershell',
              ext: ['ps1', 'psd1', 'psm1'],
            },
            {
              name: 'Properties files',
              mime: 'text/x-properties',
              mode: 'properties',
              ext: ['properties', 'ini', 'in'],
              alias: ['ini', 'properties'],
            },
            { name: 'ProtoBuf', mime: 'text/x-protobuf', mode: 'protobuf', ext: ['proto'] },
            {
              name: 'Python',
              mime: 'text/x-python',
              mode: 'python',
              ext: ['BUILD', 'bzl', 'py', 'pyw'],
              file: /^(BUCK|BUILD)$/,
            },
            { name: 'Puppet', mime: 'text/x-puppet', mode: 'puppet', ext: ['pp'] },
            { name: 'Q', mime: 'text/x-q', mode: 'q', ext: ['q'] },
            { name: 'R', mime: 'text/x-rsrc', mode: 'r', ext: ['r', 'R'], alias: ['rscript'] },
            {
              name: 'reStructuredText',
              mime: 'text/x-rst',
              mode: 'rst',
              ext: ['rst'],
              alias: ['rst'],
            },
            { name: 'RPM Changes', mime: 'text/x-rpm-changes', mode: 'rpm' },
            { name: 'RPM Spec', mime: 'text/x-rpm-spec', mode: 'rpm', ext: ['spec'] },
            {
              name: 'Ruby',
              mime: 'text/x-ruby',
              mode: 'ruby',
              ext: ['rb'],
              alias: ['jruby', 'macruby', 'rake', 'rb', 'rbx'],
            },
            { name: 'Rust', mime: 'text/x-rustsrc', mode: 'rust', ext: ['rs'] },
            { name: 'SAS', mime: 'text/x-sas', mode: 'sas', ext: ['sas'] },
            { name: 'Sass', mime: 'text/x-sass', mode: 'sass', ext: ['sass'] },
            { name: 'Scala', mime: 'text/x-scala', mode: 'clike', ext: ['scala'] },
            { name: 'Scheme', mime: 'text/x-scheme', mode: 'scheme', ext: ['scm', 'ss'] },
            { name: 'SCSS', mime: 'text/x-scss', mode: 'css', ext: ['scss'] },
            {
              name: 'Shell',
              mimes: ['text/x-sh', 'application/x-sh'],
              mode: 'shell',
              ext: ['sh', 'ksh', 'bash'],
              alias: ['bash', 'sh', 'zsh'],
              file: /^PKGBUILD$/,
            },
            { name: 'Sieve', mime: 'application/sieve', mode: 'sieve', ext: ['siv', 'sieve'] },
            {
              name: 'Slim',
              mimes: ['text/x-slim', 'application/x-slim'],
              mode: 'slim',
              ext: ['slim'],
            },
            { name: 'Smalltalk', mime: 'text/x-stsrc', mode: 'smalltalk', ext: ['st'] },
            { name: 'Smarty', mime: 'text/x-smarty', mode: 'smarty', ext: ['tpl'] },
            { name: 'Solr', mime: 'text/x-solr', mode: 'solr' },
            {
              name: 'SML',
              mime: 'text/x-sml',
              mode: 'mllike',
              ext: ['sml', 'sig', 'fun', 'smackspec'],
            },
            {
              name: 'Soy',
              mime: 'text/x-soy',
              mode: 'soy',
              ext: ['soy'],
              alias: ['closure template'],
            },
            {
              name: 'SPARQL',
              mime: 'application/sparql-query',
              mode: 'sparql',
              ext: ['rq', 'sparql'],
              alias: ['sparul'],
            },
            {
              name: 'Spreadsheet',
              mime: 'text/x-spreadsheet',
              mode: 'spreadsheet',
              alias: ['excel', 'formula'],
            },
            { name: 'SQL', mime: 'text/x-sql', mode: 'sql', ext: ['sql'] },
            { name: 'SQLite', mime: 'text/x-sqlite', mode: 'sql' },
            { name: 'Squirrel', mime: 'text/x-squirrel', mode: 'clike', ext: ['nut'] },
            { name: 'Stylus', mime: 'text/x-styl', mode: 'stylus', ext: ['styl'] },
            { name: 'Swift', mime: 'text/x-swift', mode: 'swift', ext: ['swift'] },
            { name: 'sTeX', mime: 'text/x-stex', mode: 'stex' },
            {
              name: 'LaTeX',
              mime: 'text/x-latex',
              mode: 'stex',
              ext: ['text', 'ltx', 'tex'],
              alias: ['tex'],
            },
            {
              name: 'SystemVerilog',
              mime: 'text/x-systemverilog',
              mode: 'verilog',
              ext: ['v', 'sv', 'svh'],
            },
            { name: 'Tcl', mime: 'text/x-tcl', mode: 'tcl', ext: ['tcl'] },
            { name: 'Textile', mime: 'text/x-textile', mode: 'textile', ext: ['textile'] },
            { name: 'TiddlyWiki', mime: 'text/x-tiddlywiki', mode: 'tiddlywiki' },
            { name: 'Tiki wiki', mime: 'text/tiki', mode: 'tiki' },
            { name: 'TOML', mime: 'text/x-toml', mode: 'toml', ext: ['toml'] },
            { name: 'Tornado', mime: 'text/x-tornado', mode: 'tornado' },
            {
              name: 'troff',
              mime: 'text/troff',
              mode: 'troff',
              ext: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            },
            { name: 'TTCN', mime: 'text/x-ttcn', mode: 'ttcn', ext: ['ttcn', 'ttcn3', 'ttcnpp'] },
            { name: 'TTCN_CFG', mime: 'text/x-ttcn-cfg', mode: 'ttcn-cfg', ext: ['cfg'] },
            { name: 'Turtle', mime: 'text/turtle', mode: 'turtle', ext: ['ttl'] },
            {
              name: 'TypeScript',
              mime: 'application/typescript',
              mode: 'javascript',
              ext: ['ts'],
              alias: ['ts'],
            },
            {
              name: 'TypeScript-JSX',
              mime: 'text/typescript-jsx',
              mode: 'jsx',
              ext: ['tsx'],
              alias: ['tsx'],
            },
            { name: 'Twig', mime: 'text/x-twig', mode: 'twig' },
            { name: 'Web IDL', mime: 'text/x-webidl', mode: 'webidl', ext: ['webidl'] },
            { name: 'VB.NET', mime: 'text/x-vb', mode: 'vb', ext: ['vb'] },
            { name: 'VBScript', mime: 'text/vbscript', mode: 'vbscript', ext: ['vbs'] },
            { name: 'Velocity', mime: 'text/velocity', mode: 'velocity', ext: ['vtl'] },
            { name: 'Verilog', mime: 'text/x-verilog', mode: 'verilog', ext: ['v'] },
            { name: 'VHDL', mime: 'text/x-vhdl', mode: 'vhdl', ext: ['vhd', 'vhdl'] },
            {
              name: 'Vue.js Component',
              mimes: ['script/x-vue', 'text/x-vue'],
              mode: 'vue',
              ext: ['vue'],
            },
            {
              name: 'XML',
              mimes: ['application/xml', 'text/xml'],
              mode: 'xml',
              ext: ['xml', 'xsl', 'xsd', 'svg'],
              alias: ['rss', 'wsdl', 'xsd'],
            },
            { name: 'XQuery', mime: 'application/xquery', mode: 'xquery', ext: ['xy', 'xquery'] },
            { name: 'Yacas', mime: 'text/x-yacas', mode: 'yacas', ext: ['ys'] },
            {
              name: 'YAML',
              mimes: ['text/x-yaml', 'text/yaml'],
              mode: 'yaml',
              ext: ['yaml', 'yml'],
              alias: ['yml'],
            },
            { name: 'Z80', mime: 'text/x-z80', mode: 'z80', ext: ['z80'] },
            {
              name: 'mscgen',
              mime: 'text/x-mscgen',
              mode: 'mscgen',
              ext: ['mscgen', 'mscin', 'msc'],
            },
            { name: 'xu', mime: 'text/x-xu', mode: 'mscgen', ext: ['xu'] },
            { name: 'msgenny', mime: 'text/x-msgenny', mode: 'mscgen', ext: ['msgenny'] },
            { name: 'WebAssembly', mime: 'text/webassembly', mode: 'wast', ext: ['wat', 'wast'] },
          ];
          for (var D = 0; D < l.modeInfo.length; D++) {
            var n = l.modeInfo[D];
            n.mimes && (n.mime = n.mimes[0]);
          }
          (l.findModeByMIME = function (a) {
            a = a.toLowerCase();
            for (var f = 0; f < l.modeInfo.length; f++) {
              var u = l.modeInfo[f];
              if (u.mime == a) return u;
              if (u.mimes) {
                for (var m = 0; m < u.mimes.length; m++) if (u.mimes[m] == a) return u;
              }
            }
            if (/\+xml$/.test(a)) return l.findModeByMIME('application/xml');
            if (/\+json$/.test(a)) return l.findModeByMIME('application/json');
          }),
            (l.findModeByExtension = function (a) {
              a = a.toLowerCase();
              for (var f = 0; f < l.modeInfo.length; f++) {
                var u = l.modeInfo[f];
                if (u.ext) {
                  for (var m = 0; m < u.ext.length; m++) if (u.ext[m] == a) return u;
                }
              }
            }),
            (l.findModeByFileName = function (a) {
              for (var f = 0; f < l.modeInfo.length; f++) {
                var u = l.modeInfo[f];
                if (u.file && u.file.test(a)) return u;
              }
              var m = a.lastIndexOf('.'),
                g = m > -1 && a.substring(m + 1, a.length);
              if (g) return l.findModeByExtension(g);
            }),
            (l.findModeByName = function (a) {
              a = a.toLowerCase();
              for (var f = 0; f < l.modeInfo.length; f++) {
                var u = l.modeInfo[f];
                if (u.name.toLowerCase() == a) return u;
                if (u.alias) {
                  for (var m = 0; m < u.alias.length; m++)
                    if (u.alias[m].toLowerCase() == a) return u;
                }
              }
            });
        });
      })()),
    z.exports
  );
}
var _;
function pe() {
  return (
    _ ||
      ((_ = 1),
      (function (Q, G) {
        (function (l) {
          l(J(), ce(), fe());
        })(function (l) {
          l.defineMode(
            'markdown',
            function (D, n) {
              var a = l.getMode(D, 'text/html'),
                f = a.name == 'null';
              function u(i) {
                if (l.findModeByName) {
                  var e = l.findModeByName(i);
                  e && (i = e.mime || e.mimes[0]);
                }
                var t = l.getMode(D, i);
                return t.name == 'null' ? null : t;
              }
              n.highlightFormatting === void 0 && (n.highlightFormatting = !1),
                n.maxBlockquoteDepth === void 0 && (n.maxBlockquoteDepth = 0),
                n.taskLists === void 0 && (n.taskLists = !1),
                n.strikethrough === void 0 && (n.strikethrough = !1),
                n.emoji === void 0 && (n.emoji = !1),
                n.fencedCodeBlockHighlighting === void 0 && (n.fencedCodeBlockHighlighting = !0),
                n.fencedCodeBlockDefaultMode === void 0 &&
                  (n.fencedCodeBlockDefaultMode = 'text/plain'),
                n.xml === void 0 && (n.xml = !0),
                n.tokenTypeOverrides === void 0 && (n.tokenTypeOverrides = {});
              var m = {
                header: 'header',
                code: 'comment',
                quote: 'quote',
                list1: 'variable-2',
                list2: 'variable-3',
                list3: 'keyword',
                hr: 'hr',
                image: 'image',
                imageAltText: 'image-alt-text',
                imageMarker: 'image-marker',
                formatting: 'formatting',
                linkInline: 'link',
                linkEmail: 'link',
                linkText: 'link',
                linkHref: 'string',
                em: 'em',
                strong: 'strong',
                strikethrough: 'strikethrough',
                emoji: 'builtin',
              };
              for (var g in m)
                m.hasOwnProperty(g) && n.tokenTypeOverrides[g] && (m[g] = n.tokenTypeOverrides[g]);
              var U = /^([*\-_])(?:\s*\1){2,}\s*$/,
                X = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
                M = /^\[(x| )\](?=\s)/i,
                V = n.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
                W = /^ {0,3}(?:\={1,}|-{2,})\s*$/,
                K = /^[^#!\[\]*_\\<>` "'(~:]+/,
                Y = /^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,
                Z = /^\s*\[[^\]]+?\]:.*$/,
                s =
                  /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,
                ee = '    ';
              function I(i, e, t) {
                return (e.f = e.inline = t), t(i, e);
              }
              function H(i, e, t) {
                return (e.f = e.block = t), t(i, e);
              }
              function ie(i) {
                return !i || !/\S/.test(i.string);
              }
              function R(i) {
                if (
                  ((i.linkTitle = !1),
                  (i.linkHref = !1),
                  (i.linkText = !1),
                  (i.em = !1),
                  (i.strong = !1),
                  (i.strikethrough = !1),
                  (i.quote = 0),
                  (i.indentedCode = !1),
                  i.f == A)
                ) {
                  var e = f;
                  if (!e) {
                    var t = l.innerMode(a, i.htmlState);
                    e =
                      t.mode.name == 'xml' &&
                      t.state.tagStart === null &&
                      !t.state.context &&
                      t.state.tokenize.isInText;
                  }
                  e && ((i.f = p), (i.block = b), (i.htmlState = null));
                }
                return (
                  (i.trailingSpace = 0),
                  (i.trailingSpaceNewLine = !1),
                  (i.prevLine = i.thisLine),
                  (i.thisLine = { stream: null }),
                  null
                );
              }
              function b(i, e) {
                var t = i.column() === e.indentation,
                  x = ie(e.prevLine.stream),
                  r = e.indentedCode,
                  h = e.prevLine.hr,
                  j = e.list !== !1,
                  k = (e.listStack[e.listStack.length - 1] || 0) + 3;
                e.indentedCode = !1;
                var v = e.indentation;
                if (e.indentationDiff === null && ((e.indentationDiff = e.indentation), j)) {
                  for (e.list = null; v < e.listStack[e.listStack.length - 1]; )
                    e.listStack.pop(),
                      e.listStack.length
                        ? (e.indentation = e.listStack[e.listStack.length - 1])
                        : (e.list = !1);
                  e.list !== !1 && (e.indentationDiff = v - e.listStack[e.listStack.length - 1]);
                }
                var F = !x && !h && !e.prevLine.header && (!j || !r) && !e.prevLine.fencedCodeEnd,
                  c = (e.list === !1 || h || x) && e.indentation <= k && i.match(U),
                  d = null;
                if (
                  e.indentationDiff >= 4 &&
                  (r || e.prevLine.fencedCodeEnd || e.prevLine.header || x)
                )
                  return i.skipToEnd(), (e.indentedCode = !0), m.code;
                if (i.eatSpace()) return null;
                if (t && e.indentation <= k && (d = i.match(V)) && d[1].length <= 6)
                  return (
                    (e.quote = 0),
                    (e.header = d[1].length),
                    (e.thisLine.header = !0),
                    n.highlightFormatting && (e.formatting = 'header'),
                    (e.f = e.inline),
                    o(e)
                  );
                if (e.indentation <= k && i.eat('>'))
                  return (
                    (e.quote = t ? 1 : e.quote + 1),
                    n.highlightFormatting && (e.formatting = 'quote'),
                    i.eatSpace(),
                    o(e)
                  );
                if (!c && !e.setext && t && e.indentation <= k && (d = i.match(X))) {
                  var q = d[1] ? 'ol' : 'ul';
                  return (
                    (e.indentation = v + i.current().length),
                    (e.list = !0),
                    (e.quote = 0),
                    e.listStack.push(e.indentation),
                    (e.em = !1),
                    (e.strong = !1),
                    (e.code = !1),
                    (e.strikethrough = !1),
                    n.taskLists && i.match(M, !1) && (e.taskList = !0),
                    (e.f = e.inline),
                    n.highlightFormatting && (e.formatting = ['list', 'list-' + q]),
                    o(e)
                  );
                } else {
                  if (t && e.indentation <= k && (d = i.match(Y, !0)))
                    return (
                      (e.quote = 0),
                      (e.fencedEndRE = new RegExp(d[1] + '+ *$')),
                      (e.localMode =
                        n.fencedCodeBlockHighlighting && u(d[2] || n.fencedCodeBlockDefaultMode)),
                      e.localMode && (e.localState = l.startState(e.localMode)),
                      (e.f = e.block = ne),
                      n.highlightFormatting && (e.formatting = 'code-block'),
                      (e.code = -1),
                      o(e)
                    );
                  if (
                    e.setext ||
                    ((!F || !j) &&
                      !e.quote &&
                      e.list === !1 &&
                      !e.code &&
                      !c &&
                      !Z.test(i.string) &&
                      (d = i.lookAhead(1)) &&
                      (d = d.match(W)))
                  )
                    return (
                      e.setext
                        ? ((e.header = e.setext),
                          (e.setext = 0),
                          i.skipToEnd(),
                          n.highlightFormatting && (e.formatting = 'header'))
                        : ((e.header = d[0].charAt(0) == '=' ? 1 : 2), (e.setext = e.header)),
                      (e.thisLine.header = !0),
                      (e.f = e.inline),
                      o(e)
                    );
                  if (c) return i.skipToEnd(), (e.hr = !0), (e.thisLine.hr = !0), m.hr;
                  if (i.peek() === '[') return I(i, e, oe);
                }
                return I(i, e, e.inline);
              }
              function A(i, e) {
                var t = a.token(i, e.htmlState);
                if (!f) {
                  var x = l.innerMode(a, e.htmlState);
                  ((x.mode.name == 'xml' &&
                    x.state.tagStart === null &&
                    !x.state.context &&
                    x.state.tokenize.isInText) ||
                    (e.md_inside && i.current().indexOf('>') > -1)) &&
                    ((e.f = p), (e.block = b), (e.htmlState = null));
                }
                return t;
              }
              function ne(i, e) {
                var t = e.listStack[e.listStack.length - 1] || 0,
                  x = e.indentation < t,
                  r = t + 3;
                if (e.fencedEndRE && e.indentation <= r && (x || i.match(e.fencedEndRE))) {
                  n.highlightFormatting && (e.formatting = 'code-block');
                  var h;
                  return (
                    x || (h = o(e)),
                    (e.localMode = e.localState = null),
                    (e.block = b),
                    (e.f = p),
                    (e.fencedEndRE = null),
                    (e.code = 0),
                    (e.thisLine.fencedCodeEnd = !0),
                    x ? H(i, e, e.block) : h
                  );
                } else
                  return e.localMode ? e.localMode.token(i, e.localState) : (i.skipToEnd(), m.code);
              }
              function o(i) {
                var e = [];
                if (i.formatting) {
                  e.push(m.formatting),
                    typeof i.formatting == 'string' && (i.formatting = [i.formatting]);
                  for (var t = 0; t < i.formatting.length; t++)
                    e.push(m.formatting + '-' + i.formatting[t]),
                      i.formatting[t] === 'header' &&
                        e.push(m.formatting + '-' + i.formatting[t] + '-' + i.header),
                      i.formatting[t] === 'quote' &&
                        (!n.maxBlockquoteDepth || n.maxBlockquoteDepth >= i.quote
                          ? e.push(m.formatting + '-' + i.formatting[t] + '-' + i.quote)
                          : e.push('error'));
                }
                if (i.taskOpen) return e.push('meta'), e.length ? e.join(' ') : null;
                if (i.taskClosed) return e.push('property'), e.length ? e.join(' ') : null;
                if (
                  (i.linkHref
                    ? e.push(m.linkHref, 'url')
                    : (i.strong && e.push(m.strong),
                      i.em && e.push(m.em),
                      i.strikethrough && e.push(m.strikethrough),
                      i.emoji && e.push(m.emoji),
                      i.linkText && e.push(m.linkText),
                      i.code && e.push(m.code),
                      i.image && e.push(m.image),
                      i.imageAltText && e.push(m.imageAltText, 'link'),
                      i.imageMarker && e.push(m.imageMarker)),
                  i.header && e.push(m.header, m.header + '-' + i.header),
                  i.quote &&
                    (e.push(m.quote),
                    !n.maxBlockquoteDepth || n.maxBlockquoteDepth >= i.quote
                      ? e.push(m.quote + '-' + i.quote)
                      : e.push(m.quote + '-' + n.maxBlockquoteDepth)),
                  i.list !== !1)
                ) {
                  var x = (i.listStack.length - 1) % 3;
                  x ? (x === 1 ? e.push(m.list2) : e.push(m.list3)) : e.push(m.list1);
                }
                return (
                  i.trailingSpaceNewLine
                    ? e.push('trailing-space-new-line')
                    : i.trailingSpace &&
                      e.push('trailing-space-' + (i.trailingSpace % 2 ? 'a' : 'b')),
                  e.length ? e.join(' ') : null
                );
              }
              function te(i, e) {
                if (i.match(K, !0)) return o(e);
              }
              function p(i, e) {
                var t = e.text(i, e);
                if (typeof t != 'undefined') return t;
                if (e.list) return (e.list = null), o(e);
                if (e.taskList) {
                  var x = i.match(M, !0)[1] === ' ';
                  return (
                    x ? (e.taskOpen = !0) : (e.taskClosed = !0),
                    n.highlightFormatting && (e.formatting = 'task'),
                    (e.taskList = !1),
                    o(e)
                  );
                }
                if (((e.taskOpen = !1), (e.taskClosed = !1), e.header && i.match(/^#+$/, !0)))
                  return n.highlightFormatting && (e.formatting = 'header'), o(e);
                var r = i.next();
                if (e.linkTitle) {
                  e.linkTitle = !1;
                  var h = r;
                  r === '(' && (h = ')'), (h = (h + '').replace(/([.?*+^\[\]\\(){}|-])/g, '\\$1'));
                  var j = '^\\s*(?:[^' + h + '\\\\]+|\\\\\\\\|\\\\.)' + h;
                  if (i.match(new RegExp(j), !0)) return m.linkHref;
                }
                if (r === '`') {
                  var k = e.formatting;
                  n.highlightFormatting && (e.formatting = 'code'), i.eatWhile('`');
                  var v = i.current().length;
                  if (e.code == 0 && (!e.quote || v == 1)) return (e.code = v), o(e);
                  if (v == e.code) {
                    var F = o(e);
                    return (e.code = 0), F;
                  } else return (e.formatting = k), o(e);
                } else if (e.code) return o(e);
                if (r === '\\' && (i.next(), n.highlightFormatting)) {
                  var c = o(e),
                    d = m.formatting + '-escape';
                  return c ? c + ' ' + d : d;
                }
                if (r === '!' && i.match(/\[[^\]]*\] ?(?:\(|\[)/, !1))
                  return (
                    (e.imageMarker = !0),
                    (e.image = !0),
                    n.highlightFormatting && (e.formatting = 'image'),
                    o(e)
                  );
                if (r === '[' && e.imageMarker && i.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1))
                  return (
                    (e.imageMarker = !1),
                    (e.imageAltText = !0),
                    n.highlightFormatting && (e.formatting = 'image'),
                    o(e)
                  );
                if (r === ']' && e.imageAltText) {
                  n.highlightFormatting && (e.formatting = 'image');
                  var c = o(e);
                  return (e.imageAltText = !1), (e.image = !1), (e.inline = e.f = N), c;
                }
                if (r === '[' && !e.image)
                  return (
                    (e.linkText && i.match(/^.*?\]/)) ||
                      ((e.linkText = !0), n.highlightFormatting && (e.formatting = 'link')),
                    o(e)
                  );
                if (r === ']' && e.linkText) {
                  n.highlightFormatting && (e.formatting = 'link');
                  var c = o(e);
                  return (
                    (e.linkText = !1),
                    (e.inline = e.f = i.match(/\(.*?\)| ?\[.*?\]/, !1) ? N : p),
                    c
                  );
                }
                if (r === '<' && i.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)) {
                  (e.f = e.inline = P), n.highlightFormatting && (e.formatting = 'link');
                  var c = o(e);
                  return c ? (c += ' ') : (c = ''), c + m.linkInline;
                }
                if (r === '<' && i.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) {
                  (e.f = e.inline = P), n.highlightFormatting && (e.formatting = 'link');
                  var c = o(e);
                  return c ? (c += ' ') : (c = ''), c + m.linkEmail;
                }
                if (
                  n.xml &&
                  r === '<' &&
                  i.match(
                    /^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,
                    !1,
                  )
                ) {
                  var q = i.string.indexOf('>', i.pos);
                  if (q != -1) {
                    var ue = i.string.substring(i.start, q);
                    /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(ue) && (e.md_inside = !0);
                  }
                  return i.backUp(1), (e.htmlState = l.startState(a)), H(i, e, A);
                }
                if (n.xml && r === '<' && i.match(/^\/\w*?>/)) return (e.md_inside = !1), 'tag';
                if (r === '*' || r === '_') {
                  for (
                    var B = 1, S = i.pos == 1 ? ' ' : i.string.charAt(i.pos - 2);
                    B < 3 && i.eat(r);

                  )
                    B++;
                  var E = i.peek() || ' ',
                    T = !/\s/.test(E) && (!s.test(E) || /\s/.test(S) || s.test(S)),
                    w = !/\s/.test(S) && (!s.test(S) || /\s/.test(E) || s.test(E)),
                    y = null,
                    L = null;
                  if (
                    (B % 2 &&
                      (!e.em && T && (r === '*' || !w || s.test(S))
                        ? (y = !0)
                        : e.em == r && w && (r === '*' || !T || s.test(E)) && (y = !1)),
                    B > 1 &&
                      (!e.strong && T && (r === '*' || !w || s.test(S))
                        ? (L = !0)
                        : e.strong == r && w && (r === '*' || !T || s.test(E)) && (L = !1)),
                    L != null || y != null)
                  ) {
                    n.highlightFormatting &&
                      (e.formatting = y == null ? 'strong' : L == null ? 'em' : 'strong em'),
                      y === !0 && (e.em = r),
                      L === !0 && (e.strong = r);
                    var F = o(e);
                    return y === !1 && (e.em = !1), L === !1 && (e.strong = !1), F;
                  }
                } else if (r === ' ' && (i.eat('*') || i.eat('_'))) {
                  if (i.peek() === ' ') return o(e);
                  i.backUp(1);
                }
                if (n.strikethrough) {
                  if (r === '~' && i.eatWhile(r)) {
                    if (e.strikethrough) {
                      n.highlightFormatting && (e.formatting = 'strikethrough');
                      var F = o(e);
                      return (e.strikethrough = !1), F;
                    } else if (i.match(/^[^\s]/, !1))
                      return (
                        (e.strikethrough = !0),
                        n.highlightFormatting && (e.formatting = 'strikethrough'),
                        o(e)
                      );
                  } else if (r === ' ' && i.match('~~', !0)) {
                    if (i.peek() === ' ') return o(e);
                    i.backUp(2);
                  }
                }
                if (
                  n.emoji &&
                  r === ':' &&
                  i.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)
                ) {
                  (e.emoji = !0), n.highlightFormatting && (e.formatting = 'emoji');
                  var xe = o(e);
                  return (e.emoji = !1), xe;
                }
                return (
                  r === ' ' &&
                    (i.match(/^ +$/, !1)
                      ? e.trailingSpace++
                      : e.trailingSpace && (e.trailingSpaceNewLine = !0)),
                  o(e)
                );
              }
              function P(i, e) {
                var t = i.next();
                if (t === '>') {
                  (e.f = e.inline = p), n.highlightFormatting && (e.formatting = 'link');
                  var x = o(e);
                  return x ? (x += ' ') : (x = ''), x + m.linkInline;
                }
                return i.match(/^[^>]+/, !0), m.linkInline;
              }
              function N(i, e) {
                if (i.eatSpace()) return null;
                var t = i.next();
                return t === '(' || t === '['
                  ? ((e.f = e.inline = le(t === '(' ? ')' : ']')),
                    n.highlightFormatting && (e.formatting = 'link-string'),
                    (e.linkHref = !0),
                    o(e))
                  : 'error';
              }
              var me = {
                ')': /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
                ']': /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/,
              };
              function le(i) {
                return function (e, t) {
                  var x = e.next();
                  if (x === i) {
                    (t.f = t.inline = p), n.highlightFormatting && (t.formatting = 'link-string');
                    var r = o(t);
                    return (t.linkHref = !1), r;
                  }
                  return e.match(me[i]), (t.linkHref = !0), o(t);
                };
              }
              function oe(i, e) {
                return i.match(/^([^\]\\]|\\.)*\]:/, !1)
                  ? ((e.f = re),
                    i.next(),
                    n.highlightFormatting && (e.formatting = 'link'),
                    (e.linkText = !0),
                    o(e))
                  : I(i, e, p);
              }
              function re(i, e) {
                if (i.match(']:', !0)) {
                  (e.f = e.inline = ae), n.highlightFormatting && (e.formatting = 'link');
                  var t = o(e);
                  return (e.linkText = !1), t;
                }
                return i.match(/^([^\]\\]|\\.)+/, !0), m.linkText;
              }
              function ae(i, e) {
                return i.eatSpace()
                  ? null
                  : (i.match(/^[^\s]+/, !0),
                    i.peek() === void 0
                      ? (e.linkTitle = !0)
                      : i.match(
                          /^(?:\s+(?:"(?:[^"\\]|\\.)+"|'(?:[^'\\]|\\.)+'|\((?:[^)\\]|\\.)+\)))?/,
                          !0,
                        ),
                    (e.f = e.inline = p),
                    m.linkHref + ' url');
              }
              var $ = {
                startState: function () {
                  return {
                    f: b,
                    prevLine: { stream: null },
                    thisLine: { stream: null },
                    block: b,
                    htmlState: null,
                    indentation: 0,
                    inline: p,
                    text: te,
                    formatting: !1,
                    linkText: !1,
                    linkHref: !1,
                    linkTitle: !1,
                    code: 0,
                    em: !1,
                    strong: !1,
                    header: 0,
                    setext: 0,
                    hr: !1,
                    taskList: !1,
                    list: !1,
                    listStack: [],
                    quote: 0,
                    trailingSpace: 0,
                    trailingSpaceNewLine: !1,
                    strikethrough: !1,
                    emoji: !1,
                    fencedEndRE: null,
                  };
                },
                copyState: function (i) {
                  return {
                    f: i.f,
                    prevLine: i.prevLine,
                    thisLine: i.thisLine,
                    block: i.block,
                    htmlState: i.htmlState && l.copyState(a, i.htmlState),
                    indentation: i.indentation,
                    localMode: i.localMode,
                    localState: i.localMode ? l.copyState(i.localMode, i.localState) : null,
                    inline: i.inline,
                    text: i.text,
                    formatting: !1,
                    linkText: i.linkText,
                    linkTitle: i.linkTitle,
                    linkHref: i.linkHref,
                    code: i.code,
                    em: i.em,
                    strong: i.strong,
                    strikethrough: i.strikethrough,
                    emoji: i.emoji,
                    header: i.header,
                    setext: i.setext,
                    hr: i.hr,
                    taskList: i.taskList,
                    list: i.list,
                    listStack: i.listStack.slice(0),
                    quote: i.quote,
                    indentedCode: i.indentedCode,
                    trailingSpace: i.trailingSpace,
                    trailingSpaceNewLine: i.trailingSpaceNewLine,
                    md_inside: i.md_inside,
                    fencedEndRE: i.fencedEndRE,
                  };
                },
                token: function (i, e) {
                  if (((e.formatting = !1), i != e.thisLine.stream)) {
                    if (((e.header = 0), (e.hr = !1), i.match(/^\s*$/, !0))) return R(e), null;
                    if (
                      ((e.prevLine = e.thisLine),
                      (e.thisLine = { stream: i }),
                      (e.taskList = !1),
                      (e.trailingSpace = 0),
                      (e.trailingSpaceNewLine = !1),
                      !e.localState && ((e.f = e.block), e.f != A))
                    ) {
                      var t = i.match(/^\s*/, !0)[0].replace(/\t/g, ee).length;
                      if (((e.indentation = t), (e.indentationDiff = null), t > 0)) return null;
                    }
                  }
                  return e.f(i, e);
                },
                innerMode: function (i) {
                  return i.block == A
                    ? { state: i.htmlState, mode: a }
                    : i.localState
                      ? { state: i.localState, mode: i.localMode }
                      : { state: i, mode: $ };
                },
                indent: function (i, e, t) {
                  return i.block == A && a.indent
                    ? a.indent(i.htmlState, e, t)
                    : i.localState && i.localMode.indent
                      ? i.localMode.indent(i.localState, e, t)
                      : l.Pass;
                },
                blankLine: R,
                getType: o,
                blockCommentStart: '<!--',
                blockCommentEnd: '-->',
                closeBrackets: '()[]{}\'\'""``',
                fold: 'markdown',
              };
              return $;
            },
            'xml',
          ),
            l.defineMIME('text/markdown', 'markdown'),
            l.defineMIME('text/x-markdown', 'markdown');
        });
      })()),
    O.exports
  );
}
export { pe as r };
