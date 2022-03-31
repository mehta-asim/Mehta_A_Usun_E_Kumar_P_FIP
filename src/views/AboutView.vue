<template>
  <div class="about">
    <ContributionComponent />
    <LightBox />
    <TextComponent />
    <CTAComponent />
    <ParticipationComponent />
    <DonateNow />
    <TheForm />
  </div>
</template>

<script>
import LightBox from "@/components/lightBoxComponent.vue";
import TheForm from "@/components/TheForm.vue";
import ContributionComponent from "@/components/ContributionComponent.vue";
import TextComponent from "@/components/TextComponent.vue";
import CTAComponent from "@/components/CTAComponent.vue";
import ParticipationComponent from "@/components/ParticipationComponent.vue";
import DonateNow from "@/components/DonateNow.vue";

export default {
  name: "AboutView",

  components: {
    ContributionComponent,
    TextComponent,
    CTAComponent,
    ParticipationComponent,
    DonateNow,
    TheForm,
    LightBox,
  },
};
</script>
