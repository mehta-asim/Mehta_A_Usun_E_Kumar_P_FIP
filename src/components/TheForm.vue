<template>
  <section class="theForm">
    <h2 class="formText">Participate with us!</h2>
    <!-- <p class="validation-error" v-if="first_name_error">
      {{ error.first_name[0] }}
    </p> -->
    <section class="formFields">
      <FormError v-if="first_name_error" :error_type="error.first_name[0]" />
      <input
        v-model="first_name"
        type="text"
        name="first_name"
        placeholder="First Name"
      />
      <!-- <p class="validation-error" v-if="last_name_error">
      {{ error.last_name[0] }}
    </p> -->
      <FormError v-if="last_name_error" :error_type="error.last_name[0]" />
      <input
        v-model="last_name"
        type="text"
        name="last_name"
        placeholder="Last Name"
      />
      <FormError v-if="email_error" :error_type="error.email[0]" />
      <!-- <p class="validation-error" v-if="email_error">{{ error.email[0] }}</p> -->
      <input v-model="email" type="email" name="email" placeholder="Email" />
      <!-- <p class="validation-error" v-if="message_error">{{ error.message[0] }}</p> -->
      <FormError v-if="message_error" :error_type="error.message[0]" />
      <textarea
        v-model="message"
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="your message here..."
      ></textarea>
      <FormError v-if="role_error" :error_type="error.role[0]" />
      <!-- <p class="validation-error" v-if="role_error">{{ error.role[0] }}</p> -->
      <select v-model="role" name="role" id="role">
        <option value="Web Developer">Web Developer</option>
        <option value="Content Editor">Content Editor</option>
        <option value="Proof Reader">Proof Reader</option>
        <option value="Content Verifier">Content Verifier</option>
      </select>

      <button type="submit" @click="trySubmit">Participate</button>
    </section>
    <p v-if="isSubmit">
      You have participated with the Wikimedia Foundation, successfully. We look
      forward to spreading information together!
    </p>
  </section>
</template>

<script>
import FormError from "../components/FormError.vue";
export default {
  name: "TheForm",

  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
      role: "",
      first_name_error: false,
      last_name_error: false,
      email_error: false,
      message_error: false,
      role_error: false,
      error: {},
      isSubmit: false,
    };
  },

  methods: {
    showErrors(error) {
      // console.log("errors:", error);

      if (error.first_name) {
        this.first_name_error = true;
      } else {
        this.first_name_error = false;
      }

      if (error.last_name) {
        this.last_name_error = true;
      } else {
        this.last_name_error = false;
      }

      if (error.email) {
        this.email_error = true;
      } else {
        this.email_error = false;
      }

      if (error.message) {
        this.messsage_error = true;
      } else {
        this.messsage_error = false;
      }

      if (error.role) {
        this.role_error = true;
      } else {
        this.role_error = false;
      }
    },

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

      // console.log(JSON.stringify(participantData));

      // fetch("/api/participants")
      //   .then((res) => res.json(res.data))
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .catch((err) => console.error(err));

      fetch("/api/participants", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(participantData),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.table(data);
          if (data.status) {
            this.isSubmit = true;
          } else {
            this.error = data;
            this.showErrors(data);
          }
        });
      // .catch((err) => console.error(err));
    },
  },

  components: {
    FormError,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_FormComponent.scss";
</style>


