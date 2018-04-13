<template>
  <main id="main" tabindex="-1">
    <h1>Auto refreshing with Browsersync</h1>

    <p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/KnTDM-jthOI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </p>

    <h2>Installation</h2>

    <p>Ensure
      <code>node</code> and
      <code>npm</code> are installed. Instructions are in the
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

    <p>
      If you're install gives a permission error on Mac OS, try this command:
    </p>

    <p>
      <pre><code class="language-bash">$ sudo npm install -g browser-sync</code></pre>
    </p>

    <p>It will ask you for your password, it won't show you each character as your typing.</p>

    <p>You may get errors to the screen in either case, but the application may still have installed. To verify browser-sync is installed, run this command:</p>

    <p>
      <pre><code class="language-bash">$ browser-sync --version</code></pre>
    </p>

    <p>You should see version number, something like
      <code>2.23.6</code> (although it may be different). If you see anything other than a version number, the application likely did not install correctly. Due to the complex configuration of each installation of Mac OS, unfortunately I am not able to debug every situation.
      <code>browser-sync</code> is a helpful tool in developing websites, but it is not a absolute requirement for this course. So it is okay to continue on with the assignments and tutorials with hitting
      <code>Command+R</code> to refresh the browser every time you make a change to the HTML, CSS (and eventually javascript) files.</p>

    <h2>Starting a server</h2>

    <p>The power of Browsersync is it can start a local webserver (will be important later in this course) and watch for file changes. When ever you save a file, it will automatically update the preview of your webpage with those changes.</p>

    <p>
      <pre><code class="language-bash">$ browser-sync start --server --files="**/*"</code></pre>
    </p>

    <h2>Visit the local webserver</h2>

    <p>Alt+Click on the URL or visit
      <a href="http://localhost:3000/">http://localhost:3000/</a> in Chrome to view your website.</p>

    <p>It will start the server in the directory you run the command and try to open the
      <code>index.html</code> in the same directory the command is run. If there is no
      <code>index.html</code> in the same directory, you will see a
      <code> Cannot GET /</code> error.</p>
    <p>If you have files in folders, you will need to manually type that folder (it will likely be case-sensitive) into the URL.</p>

    <h2>Opening an index file in a folder</h2>

    <p>Imagine you have a directory that looks like this:</p>

    <p>
      <pre><code class="language-bash">
| index.html
| README.md
| .gitignore
| coffee
| |____index.html
| |____css
| | |____styles.css
| |____images
| | |____...</code></pre>
    </p>

    <p>The "coffee/index.html" file would be visible in a browser at:
      <a href="http://localhost:3000/coffee/">http://localhost:3000/coffee/</a>
    </p>

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
