<template>
  <footer>
    <h2 class="hidden">footerNavigation</h2>
    <p class="footerText">
      The Wikimedia Foundation, Inc is a nonprofit charitable organization
      dedicated to encouraging the growth, development and distribution of free,
      multilingual content, and to providing the full content of these
      wiki-based projects to the public free of charge.
    </p>
    <section id="footerNavSection">
      <section id="leftSection">
        <section class="projects">
          <h3>Projects</h3>
          <ul>
            <li><a href="">Wikipedia</a></li>
            <li><a href="">Wikibooks</a></li>
            <li><a href="">Wikiversity</a></li>
            <li><a href="">Wikinews</a></li>
          </ul>
        </section>
        <section class="affiliates">
          <h3>Movement Affiliates</h3>
          <ul>
            <li><a href="">Wikimedia Chapters</a></li>
            <li><a href="">Wikimedia Thematic</a></li>
            <li><a href="">Organizations</a></li>
            <li><a href="">Wikimedia User Groups</a></li>
          </ul>
        </section>
        <section class="other">
          <h3>OTHER</h3>
          <ul>
            <li><a href="">Terms Of Use</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Disclaimers</a></li>
            <li><a href="">About Accessibility</a></li>
            <li><a href="">About Cookies</a></li>
          </ul>
        </section>
      </section>
      <section id="rightSection">
        <section class="topParts">
          <section class="footerContact">
            <button>CAREER</button>
            <button>CONTACT</button>
          </section>
          <div id="footerLogo">
            <a href=""
              ><img src="../assets/images/wiki-logo-vertical.svg" alt=""
            /></a>
          </div>
        </section>
        <section class="bottomParts">
          <hr />
          <p>
            Except where otherwise noted, the content of this site is licensed
            under a Creative Commons Attribution-ShareAlike 3.0 Unported
            license. Powered by WordPress.com VIP. Automattic Privacy Notice.
          </p>
        </section>
      </section>
    </section>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_footer.scss";
</style>
