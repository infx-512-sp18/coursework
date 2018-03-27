<template>
  <main id="main" tabindex="-1">
    <h1>Publishing to GitHub pages</h1>

    <p>You can configure GitHub Pages to publish your site's source files from
      <code>master</code>,
      <code>gh-pages</code>, or a
      <code>/docs</code> folder on your
      <code>master</code> branch for Project Pages and other Pages sites that meet certain criteria.</p>

    <p>If your site is a User or Organization Page that has a repository named
      <code>&lt;username&gt;.github.io</code> or
      <code>&lt;orgname&gt;.github.io</code>, you cannot publish your site's source files from different locations. User and Organization Pages that have this type of repository name are only published from the
      <code>master</code> branch.</p>

    <h2>Create a branch to publish</h2>

    <p>After you've created either a
      <code>master</code> or
      <code>gh-pages</code> branch, you can set one as your publishing source so that your site will be published.</p>

    <p>If you fork or upload your site repository with only a
      <code>master</code> or
      <code>gh-pages</code> branch, your site's source setting will automatically be enabled for that branch.</p>

    <h3>Create an
      <code>index.html</code> page</h3>

    <p>
      <img src="~/assets/github-pages/gh-pages-create-index.gif" alt="Animation of creating an index HTML page">
    </p>

    <h3>Push the master branch to GitHub</h3>

    <p>
      <img class="lazy-load" :data-src="require('~/assets/github-pages/gh-pages-push-master.gif')" src="~/assets/images/placeholder.gif" alt="Animation of pushing code to GitHub">
    </p>

    <h3>Change setting in GitHub</h3>

    <p>
      <img class="lazy-load" :data-src="require('~/assets/github-pages/gh-pages-settings.gif')" src="~/assets/images/placeholder.gif" alt="Animation of changing settings in GitHub">
    </p>

    <h3>View the page in a browser</h3>

    <p>
      <code>https://[orgname].github.io/[reponame]</code>
    </p>
    <p>
      <img class="lazy-load" :data-src="require('~/assets/github-pages/gh-pages-view.png')" src="~/assets/images/placeholder.gif" alt="Screenshot of website in in a browser">
    </p>

    <h2>Source</h2>
    <ul>
      <li>
        <a href="https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/">GitHub Help Pages</a>
      </li>
    </ul>
  </main>
</template>

<script>
function debounce(func, wait = 20, immediate = true) {
  var timeout
  return function() {
    var context = this,
      args = arguments
    var later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
export default {
  head: {
    title: 'Publishing to GitHub pages'
  },
  data: function() {
    return {
      images: []
    }
  },
  mounted() {
    Prism.highlightAll()

    this.images = this.$el.querySelectorAll('img.lazy-load')

    window.addEventListener('scroll', debounce(this.checkImage))
  },
  methods: {
    checkImage: function() {
      this.images.forEach(loadImage => {
        const scrollPosition = window.scrollY + window.innerHeight
        const loadPosition = loadImage.offsetTop - 200

        if (!loadImage.classList.contains('loaded') && scrollPosition > loadPosition) {
          loadImage.src = loadImage.dataset.src
          loadImage.classList.add('loaded')
        }
      })
    }
  }
}
</script>
