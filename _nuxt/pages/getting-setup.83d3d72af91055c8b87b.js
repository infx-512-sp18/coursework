webpackJsonp([7],{"6S9M":function(e,t,a){"use strict";var i=function(){var e=this.$createElement;this._self._c;return this._m(0)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",{attrs:{id:"main",tabindex:"-1"}},[i("h1",[e._v("Getting setup tutorial")]),i("p",[e._v("Before you get started with this course, you need to install a few tools and create a few accounts. All of these things are free and available on all major platforms (Windows, OS X, and Linux).")]),i("h2",[e._v("Sign up")]),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/join"}},[e._v("GitHub")]),e._v(" - We will store all code in GitHub. There is also a\n        "),i("a",{attrs:{href:"https://education.github.com/"}},[e._v("Student Developer Pack")]),e._v(" which gives you unlimited private repositories and other useful resources.\n      ")])]),i("h2",[e._v("Required tools")]),i("ul",[i("li",[i("a",{attrs:{href:"https://slack.com/downloads"}},[e._v("Slack")]),e._v(" - A group chat tool that we will use for daily communication. Slack is available as a Web app, desktop and mobile application. The desktop application is recommended.\n      ")]),i("li",[i("a",{attrs:{href:"https://desktop.github.com/"}},[e._v("GitHub Desktop")]),e._v(" - This tool makes working with GIT visual.\n      ")]),i("li",[i("a",{attrs:{href:"https://code.visualstudio.com/"}},[e._v("Visual Studio Code")]),e._v(" - Code editor we will be using throughout the course.\n      ")]),i("li",[i("a",{attrs:{href:"https://www.google.com/chrome/"}},[e._v("Google Chrome")]),e._v(" - Web browser with developer tools that will allow us to inspect Web pages and javascript.\n      ")])]),i("h2",[e._v("Command line tools")]),i("ul",[i("li",[i("a",{attrs:{href:"https://nodejs.org/en/download/"}},[e._v("Node JS and NPM")]),e._v(" - These tools will help us build modern Web pages.\n      ")])]),i("p",[e._v("These tools can be downloaded from the website or installed via\n      "),i("a",{attrs:{href:"https://brew.sh/"}},[e._v("Homebrew")]),e._v(" (MacOS only) with the following commands:")]),i("pre",[i("code",{staticClass:"language-bash"},[e._v('$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n$ brew cask install google-chrome\n$ brew cask install slack\n$ brew cask install visual-studio-code\n$ brew cask install github\n$ brew install node')])]),i("h2",{attrs:{id:"troubleshooting"}},[e._v("Troubleshooting")]),i("h3",[e._v("GIT username or email address error")]),i("p",[e._v("If you get this error when pushing to GitHub Desktop")]),i("p",[i("img",{attrs:{src:a("8R80"),alt:"Screenshot of GIT authentication error"}})]),i("p",[e._v("Open a Terminal (\n      "),i("a",{attrs:{href:"https://www.wikihow.com/Open-a-Terminal-Window-in-Mac"}},[e._v("instructions")]),e._v(") or Command Prompt (\n      "),i("a",{attrs:{href:"https://www.digitalcitizen.life/7-ways-launch-command-prompt-windows-7-windows-8"}},[e._v("instructions")]),e._v(") and type the following commands. Replace\n      "),i("code",[e._v("{First name}")]),e._v(",\n      "),i("code",[e._v("{Last name}")]),e._v(",\n      "),i("code",[e._v("{email}")]),e._v(" with your name and email address you use to sign up for GitHub.com.")]),i("p",[i("pre",[i("code",{staticClass:"language-bash"},[e._v('$ git config --global user.email "{email}"\n$ git config --global user.name "{First name} {Last name}"')])])]),i("p",[i("em",[e._v("Do not include the dollar sign (\n        "),i("code",[e._v("$")]),e._v(") when copy/pasting into the command line.")])]),i("h2",[e._v("Customizing VS Code")]),i("p",[i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/k7faQIXfzS4?rel=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})]),i("p",[e._v("These extensions will help you as a developer get the most out of Visual Studio Code.")]),i("ul",[i("li",[i("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint"}},[e._v("StyleLint")])]),i("li",[i("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"}},[e._v("Prettier")])]),i("li",[i("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense"}},[e._v("Path Intellisense")])]),i("li",[i("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion"}},[e._v("IntelliSense for CSS class names")])]),i("li",[i("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek"}},[e._v("CSS Peek")])]),i("li",[i("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag"}},[e._v("Auto close tag")])]),i("li",[i("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"}},[e._v("Auto rename tag")])]),i("li",[i("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer"}},[e._v("Bracket Pair Colorizer")])]),i("li",[i("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"}},[e._v("Spelling Checker")])]),i("li",[i("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=SirTori.indenticator"}},[e._v("Indenticator")])])])])}];i._withStripped=!0;var o={render:i,staticRenderFns:s};t.a=o},"8R80":function(e,t,a){e.exports=a.p+"img/github-auth-error.717d0c3.png"},NfHL:function(e,t,a){"use strict";t.a={head:{title:"Getting setup tutorial"},mounted:function(){Prism.highlightAll()}}},d61X:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("NfHL"),s=a("6S9M"),o=a("VU/8")(i.a,s.a,!1,null,null,null);o.options.__file="pages/getting-setup.vue",t.default=o.exports}});