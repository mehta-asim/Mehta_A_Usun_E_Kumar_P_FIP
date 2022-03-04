<template>
  <section id="ctaSection">
    <h2 class="hidden">Call To Action Section</h2>
    <img
      src="../assets/images/cta.jpg"
      alt="you support the volunteers image"
    />
    <p id="ctaText">Learn something new. Contribute what you know</p>
    <section id="ctaDesc">
      <h3>Wikimedia projects are made by volunteers. Like you.</h3>
      <p>
        Editors contribute new articles and improve current articles. Developers
        write and debug the code that makes the wikis go. Galleries, libraries,
        archives, and museums share their collections and expertise. All of us
        have knowledge to share. Here’s how to join our global community.
      </p>
    </section>
    <DonateNow />
  </section>
</template>

<script>
import DonateNow from "@/components/DonateNow.vue";
export default {
  name: "CTAComponent",

  components: {
    DonateNow,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_ctaComponent.scss";
</style>
