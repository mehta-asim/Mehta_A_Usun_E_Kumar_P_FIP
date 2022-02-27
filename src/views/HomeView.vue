<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HeroComponent />
    <TwitterReview />
    <AboutFoundation />
    <DonateNow />
    <ContactComponent />
    <NewsComponent />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeroComponent from "@/components/HeroComponent.vue";
import TwitterReview from "@/components/TwitterReview.vue";
import AboutFoundation from "@/components/AboutFoundation.vue";
import DonateNow from "@/components/DonateNow.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import NewsComponent from "@/components/NewsComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeroComponent,
    TwitterReview,
    AboutFoundation,
    DonateNow,
    ContactComponent,
    NewsComponent,
  },
};
</script>
