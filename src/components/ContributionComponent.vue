<template>
  <section id="whyContribution">
    <h2 class="hidden">Why Contributions?</h2>
    <p id="contributionText">
      Your donation protects the human right to free and open knowledge for
      everyone.
    </p>
    <h3>Choices for your Donation/Participation</h3>
    <section id="contributions">
      <ul>
        <li id="subContribution">
          <a href="#">
            <img
              src="../assets/images/money.jpg"
              alt="hand donating money in donation box"
            />
            <p>Money</p>
          </a>
        </li>
        <li id="subContribution">
          <a href="#">
            <img src="../assets/images/articles.jpg" alt="" />
            <p>Articles</p>
          </a>
        </li>
        <li id="subContribution">
          <a href="#">
            <img src="../assets/images/coding.jpg" alt="" />
            <p>Coding</p>
          </a>
        </li>
        <li id="subContribution">
          <a href="#">
            <img src="../assets/images/tech-skills.jpg" alt="" />
            <p>Technology Skills</p>
          </a>
        </li>
        <li id="subContribution">
          <a href="#">
            <img src="../assets/images/speaker.jpg" alt="" />
            <p>Speaker</p>
          </a>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  name: "ContributionComponent",
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_contribution.scss";
</style>
