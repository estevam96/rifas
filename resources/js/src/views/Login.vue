<template>
  <div
    class="app container h-100  d-flex justify-content-center align-item-center"
  >
    <b-col xs="4" md="6" class="mx-auto my-auto">
      <b-card no-body>
        <div class="form-side">
          <b-form @submit.prevent="formSubmit" title="Login">
            <b-form-group label="E-mail">
              <b-form-input type="email" v-model="form.email" />
            </b-form-group>
            <b-form-group label="Senha">
              <b-form-input type="password" v-model="form.password" />
            </b-form-group>
            <b-button type="submit">
              <b-spinner variant="light" small v-if="processing" />
              <b v-else>Entra</b>
            </b-button>
          </b-form>
        </div>
      </b-card>
    </b-col>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      loading: false,
      form: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters(["currentUser", "processing"])
  },
  methods: {
    ...mapActions(["login"]),
    formSubmit() {
      this.login({
        email: this.form.email,
        password: this.form.password
      });
    }
  },
  watch: {
    currentUser(val) {
      if (val && val.id) {
        setTimeout(() => {
          this.$router.push("/painel");
        }, 200);
      }
    }
  }
};
</script>

<style>
.app {
  min-height: 100vh;
}
.form-side {
  width: 100%;
  padding: 40px;
}
</style>