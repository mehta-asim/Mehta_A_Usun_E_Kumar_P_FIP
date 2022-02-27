<template>
  <footer>
    <h2 class="hidden">footerNavigation</h2>
    <h3>Footer</h3>
    <section id="footerNavSection">
      <section id="leftSection">
        <section class="leftParts"></section>
        <section class="leftParts"></section>
        <section class="leftParts"></section>
        <section class="leftParts"></section>
      </section>
      <section id="rightSection">
        <section id="rightParts"></section>
        <section id="rightParts"></section>
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
