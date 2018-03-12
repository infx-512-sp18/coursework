<template>
  <main id="main" tabindex="-1">
    <h1>Managing files tutorial</h1>
    <p>Website consist of many files, folders and assets. These files are living documents that change over time.</p>
    <h2>Version control systems</h2>
    <ul>
      <li>CVS (Concurrent Version Systems) - 1900's</li>
      <li>SVN (Apache Subversion) - 2000's</li>
      <li>Git/Mercurial - 2005</li>
    </ul>

    <h3>CVS &amp; SVN - Centralized Version Control</h3>
    <p>One central server, each client (person) checks out and merges changes to main server.</p>

    <h3>Git, Mercurial - Distributed Version Control</h3>
    <p>Each client (person) has a local repository, which they can then reconcile with the main server.</p>

    <h2>GitHub</h2>
    <p>Although git can be used without a central server, it is commonly paired with the collaborative, cloud-based repository service GitHub, which maintains a copy of your files in a central, secure, and backed-up location.</p>

    <ul>
      <li>Fast -- add to your team and code base quickly</li>
      <li>Distributed</li>
      <li>Each commit has a corresponding hash (track changes from everyone)</li>
      <li>Everyone has a local copy of the history</li>
    </ul>

    <p>Git is an archiving system that can store, retrieve, and merge various versions of your files. It's kind of like Dropbox and Google Docs, but with two big differences:</p>
    <ul>
      <li>New versions of your files must be explicitly committed when they are ready. Git doesn't save a new version every time you save a file to disk. That approach works fine for word-processing documents, but not for programming files. You typically need to write some code, save it, load it in your browser, test it, debug, make some fixes, and test again before you're ready to commit a new version.</li>
      <li>For text files (which nearly all your web development files will be), git pays attention to changes at the line level, and not just the file level. That means it can automatically merge together different changes made to different parts of the same file.</li>
    </ul>
    <p>Like Dropbox and Google Docs, git can show you all previous versions of a file and can quickly rollback to one of those previous versions. This is often helpful in web development, especially if you embark on making a massive set of changes, only to discover part way through that those changes were a bad idea (I speak from experience here &#x1F631; ).</p>
    <p>But where git really comes in handy is in team development. Almost all professional web development work is done in teams, with involves multiple people working on the same set of files at the same time. Git helps the team coordinate all these changes, and provides a record so that anyone can see how a given file ended up the way it did.</p>

    <h2>Git Core Concepts</h2>
    <p>To understand how git works, you need to understand its core concepts. Read this section carefully, and come back to it if you forget what these terms mean.</p>
    <ul>
      <li>
        <strong>repository (repo):</strong> an archive containing all the committed versions of all your files, along with some additional metadata, stored in a hidden subdirectory named
        <code>.git</code> within your project directory. If you want to sound cool and in-the-know, call this a "repo."</li>
      <li>
        <strong>commit:</strong> a set of file versions that have been added to the repository, along with the name of the person who did the commit, a message describing the commit, and a timestamp. This extra tracking information allows you to see when, why, and by whom changes were made to a given file.</li>
      <li>
        <strong>remote:</strong> a link to a copy of this same repository on a different machine. Typically this will be a central version of the repository that all local copies on your various development machines point to (known as the
        <code>origin</code>). You can push/publish commits to, and pull commits from, a remote repository to keep everything in sync. You can also add more than one remote link if you are working with multiple remote repositories.</li>
      <li>
        <strong>merge conflict:</strong> a condition that occurs when you merge commits pulled from a remote repository that include changes to the same lines that you've already changed locally. In this case, git doesn't which version is correct, so you must resolve the conflict by choosing a winner, or manually combining the changes.</li>
      <li>
        <strong>.gitignore file:</strong> a file in your project's root directory that contains paths or specific files that git should ignore. This is very useful for keeping things out of the repository that should never be in there, such as current workspace settings saved by an Integrated Development Environment (IDE), or files containing login information or secret keys.</li>
    </ul>

    <p><img class="lazy-load" :data-src="require('~/assets/managing-files/github.png')" src="/placeholder.gif" alt="Diagram of GitHub code pushed and pulled from the server"></p>

    <h2>GitHub Desktop</h2>

    <p>Git can be used as a command line tool (see
      <nuxt-link to="/getting-setup">Getting setup page</nuxt-link>). In this course we will be using the GitHub Desktop application to manage our repositories, files and commits.</p>

    <p><img class="lazy-load" :data-src="require('~/assets/managing-files/github-desktop-app.png')" src="/placeholder.gif" alt="Screenshot of GitHub Desktop application"></p>

    <h2>Getting setup</h2>

    <h3>Create a repo</h3>

    <p><img class="lazy-load" :data-src="require('~/assets/managing-files/github-create-repo.png')" src="/placeholder.gif" alt="Screenshot of creating a repository on GitHub"></p>

    <h3>Clone repo</h3>

    <p><img class="lazy-load" :data-src="require('~/assets/managing-files/github-clone-repo.png')" src="/placeholder.gif" alt="Screenshot of cloning a repository on GitHub"></p>

    <p><img class="lazy-load" :data-src="require('~/assets/managing-files/github-app-clone-repo.png')" src="/placeholder.gif" alt="Screenshot of clone repository dialog in GitHub app"></p>

    <h3>Open repo in editor</h3>

    <p><img class="lazy-load" :data-src="require('~/assets/managing-files/vscode-open-repo.png')" src="/placeholder.gif" alt="Screenshot of Visual Studio Code"></p>

    <h3>Create a
      <code>.gitignore</code> file</h3>

    <p><img class="lazy-load" :data-src="require('~/assets/managing-files/vscode-add-file.gif')" src="/placeholder.gif" alt="Animation of adding a file in VS Code"></p>

    <h3>Edit the README.md file</h3>

    <p><img class="lazy-load" :data-src="require('~/assets/managing-files/vscode-add-content.gif')" src="/placeholder.gif" alt="Adding content to the README file"></p>

    <h3>Commit changes</h3>

    <p><img class="lazy-load" :data-src="require('~/assets/managing-files/github-desktop-commit.gif')" src="/placeholder.gif" alt="Animation of how to commit with GitHub Desktop"></p>

    <h3>Sync with Github</h3>

    <p><img class="lazy-load" :data-src="require('~/assets/managing-files/github-desktop-push.gif')" src="/placeholder.gif" alt="Animation of how to push code with GitHub Desktop"></p>

    <h3>View changes on Github</h3>

    <p><img class="lazy-load" :data-src="require('~/assets/managing-files/github-view-changes.png')" src="/placeholder.gif" alt="Screenshot of a repository on GitHub"></p>

    <h3>Repeat</h3>

    <h2>Working collaboratively</h2>

    <h3>Branching and Merging</h3>

    <p><img class="lazy-load" :data-src="require('~/assets/managing-files/github-desktop-branch.gif')" src="/placeholder.gif" alt="Animation of creating a branch in GitHub Desktop"></p>

    <p>Once you have added content, commit those changes and publish them to GitHub.</p>

    <p><img class="lazy-load" :data-src="require('~/assets/managing-files/github-desktop-commit-to-branch.gif')" src="/placeholder.gif" alt="Animation of committing and publishing to GitHub"></p>

    <h3>Pull Requests</h3>

    <p><img class="lazy-load" :data-src="require('~/assets/managing-files/github-submit-pr.gif')" src="/placeholder.gif" alt="Animation of submitting a pull request"></p>

    <h3>Merging in a pull request</h3>

    <p><img class="lazy-load" :data-src="require('~/assets/managing-files/github-merge-pr.gif')" src="/placeholder.gif" alt="Animation of merging in a pull request"></p>

    <h3>Pull newest changes to your desktop</h3>

    <p><img class="lazy-load" :data-src="require('~/assets/managing-files/github-fetch-changes.gif')" src="/placeholder.gif" alt="Animation of fetching new changes from GitHub"></p>

    <h3>Keep Practicing</h3>

    <h2>Additional resources</h2>
    <ul>
      <li>
        <a href="https://help.github.com/desktop/guides/contributing-to-projects/">GitHub Desktop how-to guides</a>
      </li>
      <li>
        <a href="https://guides.github.com/activities/hello-world/">GitHub "Hello world" activity</a>
      </li>
      <li>
        <a href="https://chris.beams.io/posts/git-commit/">How to Write a Git Commit Message</a>
      </li>
      <li>
        <a href="https://code.visualstudio.com/docs/getstarted/introvideos">VSCode intro videos</a>
      </li>
      <li>
        <a href="https://guides.github.com/features/mastering-markdown/">Markdown guide</a>
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
    title: 'Managing files tutorial'
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
