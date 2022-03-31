<template>
  <section class="articlePopup">
    <a @click="closePopup">X</a>
    <img :src="require('@/assets/images/' + imgSrc + '.jpg')" alt="" />
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/sass/_lightBox.scss";
</style>

<script>
export default {
  name: "LightBox",

  data() {
    return {
      articles: ["article", "code", "speaker-pop", "tester"],
      imgSrc: "",
    };
  },

  created: function () {
    this.imgSrc =
      this.articles[Math.floor(Math.random() * this.articles.length)];

    debugger;
  },

  methods: {
    closePopup() {
      event.target.parentElement.classList.add("hidden");
    },
  },
};
</script>
