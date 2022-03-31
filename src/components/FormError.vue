<template>
  <section class="validation-error">
    <p>**{{ error_type }}**</p>
  </section>
</template>

<script>
export default {
  name: "FormError",
  //
  props: {
    error_type: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_FormError.scss";
</style>
