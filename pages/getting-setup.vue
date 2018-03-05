<template>
  <main id="main" tabindex="-1">
    <h1>Getting setup tutorial</h1>
    <p>Before you get started with this course, you need to install a few tools and create a few accounts. All of these things are free and available on all major platforms (Windows, OS X, and Linux).</p>
    <h2>Required tools</h2>
    <ul>
      <li>
        <a href="https://slack.com/downloads">Slack</a>
      </li>
      <li>
        <a href="https://desktop.github.com/">GitHub Desktop</a>
      </li>
      <li>
        <a href="https://code.visualstudio.com/">Visual Studio Code</a>
      </li>
      <li>
        <a href="https://www.google.com/chrome/">Google Chrome</a>
      </li>
    </ul>

    <h2>Command line tools</h2>
    <ul>
      <li>
        <a href="https://nodejs.org/en/download/">Node JS and NPM</a>
      </li>
      <li>
        <a href="https://www.browsersync.io/">BrowserSync</a>
      </li>
    </ul>

    <p>These tools can be downloaded from the website or installed via
      <a href="https://brew.sh/">Homebrew</a> (MacOS only) with the following commands:</p>
    <p>
      <pre>
        /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
        brew install node
        npm install -g browser-sync
      </pre>
    </p>

    <h2>Sign up</h2>
    <ul>
      <li>
        <a href="https://github.com/join">GitHub</a>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  head: {
    title: 'Getting setup tutorial'
  }
}
</script>
