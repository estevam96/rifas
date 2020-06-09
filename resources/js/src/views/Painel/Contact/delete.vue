<template>
  <b-modal
    centered
    ref="modal"
    :size="modal.size"
    :title-html="`<h4><b>${modal.title}</b></h4>`"
    hide-footer
  >
    Você tem certeza disso?
    <b-row class="d-flex justify-content-end">
      <b-col class="d-flex justify-content-end">
        <b-button type="button" @click="close" squared class="mt-4 mr-2">
          <b>CANCELAR</b>
        </b-button>
        <b-button
          type="button"
          @click="remove"
          squared
          variant="primary"
          class="mt-4"
          :class="{ 'show-success': !modal.operating && modal.success }"
        >
          <b-spinner variant="light" small v-if="modal.operating" />
          <b v-else>APAGAR</b>
        </b-button>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
import { Contact } from "../../../api";
export default {
  data() {
    return {
      id: -1,
      modal: {
        title: "Apagar Rede Social/Contato",
        loadingTitle: "",
        size: "md",
        loading: false,
        operating: false,
        success: false
      }
    };
  },
  methods: {
    async remove() {
      this.modal.operating = true;
      await Contact.delete(this.id)
        .then(response => {
          this.$notify("success", "Sucesso!", `Rede Social/Contato excluída.`, {
            duration: 3000,
            permanent: false
          });
          this.modal.operating = false;
          this.$emit("update");
          this.close();
        })
        .catch(erro => {
          this.$notify(
            "error",
            "Error!",
            "Não foi possivel excluir a rede social/Contato",
            {
              duration: 3000,
              permanent: false
            }
          );
          this.modal.operating = false;
          this.close();
        });
    },
    show(id) {
      this.id = id;
      this.$refs.modal.show();
    },
    close() {
      this.$refs.modal.hide();
    }
  }
};
</script>

<style>
</style>