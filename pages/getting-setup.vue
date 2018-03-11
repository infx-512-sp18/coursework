<template>
  <main id="main" tabindex="-1">
    <h1>Getting setup tutorial</h1>
    <p>Before you get started with this course, you need to install a few tools and create a few accounts. All of these things are free and available on all major platforms (Windows, OS X, and Linux).</p>

    <h2>Sign up</h2>
    <ul>
      <li>
        <a href="https://github.com/join">GitHub</a> - We will store all code in GitHub. There is also a
        <a href="https://education.github.com/">Student Developer Pack</a> which gives you unlimited private repositories and other useful resources.
      </li>
    </ul>

    <h2>Required tools</h2>
    <ul>
      <li>
        <a href="https://slack.com/downloads">Slack</a> - A group chat tool that we will use for daily communication. Slack is available as a Web app, desktop and mobile application. The desktop application is recommended.
      </li>
      <li>
        <a href="https://desktop.github.com/">GitHub Desktop</a> - This tool makes working with GIT visual.
      </li>
      <li>
        <a href="https://code.visualstudio.com/">Visual Studio Code</a> - Code editor we will be using throughout the course.
      </li>
      <li>
        <a href="https://www.google.com/chrome/">Google Chrome</a> - Web browser with developer tools that will allow us to inspect Web pages and javascript.
      </li>
    </ul>

    <h2>Command line tools</h2>
    <ul>
      <li>
        <a href="https://nodejs.org/en/download/">Node JS and NPM</a> - These tools will help us build modern Web pages.
      </li>
    </ul>

    <p>These tools can be downloaded from the website or installed via
      <a href="https://brew.sh/">Homebrew</a> (MacOS only) with the following commands:</p>

    <pre class="text-sm m-0 p-0"><code class="language-bash">$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew cask install google-chrome slack visual-studio-code github
$ brew install node</code></pre>

    <h2>Customizing VS Code</h2>

    <p>These extensions will help you as a developer get the most out of Visual Studio Code.</p>

    <ul>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint">StyleLint</a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">Prettier</a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense">Path Intellisense</a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion">IntelliSense for CSS class names</a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek">CSS Peek</a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag">Auto close tag</a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag">Auto rename tag</a>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  head: {
    title: 'Getting setup tutorial'
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>
