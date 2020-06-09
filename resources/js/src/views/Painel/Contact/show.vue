<template>
  <b-modal
    ref="registemodal"
    :size="modal.size"
    scrollable
    :title-html="`<h4><b>${modal.title}</b></h4>`"
    class="p-2"
  >
    <b-row v-if="modal.loading" class="d-flex justify-content-center">
      <b-spinner size="md" variant="primary" /> {{ modal.loadingTitle }}
    </b-row>
    <div v-if="!modal.loading && id != -1">
      <b-row class="d-flex justify-content-center">
        <b-col md="10" sm="6">
          <b>Titulo:</b>
          <p>{{ contact.type }}</p>
        </b-col>
        <b-col md="10" sm="6">
          <b>Rede social/contato:</b>
          <p>{{ contact.social }}</p>
        </b-col>
        <b-col md="10" sm="6">
          <b>URL da rede social/contato:</b>
          <p class="truncate">{{ contact.contact }}</p>
        </b-col>
        <b-col md="10" sm="6">
          <b>Mostra no rodapé:</b>
          <p>{{ contact.isFooter ? "Sim" : "Não" }}</p>
        </b-col>
      </b-row>
    </div>
    <template v-slot:modal-footer>
      <b-row class="d-flex justify-content-end">
        <b-col class="d-flex justify-content-end" sm="6">
          <b-button type="button" @click="close" squared class="mt-4 mr-2">
            <b>CANCELAR</b>
          </b-button>
        </b-col>
      </b-row>
    </template>
  </b-modal>
</template>

<script>
import { Contact } from "../../../api";
export default {
  data() {
    return {
      id: -1,
      contact: {
        type: "",
        social: "",
        isFooter: false,
        contact: ""
      },
      modal: {
        title: "Ver rede social/contato",
        loadingTitle: "",
        size: "lg",
        loading: true,
        operating: false,
        success: false
      }
    };
  },
  methods: {
    async fetchContact() {
      await Contact.show(this.id)
        .then(({ data }) => {
          this.contact = {
            social: this.formatContatcSlect(data.social),
            type: data.type,
            isFooter: data.isFooter,
            contact: data.contact
          };
          this.modal.loading = false;
        })
        .catch(erro => {
          this.$notify(
            "error",
            "Error!",
            "Não foi possivel obter a rede social/Contato",
            {
              duration: 3000,
              permanent: false
            }
          );
          this.modal.loading = false;
          this.close();
        });
    },
    show(id) {
      this.id = id;
      this.modal.loading = true;
      this.fetchContact(id);
      this.$refs.registemodal.show();
    },
    close() {
      this.$refs.registemodal.hide();
    },
    formatContatcSlect(value) {
      switch (value) {
        case "envelope":
          return "Email";
          break;
        case "facebook-square":
          return "Facebook";
          break;
        case "facebook-messenger":
          return "Facebook Messenger";
          break;
        case "instagram-square":
          return "Instagram";
          break;
        case "twitter-square":
          return "Twitter";
          break;
        case "phone":
          return "Telefone";
          break;
        case "youtube":
          return "Youtube";
          break;
        case "whatsapp":
          return "Whatsapp";
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style>
</style>