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
import { Payment } from "../../../api";
export default {
  data() {
    return {
      modal: {
        title: "Apagar forma de pagamento",
        loadingTitle: "",
        size: "md",
        loading: false,
        operating: false,
        success: false
      },
      id: 0
    };
  },
  methods: {
    async remove() {
      this.modal.operating = true;
      await Payment.delete(this.id).then(response => {
        this.modal.operating = false;
        this.$emit("update");
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