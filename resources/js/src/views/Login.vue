<template>
  <div
    class="app container h-100  d-flex justify-content-center align-item-center"
  >
    <b-col xs="4" md="6" class="mx-auto my-auto">
      <b-card border-variant="secondary" no-body>
        <div class="form-side">
          <b-form @submit.prevent="formSubmit" title="Login">
           <!--  <input type="hidden" name="_token" :value="csrf" /> -->
            <b-alert
              variant="danger"
              dismissible
              fade
              :show="showAlert"
              @dismissed="showAlert = false"
            >
              {{ loginError }}
            </b-alert>
            <b-form-group label="E-mail">
              <b-form-input
                type="email"
                name="form.email"
                autocomplete="email"
                placeholder="Digite a sue email"
                v-model="$v.form.email.$model"
                :state="$v.form.email.$error ? false : null"
              />
              <b-form-invalid-feedback v-if="!$v.form.email.required">
                Você deve informar o seu email
              </b-form-invalid-feedback>
              <b-form-invalid-feedback v-if="!$v.form.email.email">
                Você deve informar um email válido
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label="Senha">
              <b-form-input
                type="password"
                name="form.password"
                autocomplete="current-password"
                placeholder="Digite a sua senha"
                v-model="$v.form.password.$model"
                :state="$v.form.password.$error ? false : null"
              />
              <b-form-invalid-feedback v-if="!$v.form.password.required">
                Você deve informar a sua senha
              </b-form-invalid-feedback>
            </b-form-group>
            <b-button type="submit">
              <div class="d-flex flex-row" v-if="processing">
                <b-spinner small label="Small Spinner" type="grow" />
                <b-spinner small label="Small Spinner" type="grow" />
              </div>
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
import { validationMixin } from "vuelidate";
const { required, email } = require("vuelidate/lib/validators");
export default {
  data() {
    return {
/*       crfs: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content"), */
      showAlert: false,
      loading: false,
      form: {
        email: "",
        password: ""
      }
    };
  },
  mixins: [validationMixin],
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  computed: {
    ...mapGetters(["currentUser", "processing", "loginError"])
  },
  methods: {
    ...mapActions(["login"]),
    formSubmit() {
      this.$v.$touch();
      if (!this.$v.$error) {
        this.login({
          email: this.form.email,
          password: this.form.password
        });
      }
    }
  },
  watch: {
    currentUser(val) {
      if (val && val.id) {
        setTimeout(() => {
          this.$router.push("/painel");
        }, 200);
      }
    },
    loginError(val) {
      if (val != null) {
        this.$notify("error", "Login Inválido", val, {
          duration: 3000,
          permanent: false
        });
        this.showAlert = true;
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