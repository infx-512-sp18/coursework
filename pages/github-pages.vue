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

    <h2>Source</h2>
    <ul>
      <li>
        <a href="https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/">GitHub Help Pages</a>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  head: {
    title: 'Publishing to GitHub pages'
  }
}
</script>
