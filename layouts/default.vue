<template>
  <div class="container mx-auto px-2">

    <a href="#main" class="skip">Skip to main content</a>

    <header class="p-3">
      <h1>INFX 512 Spring 2018 Coursework</h1>
    </header>

    <div class="flex flex-wrap mb-4 -mx-2">
      <div class="w-full md:w-1/4 px-2">
        <nav class="overflow-hidden shadow-lg border-t-4 bg-white mb-4 rounded-b-lg rounded-t border-purple w-full my-3 p-3">
          <h2>
            <nuxt-link to="/">Table of contents</nuxt-link>
          </h2>
          <ol class="list-reset leading-loose my-3">
            <li>
              <nuxt-link to="/getting-setup">Getting setup</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/managing-files">Managing files</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/github-walkthrough">GitHub walkthrough</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/encoding-html">Encoding in HTML</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/github-pages">Publishing to GitHub pages</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/emmet-autocomplete">Emmet autocompletion</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/adding-css">Adding CSS style</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/responsive">Responding to devices</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/css-frameworks">CSS frameworks</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/javascript-intro">Intro to Javascript</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/javascript-dom">DOM manipulation</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/javascript-iteration">Javascript iteration</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/javascript-ajax">Javascript AJAX</nuxt-link>
            </li>
          </ol>
        </nav>
      </div>

      <div class="w-full md:w-3/4 px-2">
        <div class="overflow-hidden shadow-lg border-t-4 bg-white mb-4 rounded-b-lg rounded-t border-purple w-full my-3 p-3">
          <nuxt/>
        </div>
      </div>
    </div>

    <footer class="text-sm">
      <p>&copy; 2018
        <a href="https://nickdenardis.com/">Nick DeNardis</a> |
        <a href="https://ischool.uw.edu/">The Information School</a> |
        <a href="https://uw.edu/">University of Washington</a>
      </p>
    </footer>

  </div>
</template>

<style>
html {
  background-color: config('colors.white');
  font-family: config('fonts.sans');
}
</style>
