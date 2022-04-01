<template>
  <header>
    <h2 class="hidden">Header Navigation</h2>
    <div class="brandLogo">
      <h3 class="hidden">logo</h3>
      <a href="index.html">
        <img
          src="../assets/images/wiki-logo.svg"
          alt="wikimedia foundation logo"
        />
      </a>
    </div>
    <nav>
      <h3 class="hidden">nav bar</h3>
      <ul>
        <li><a href="/">Our Job</a></li>
        <li><a href="#/unitewithus">Unite With Us</a></li>
      </ul>
    </nav>
    <button>DONATE</button>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_header.scss";
</style>
