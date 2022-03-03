<template>
  <section class="contactSection">
    <section class="connectSection">
      <h2>Connect</h2>
      <div id="emailBox">
        <h3>Email Box</h3>
      </div>
    </section>
    <section class="contactText">
      <p>
        This mailing list is powered by MailChimp. The Wikimedia Foundation will
        handle your personal information in accordance with this site’s privacy
        policy.
      </p>
    </section>
    <section class="socialMediaSection">
      <h2>Social</h2>
      <section class="mediaIcons">
        <a href=""
          ><img src="../assets/images/instagram.svg" alt="instagram icon"
        /></a>
        <a href="">
          <img src="../assets/images/facebook.svg" alt="facebook icon" />
        </a>
      </section>
      <section class="mediaIcons">
        <a href="">
          <img src="../assets/images/twitter.svg" alt="twitter icon" />
        </a>
        <a href="">
          <img src="../assets/images/youtube.svg" alt="youtube icon" />
        </a>
      </section>
      <h3>Wikimedia Foundation © 2022</h3>
    </section>
  </section>
</template>

<script>
export default {
  name: "ContactComponent",
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_contact.scss";
</style>
