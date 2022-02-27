<template>
  <div class="about">
    <ContributionComponent />
    <TextComponent />
    <CTAComponent />
    <ParticipationComponent />
    <DonateNow />
    <ContactComponent />
  </div>
</template>

<script>
import ContributionComponent from "@/components/ContributionComponent.vue";
import TextComponent from "@/components/TextComponent.vue";
import CTAComponent from "@/components/CTAComponent.vue";
import ParticipationComponent from "@/components/ParticipationComponent.vue";
import DonateNow from "@/components/DonateNow.vue";
import ContactComponent from "@/components/ContactComponent.vue";

export default {
  name: "AboutView",

  components: {
    ContributionComponent,
    TextComponent,
    CTAComponent,
    ParticipationComponent,
    DonateNow,
    ContactComponent,
  },
};
</script>
