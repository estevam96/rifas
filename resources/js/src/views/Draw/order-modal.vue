<template>
  <b-modal
    ref="modalOrder"
    :size="modal.size"
    :title-html="`<h5>${modal.title}</h5>`"
    hide-footer
    class="p-2"
  >
    <b-row class="d-flex justify-content-center">
      <div v-for="(item, index) in tickets" :key="`idx-${index}`">
        <b-badge class="p-2 m-1" variant="success">{{
          ("0000" + item).slice(-4)
        }}</b-badge>
      </div>
    </b-row>
    <b-row>
      <b-col lg="12">
        <b>Valor: R$ {{ Number(price * tickets.length).toFixed(2) }}</b>
      </b-col>
    </b-row>
    <form @submit.prevent="saveOrder">
      <b-row>
        <b-col lg="12">
          <b-form-group label="Nome *">
            <b-input
              type="text"
              v-model.lazy="order.name"
              placeholder="Nome e sobrenome"
            />
          </b-form-group>
        </b-col>
        <b-col lg="12">
          <b-form-group label="Telefone *">
            <b-input
              type="text"
              v-model.lazy="order.phone"
              placeholder="(99) 99999-999"
            />
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
            <b>SALVA</b>
          </b-button>
        </b-col>
      </b-row>
    </form>
  </b-modal>
</template>

<script>
import { Order } from "../../api";
export default {
  props: ["tickets", "price"],
  data() {
    return {
      id: "",
      order: {
        name: "",
        phone: ""
      },
      modal: {
        title: "Concluir",
        loadingTitle: "",
        size: "lg",
        loading: true,
        operating: false,
        success: false
      }
    };
  },
  methods: {
    async saveOrder() {
      await Order.store({
        name: this.order.name,
        phone: this.order.phone,
        raffle_id: this.id,
        tickets: this.tickets
      }).then(response => {
        this.$emit("update");
        this.close();
      });
    },
    show(id) {
      this.id = id;
      this.$refs.modalOrder.show();
    },
    close() {
      this.order = {
        name: "",
        phone: ""
      };
      this.$refs.modalOrder.hide();
    }
  }
};
</script>

<style>
</style>