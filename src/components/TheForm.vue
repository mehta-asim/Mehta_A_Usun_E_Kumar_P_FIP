<template>
  <section class="form">
    <form>
      <input type="text" name="first_name" placeholder="First Name" />
      <input type="text" name="last_name" placeholder="Last Name" />
      <input type="email" name="email" placeholder="Email" />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="your message here..."
      ></textarea>
      <select name="role" id="role">
        <option value="Web Developer">Web Developer</option>
        <option value="Content Editor">Content Editor</option>
        <option value="Proofreader">Proofreader</option>
        <option value="Content Verifier">Content Verifier</option>
      </select>

      <button type="submit" @click="trySubmit">Donate</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "TheForm",

  methods: {
    trySubmit() {},
  },
};
</script>


