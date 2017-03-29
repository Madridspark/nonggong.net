;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gongzuojingyan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.52 63.68c-247.584 0-448.256 200.768-448.256 448.352s200.704 448.256 448.256 448.256c247.68 0 448.32-200.672 448.32-448.256S759.104 63.68 511.52 63.68zM672.032 629.376 496.832 629.376c-24.608 0-44.576-19.968-44.576-44.608l0-264.576c0-24.672 20-44.608 44.576-44.608 24.608 0 44.64 19.936 44.64 44.608l0 219.968 130.592 0c24.576 0 44.608 19.872 44.608 44.608C716.64 609.408 696.608 629.376 672.032 629.376z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xueli" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M999.2192 278.528c-0.8192 4.096-1.4336 8.192-2.6624 12.288-9.6256 35.84-32.3584 58.5728-68.1984 67.584-24.9856 6.3488-50.176 11.8784-75.5712 17.408-5.12 1.024-6.144 3.2768-6.144 7.9872 0.2048 81.5104-0.4096 163.0208 0.4096 244.3264 0.4096 38.912-15.36 69.2224-45.2608 92.7744-25.6 20.48-55.296 32.768-86.4256 42.1888-37.2736 11.0592-75.776 16.9984-114.4832 20.48-44.4416 3.8912-88.6784 4.7104-133.12 2.8672-57.344-2.4576-114.2784-8.3968-169.1648-26.2144-30.1056-9.8304-58.5728-22.7328-82.5344-44.032-26.0096-22.9376-39.5264-51.2-39.3216-86.4256 0.4096-81.92 0.2048-163.84 0.2048-245.9648 0-4.7104-1.024-6.9632-6.144-7.9872-24.9856-5.5296-49.9712-11.264-74.9568-17.2032-38.0928-8.8064-64.9216-38.5024-70.4512-77.2096-0.2048-1.024-0.6144-1.8432-0.8192-2.8672 0-6.144 0-12.0832 0-18.2272 0.4096-1.024 0.8192-1.8432 1.024-2.8672 5.3248-37.888 31.5392-67.584 68.608-76.3904 116.736-27.2384 233.472-54.0672 350.4128-81.1008 19.456-4.5056 39.1168-8.8064 58.5728-13.312 5.7344 0 11.4688 0 17.2032 0 4.5056 1.024 8.8064 1.8432 13.312 2.8672 131.072 30.3104 262.144 60.2112 393.216 90.7264 36.6592 8.6016 59.8016 31.5392 69.632 67.9936 1.024 4.096 1.6384 8.6016 2.6624 12.6976C999.2192 267.0592 999.2192 272.7936 999.2192 278.528zM786.2272 391.7824c-2.2528 0.4096-3.4816 0.4096-4.9152 0.8192-79.4624 18.432-158.9248 36.6592-238.1824 55.0912-16.5888 3.8912-33.1776 6.5536-50.176 2.6624-79.0528-18.2272-158.1056-36.4544-237.3632-54.6816-5.7344-1.4336-11.6736-2.6624-18.2272-4.096 0 2.8672 0 4.9152 0 6.9632 0 75.9808 0.4096 152.1664-0.2048 228.1472-0.2048 14.7456 5.12 25.8048 15.5648 35.2256 4.096 3.6864 8.3968 7.3728 13.1072 10.4448 20.8896 14.5408 44.2368 23.7568 68.4032 31.1296 41.984 12.9024 84.992 19.0464 128.6144 21.7088 62.8736 3.6864 125.3376 1.2288 187.1872-11.4688 33.792-6.9632 66.7648-16.9984 96.8704-34.2016 11.8784-6.7584 23.1424-14.7456 31.744-25.8048 5.12-6.5536 7.7824-13.9264 7.7824-22.528-0.2048-77.6192 0-155.2384 0-232.6528C786.2272 396.288 786.2272 394.4448 786.2272 391.7824zM510.5664 391.7824c3.8912-0.6144 6.5536-0.8192 9.216-1.4336 100.9664-23.3472 201.9328-46.4896 302.8992-69.8368 30.1056-6.9632 60.2112-13.9264 90.3168-20.8896 12.6976-2.8672 21.2992-10.0352 24.576-22.9376 4.5056-18.0224-6.3488-33.3824-26.2144-38.0928-129.6384-29.9008-259.4816-59.8016-389.12-89.7024-6.9632-1.6384-13.5168-1.6384-20.48 0-53.4528 12.4928-106.9056 24.7808-160.3584 37.0688-76.5952 17.6128-153.1904 35.2256-229.7856 53.0432-16.1792 3.6864-26.0096 15.36-26.0096 30.5152 0 15.1552 10.0352 26.4192 26.2144 30.3104 122.4704 28.2624 244.9408 56.5248 367.4112 84.7872C490.0864 387.2768 500.9408 389.7344 510.5664 391.7824z"  ></path>' +
    '' +
    '<path d="M931.4304 939.6224c-3.4816-0.8192-6.7584-1.6384-10.24-2.6624-28.4672-8.3968-46.4896-35.84-43.2128-65.9456 3.2768-28.8768 11.4688-56.5248 25.3952-82.1248 4.7104-8.8064 11.0592-17.2032 18.0224-24.1664 10.6496-10.8544 23.3472-10.8544 33.9968 0.2048 7.5776 7.9872 14.1312 17.2032 19.456 26.8288 12.4928 23.552 19.8656 48.9472 23.552 75.5712 0.2048 1.2288 0.6144 2.2528 1.024 3.2768 0 5.12 0 10.24 0 15.1552-0.4096 1.024-0.8192 2.2528-1.024 3.2768-5.12 24.3712-19.456 40.3456-43.008 47.9232-3.072 1.024-6.5536 1.6384-9.6256 2.4576C940.8512 939.6224 936.1408 939.6224 931.4304 939.6224z"  ></path>' +
    '' +
    '<path d="M908.0832 558.4896c0-45.2608 0-90.5216 0-135.7824 0-16.5888 11.0592-29.0816 27.0336-30.9248 17.408-2.048 32.768 11.0592 33.792 28.672 0 1.024 0 2.048 0 3.072 0 90.3168 0 180.8384 0 271.1552 0 22.1184-20.0704 37.0688-40.5504 29.9008-12.288-4.3008-20.2752-15.5648-20.2752-29.2864C908.0832 649.8304 908.0832 604.16 908.0832 558.4896z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jingyan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.223744 25.621803C244.055501 25.621803 26.664112 243.256929 26.664112 511.723356 26.664112 780.189783 244.055501 997.824909 512.223744 997.824909 780.39199 997.824909 997.783378 780.189783 997.783378 511.723356 997.783378 243.256929 780.39199 25.621803 512.223744 25.621803L512.223744 25.621803ZM649.020723 722.467948 512.223744 658.234432 375.423439 722.467948 394.173164 572.374948 290.881541 461.973074 439.263508 433.436572 512.224855 300.977654 585.182874 433.436572 733.568172 461.973074 630.273219 572.374948 649.020723 722.467948 649.020723 722.467948Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xueli1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1010.663894 271.568176c-0.837538 4.183595-1.46518 8.365143-2.715344 12.547715-9.833395 36.597757-33.045899 59.814357-69.643656 69.013966-25.518294 6.48529-51.241365 12.129969-77.167165 17.776697-5.228982 1.047435-6.280513 3.346057-6.280513 8.156271 0.215016 83.233686-0.417745 166.467372 0.418769 249.493209 0.417745 39.738013-15.684899 70.689043-46.218183 94.738061-26.14184 20.912858-56.465228 33.461596-88.248677 43.082023-38.06908 11.294479-77.383205 17.354856-116.913369 20.912858-45.379621 3.972675-90.55037 4.810213-135.933064 2.926264-58.554978-2.506471-116.695282-8.572992-172.743789-26.764362-30.742157-10.038172-59.811285-23.2166-84.278048-44.965972-26.561633-23.421377-40.363607-52.284704-40.154735-88.253796 0.418769-83.652455 0.208873-167.305934 0.208873-251.167261 0-4.810213-1.047435-7.110884-6.275394-8.156271a5042.227718 5042.227718 0 0 1-76.540547-17.5668c-38.901499-8.993809-66.295551-39.31822-71.942279-78.84429-0.209896-1.045387-0.627642-1.880877-0.837538-2.927288v-18.613211c0.418769-1.044363 0.837538-1.881901 1.046411-2.926264 5.437855-38.690579 32.207337-69.013966 70.05833-78.008799C205.711872 144.206057 324.916697 116.80791 444.330395 89.203961c19.869519-4.599293 39.944838-8.993809 59.811285-13.593101h17.57192c4.595197 1.046411 8.986641 1.883949 13.59003 2.929335 133.84229 30.951029 267.686627 61.486362 401.534036 92.646264 37.436319 8.781864 61.065545 32.204265 71.108836 69.431712 1.041291 4.183595 1.670981 8.782888 2.717392 12.96546V271.568176zM793.168125 387.219095c-2.301694 0.417745-3.558002 0.417745-5.024205 0.836515-81.140864 18.823108-162.281728 37.433247-243.216792 56.256355-16.941207 3.974723-33.879342 6.690067-51.240341 2.718416-80.724143-18.613211-161.450334-37.227447-242.384373-55.836563-5.8556-1.46518-11.919049-2.721487-18.612187-4.183595v7.108836c0 77.59003 0.417745 155.387909-0.208873 232.97589-0.209896 15.057258 5.227958 26.345593 15.893772 35.964996 4.183595 3.768922 8.574016 7.5317 13.384229 10.671957 21.332651 14.848385 45.173821 24.256867 69.849457 31.787544 42.874174 13.174332 86.790663 19.449726 131.335818 22.169165 64.203753 3.758683 127.989761 1.252212 191.147104-11.712224 34.510055-7.111907 68.178476-17.359976 98.920633-34.929848 12.130993-6.897915 23.634345-15.05521 32.417233-26.349689 5.227958-6.689043 7.943302-14.219719 7.943302-23.007727-0.202729-79.255891 0-158.517926 0-237.571088-0.204777-2.299646-0.204777-4.180524-0.204777-6.89894z m-281.494744 0c3.972675-0.627642 6.693138-0.838562 9.407458-1.464156 103.108324-23.84117 206.207433-47.472443 309.309613-71.314636 30.747276-7.110884 61.48329-14.222791 92.230566-21.332651 12.963412-2.928312 21.75142-10.247044 25.09543-23.423425 4.601341-18.403315-6.484266-34.088214-26.768458-38.897403-132.382229-30.536356-264.970259-61.067592-397.351465-91.600877-7.107812-1.675076-13.804022-1.675076-20.913881 0-54.582303 12.756587-109.165629 25.303278-163.748957 37.853041-78.216648 17.984546-156.434319 35.971139-234.648919 54.165581-16.52039 3.762779-26.558561 15.686947-26.558561 31.160926 0 15.476027 10.247044 26.976307 26.767434 30.95103 125.060425 28.862303 250.124946 57.721535 375.185371 86.58179a1078.136913 1078.136913 0 0 0 31.994369 7.32078z m429.767674 559.426369c-3.553906-0.836514-6.903035-1.669957-10.456941-2.717392-29.0722-8.577087-47.474491-36.597757-44.125362-67.339914 3.345033-29.483802 11.713248-57.719487 25.927848-83.861327 4.810213-8.99688 11.294479-17.568848 18.406386-24.68178 10.874686-11.079463 23.839122-11.079463 34.714832 0.215016 7.740573 8.153199 14.428592 17.563729 19.871567 27.397123 12.753516 24.047995 20.285216 49.980962 24.047994 77.169213 0.21092 1.256307 0.627642 2.297599 1.047435 3.345034v15.475003c-0.418769 1.047435-0.836514 2.297599-1.047435 3.349128-5.227958 24.885533-19.865423 41.195002-43.918537 48.933528-3.136161 1.047435-6.689043 1.675076-9.825203 2.512615-5.024205 0.203753-9.834419 0.203753-14.642584 0.203753z m-23.844242-389.192123V418.797767c0-16.941207 11.294479-29.697794 27.611116-31.578672 17.773625-2.091798 33.458525 11.294479 34.504935 29.278001v280.027517c0 22.587934-20.494089 37.854064-41.40797 30.531237-12.548739-4.389396-20.708081-15.889676-20.708081-29.903595v-139.698914z" fill="#272536" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qiuzhi_xueli" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M508.996267 966.417067c-5.393067 0-10.171733-1.4336-15.394134-3.1744-0.785067-0.136533-226.884267-118.749867-272.4864-142.779734l-53.1456-27.682133h-0.580266a37.034667 37.034667 0 0 1-17.544534-38.741333l0.682667-2.730667 25.941333-87.483733c11.229867-36.590933 22.391467-74.069333 33.553067-111.547734l16.1792-54.135466-26.3168-14.848c-24.746667-13.960533-49.3568-27.8528-73.9328-41.403734l-83.285333-46.455466c-17.885867-10.205867-27.3408-23.7568-28.672-41.2672-1.911467-14.984533 4.1984-36.352 27.4432-49.629867 16.827733-8.9088 33.928533-18.397867 50.039466-27.921067l20.5824-11.741866c29.457067-15.735467 58.299733-32.085333 87.176534-48.4352l75.707733-42.5984c62.0544-34.884267 124.859733-70.2464 186.709333-104.584534a92.16 92.16 0 0 1 44.475734-11.707733c15.291733 0 30.173867 3.925333 44.270933 11.605333a31171.822933 31171.822933 0 0 1 324.573867 182.101334l93.696 52.155733c15.086933 8.362667 24.4736 19.5584 27.921066 33.314133 2.798933 9.9328 2.286933 20.445867-1.4336 31.744l-1.297066 3.925334-0.853334 0.785066a57.685333 57.685333 0 0 1-23.381333 21.674667l-58.504533 33.143467c-29.559467 16.759467-57.378133 32.5632-84.855467 47.7184l-35.0208 20.002133 3.1744 10.4448c5.358933 17.544533 10.581333 35.157333 15.701333 52.565333L867.328 750.933333c5.700267 16.5888-1.774933 34.747733-16.827733 41.813334l-21.777067 11.332266c-0.170667 0.068267-44.578133 23.9616-54.135467 29.047467l-49.288533 26.077867-196.539733 102.638933a43.895467 43.895467 0 0 1-19.7632 4.573867z m-188.416-394.478934l-50.824534 159.505067 10.171734 5.290667c71.3728 37.205333 143.940267 74.717867 221.661866 114.824533l6.3488 3.2768 6.314667-3.345067a18787.566933 18787.566933 0 0 1 223.061333-116.087466l10.171734-5.2224-53.6576-175.684267-14.062934 6.212267c-17.851733 7.8848-44.509867 20.0704-69.632 34.816-15.36 9.250133-30.344533 17.339733-46.557866 26.146133l-13.1072 7.099733c-13.9264 7.611733-29.5936 11.605333-45.294934 11.605334-14.2336 0-29.354667-3.584-42.564266-10.205867 0 0-10.5472-6.178133-12.288-7.338667-3.7888-1.979733-5.632-2.901333-7.441067-4.027733l-32.221867-18.056533c-25.975467-15.121067-48.059733-27.2384-70.587733-36.795734l-13.789867-5.870933-5.700266 13.858133z"  ></path>' +
    '' +
    '<path d="M960.341333 754.3808c-26.282667 0-48.196267-14.267733-49.937066-32.4608l-0.034134-225.826133c0-3.618133 0-8.123733 1.4336-12.526934 5.495467-15.633067 25.4976-26.7264 48.5376-26.7264l5.495467 0.1024c22.9376 1.365333 42.7008 15.872 44.407467 33.006934l0.068266 226.7136c0 17.066667-13.892267 31.163733-35.396266 35.9424-6.621867 1.774933-11.810133 1.774933-14.574934 1.774933z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xuelijiaoyu" viewBox="0 0 1526 1024">' +
    '' +
    '<path d="M643.46416 746.604c-121.535-49.116-221.885-85.86-311.398-128.835v215.767s153.093 187.382 436.832 187.382c263.463 0 413.192-187.382 413.192-187.382V586.47c-115.79 58.624-221.885 121.833-300.77 160.136-67.795 42.343-162.87 31.3-237.856-0.002z m811.148-482.78c-154.158-64.788-464.168-183.312-599.77-240.34-75.98-38.872-119.81-20.29-202.467 13.723C512.61816 91.284 248.82016 190.21 89.18716 251.837-33.07984 298.705-25.68484 333.647 87.20016 388.756c169.466 82.552 510.78 209.292 582.47 236.971 71.76 27.418 123.71 27.607 195.998-5.516 72.096-33.207 176.86-75.772 502.66-212.612v202.908l-76.786 71.05L1403.58016 795.63l110.84-117.372-53.28-54.217V366.99c37.503-23.97 127.818-43.57-6.527-103.166z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)