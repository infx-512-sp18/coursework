webpackJsonp([1],{EujL:function(t,e,i){t.exports=i.p+"img/gh-pages-view.0891748.png"},FZT0:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{attrs:{id:"main",tabindex:"-1"}},[s("h1",[t._v("Publishing to GitHub pages")]),t._m(0),t._m(1),s("h2",[t._v("Create a branch to publish")]),t._m(2),t._m(3),t._m(4),t._m(5),s("h3",[t._v("Push the master branch to GitHub")]),s("p",[s("img",{staticClass:"lazy-load",attrs:{"data-src":i("IMvk"),src:i("XcQ6"),alt:"Animation of pushing code to GitHub"}})]),s("h3",[t._v("Change setting in GitHub")]),s("p",[s("img",{staticClass:"lazy-load",attrs:{"data-src":i("NafS"),src:i("XcQ6"),alt:"Animation of changing settings in GitHub"}})]),s("h3",[t._v("View the page in a browser")]),t._m(6),s("p",[s("img",{staticClass:"lazy-load",attrs:{"data-src":i("EujL"),src:i("XcQ6"),alt:"Screenshot of website in in a browser"}})]),s("h2",[t._v("Source")]),t._m(7)])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("You can configure GitHub Pages to publish your site's source files from\n    "),i("code",[t._v("master")]),t._v(",\n    "),i("code",[t._v("gh-pages")]),t._v(", or a\n    "),i("code",[t._v("/docs")]),t._v(" folder on your\n    "),i("code",[t._v("master")]),t._v(" branch for Project Pages and other Pages sites that meet certain criteria.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If your site is a User or Organization Page that has a repository named\n    "),e("code",[this._v("<username>.github.io")]),this._v(" or\n    "),e("code",[this._v("<orgname>.github.io")]),this._v(", you cannot publish your site's source files from different locations. User and Organization Pages that have this type of repository name are only published from the\n    "),e("code",[this._v("master")]),this._v(" branch.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("After you've created either a\n    "),e("code",[this._v("master")]),this._v(" or\n    "),e("code",[this._v("gh-pages")]),this._v(" branch, you can set one as your publishing source so that your site will be published.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you fork or upload your site repository with only a\n    "),e("code",[this._v("master")]),this._v(" or\n    "),e("code",[this._v("gh-pages")]),this._v(" branch, your site's source setting will automatically be enabled for that branch.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Create an\n    "),e("code",[this._v("index.html")]),this._v(" page")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:i("Jgjz"),alt:"Animation of creating an index HTML page"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("https://[orgname].github.io/[reponame]")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/"}},[this._v("GitHub Help Pages")])])])}];s._withStripped=!0;var n={render:s,staticRenderFns:a};e.a=n},IMvk:function(t,e,i){t.exports=i.p+"img/gh-pages-push-master.e39de23.gif"},Jgjz:function(t,e,i){t.exports=i.p+"img/gh-pages-create-index.9ddea5d.gif"},NafS:function(t,e,i){t.exports=i.p+"img/gh-pages-settings.52a44b0.gif"},XcQ6:function(t,e){t.exports="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},hWZT:function(t,e,i){"use strict";e.a={head:{title:"Publishing to GitHub pages"},data:function(){return{images:[]}},mounted:function(){Prism.highlightAll(),this.images=this.$el.querySelectorAll("img.lazy-load"),window.addEventListener("scroll",function(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(){var a=this,n=arguments,r=s&&!e;clearTimeout(e),e=setTimeout(function(){e=null,s||t.apply(a,n)},i),r&&t.apply(a,n)}}(this.checkImage))},methods:{checkImage:function(){this.images.forEach(function(t){var e=window.scrollY+window.innerHeight,i=t.offsetTop-200;!t.classList.contains("loaded")&&e>i&&(t.src=t.dataset.src,t.classList.add("loaded"))})}}}},qsh2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("hWZT"),a=i("FZT0"),n=i("VU/8")(s.a,a.a,!1,null,null,null);n.options.__file="pages/github-pages.vue",e.default=n.exports}});