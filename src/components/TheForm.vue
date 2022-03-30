<template>
  <section class="form">
    <input
      v-model="first_name"
      type="text"
      name="first_name"
      placeholder="First Name"
    />
    <input
      v-model="last_name"
      type="text"
      name="last_name"
      placeholder="Last Name"
    />
    <input v-model="email" type="email" name="email" placeholder="Email" />
    <textarea
      v-model="message"
      name="message"
      id="message"
      cols="30"
      rows="10"
      placeholder="your message here..."
    ></textarea>
    <select v-model="role" name="role" id="role">
      <option value="Web Developer">Web Developer</option>
      <option value="Content Editor">Content Editor</option>
      <option value="Proof Reader">Proof Reader</option>
      <option value="Content Verifier">Content Verifier</option>
    </select>

    <button type="submit" @click="trySubmit">Donate</button>
  </section>
</template>

<script>
export default {
  name: "TheForm",

  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
      role: "",
    };
  },

  methods: {
    trySubmit() {
      this.submit();
    },

    submit() {
      let participantData = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        message: this.message,
        role: this.role,
      };

      debugger;

      // fetch("/api/participants")
      //   .then((res) => res.json(res.data))
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .catch((err) => console.error(err));

      fetch("/api/participants/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(participantData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.table(data);
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>


