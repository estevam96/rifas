<template>
  <b-modal
    ref="registemodal"
    :size="modal.size"
    scrollable
    :title-html="`<h4><b>${modal.title}</b></h4>`"
    hide-footer
    class="p-2"
  >
    <b-form @submit.prevent="saveContact">
      <b-row>
        <b-col sm="12">
          <b-form-group label="Nome para a rede social/contato">
            <b-input
              type="text"
              size="sm"
              name="contact.type"
              placeholder="Nome para a rede social/contato"
              v-model="$v.contact.type.$model"
              :state="$v.contact.type.$error ? false : null"
            />
            <b-form-invalid-feedback v-if="!$v.contact.type.required">
              Você deve informa um nome para a rede social/contato
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col sm="12">
          <b-form-group label="Rede social/contato">
            <v-select
              :searchable="false"
              :options="contactType"
              v-model="$v.contact.social.$model"
            >
              <template #search="{attributes, events}">
                <b-input
                  class="vs__search"
                  required
                  v-bind="attributes"
                  v-on="events"
                  :state="$v.contact.social.$error ? false : null"
                />
              </template>
            </v-select>
            <b-form-invalid-feedback v-if="!$v.contact.social.required">
              Você deve informa a rede social/contato
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col sm="12">
          <b-form-group label="URL da rede social/contato">
            <b-input
              type="text"
              size="sm"
              name="contact.contact"
              placeholder="URL da rede social/contato"
              v-model="$v.contact.contact.$model"
              :state="$v.contact.contact.$error ? false : null"
            />
            <b-form-invalid-feedback v-if="!$v.contact.contact.required">
              Você deve informa a url da rede social/contato
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col sm="12">
          <b-form-group label="Rede social/contato deve aparecer no rodapé">
            <b-form-checkbox v-model="contact.isFooter" name="contact.isFooter"
              >Visível no rodapé</b-form-checkbox
            >
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-end">
        <b-col class="d-flex justify-content-end" sm="6">
          <b-button type="button" @click="close" squared class="mt-4 mr-2">
            <b>CANCELAR</b>
          </b-button>
          <b-button
            type="submit"
            variant="primary"
            squared
            class="mt-4"
            :class="{ 'show-success': !modal.operating && modal.success }"
          >
            <b-spinner variant="light" small v-if="modal.operating" />
            <b v-else>CADASTRAR</b>
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-modal>
</template>

<script>
import { validationMixin } from "vuelidate";
import { Contact } from "../../../api";
const { required } = require("vuelidate/lib/validators");
export default {
  components: {},
  data() {
    return {
      contact: {
        type: "",
        social: "",
        isFooter: false,
        contact: ""
      },
      modal: {
        title: "Cadastro de rede social/contato",
        loadingTitle: "",
        size: "lg",
        loading: true,
        operating: false,
        success: false
      },
      contactType: [
        "Email",
        "Facebook",
        "Facebook Messenger",
        "Instagram",
        "Twitter",
        "Telefone",
        "Youtube",
        "Whatsapp"
      ]
    };
  },
  mixins: [validationMixin],
  validations: {
    contact: {
      type: {
        required
      },
      social: {
        required
      },
      contact: {
        required
      }
    }
  },
  methods: {
    async saveContact() {
      this.$v.$touch();
      if (!this.$v.$error) {
        this.modal.operating = true;
        await Contact.store({
          social: this.formatContatc(this.contact.social),
          type: this.contact.type,
          isFooter: this.contact.isFooter,
          contact: this.contact.contact
        })
          .then(res => {
            this.modal.operating = false;
            this.$notify(
              "success",
              "Sucesso!",
              `Rede Social/Contato cadastrado`,
              {
                duration: 3000,
                permanent: false
              }
            );
          })
          .catch(erro => {
            this.$notify(
              "error",
              "Error!",
              "Não foi possivel cadastra a rede social/Contato",
              {
                duration: 3000,
                permanent: false
              }
            );
            this.modal.operating = false;
          });
        this.$emit("update");
        this.close();
      }
    },
    formatContatc(value) {
      switch (value) {
        case "Email":
          return "envelope";
          break;
        case "Facebook":
          return "facebook-square";
          break;
        case "Facebook Messenger":
          return "facebook-messenger";
          break;
        case "Instagram":
          return "instagram-square";
          break;
        case "Twitter":
          return "twitter-square";
          break;
        case "Telefone":
          return "phone";
          break;
        case "Youtube":
          return "youtube";
          break;
        case "Whatsapp":
          return "whatsapp";
          break;
        default:
          break;
      }
    },
    show() {
      this.$refs.registemodal.show();
    },
    close() {
      this.contact = {
        type: "",
        social: "",
        isFooter: false,
        contact: ""
      };
      this.$v.$reset();
      this.$refs.registemodal.hide();
    }
  }
};
</script>

<style>
</style>