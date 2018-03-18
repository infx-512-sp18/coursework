<template>
  <main id="main" tabindex="-1">
    <h1>Auto refreshing with Browsersync</h1>

    <h2>Installation</h2>

    <p>Ensure
      <code>node</code> and
      <code>npm</code> are installed. Instuctions are in the
      <a href="/getting-setup">Getting setup</a> guide.
    </p>

    <p>
      <pre><code class="language-bash">$ node --version
v9.8.0

$ npm --version
5.6.0</code></pre>
    </p>

    <p>
      <em>Note: Your version numbers may be different</em>.</p>

    <p>
      <pre><code class="language-bash">$ npm install -g browser-sync</code></pre>
    </p>

    <h2>Starting a server</h2>

    <p>The power of Brwosersync is it can start a local webserver (will be important later in this course) and watch for file changes. When ever you save a file, it will automatically update the preview of your webpage with those changes.</p>

    <p>
      <pre><code class="language-bash">$ browser-sync start --server --files "*.html, css/*.css"</code></pre>
    </p>

    <h2>Visit the local webserver</h2>

    <p>Alt+Click on the URL or visit
      <a href="http://localhost:3000/">http://localhost:3000/</a> in Chrome to view your website.</p>

    <h2>Stopping the server</h2>

    <p>Use the
      <code>Command+C</code> key combination in the terminal to stop the server.</p>

    <p>
      <pre><code class="language-bash">$ ^C</code></pre>
    </p>
    <h2>Resources</h2>
    <ul>
      <li>
        <a href="https://browsersync.io/docs/command-line">Browsersync command line options</a>
      </li>
      <li>
        <a href="https://scotch.io/tutorials/how-to-use-browsersync-for-faster-development">Basic example of Browsersync 'start' command.</a>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  head: {
    title: 'Auto refreshing with Browsersync'
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>
