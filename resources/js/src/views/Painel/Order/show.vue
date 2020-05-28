<template>
  <b-modal
    ref="modalOrder"
    :size="modal.size"
    :title-html="`<h5>${modal.title}</h5>`"
    class="p-2"
  >
    <b-row v-if="modal.loading" class="d-flex justify-content-center">
      <b-spinner size="md" variant="primary" /> {{ modal.loadingTitle }}
    </b-row>
    <div v-if="!modal.loading && id != -1">
      <b-row class="d-flex justify-content-center">
        <div v-for="(item, index) in order.tickets" :key="`idx-${index}`">
          <b-badge class="p-2 m-1" variant="success">{{
            ("0000" + item.ticket).slice(-4)
          }}</b-badge>
        </div>
        <b-col md="10" sm="6">
          <b>Cliente:</b>
          <p>{{ order.name }}</p>
        </b-col>
        <b-col md="10" sm="6">
          <b>Telefone:</b>
          <p>{{ order.phone }}</p>
        </b-col>
        <b-col md="10" sm="6">
          <b>Total:</b>
          <p>{{ Number(order.value_total).toFixed(2) }}</p>
        </b-col>
        <b-col md="10" sm="6">
          <b>Status:</b>
          <p>
            {{
              order.status === "waiting"
                ? "Aguardando"
                : order.status === "paid out"
                ? "Pago"
                : "Cancelado"
            }}
          </p>
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
import { Order } from "../../../api";
export default {
  data() {
    return {
      id: -1,
      order: {},
      modal: {
        title: "Confirma Pagamento",
        loadingTitle: "",
        size: "sm",
        loading: true,
        operating: false,
        success: false
      }
    };
  },
  methods: {
    async featOrder() {
      await Order.show(this.id).then(res => {
        this.order = res.data;
        this.modal.loading = false;
      });
    },
    show(id) {
      this.id = id;
      this.featOrder(id);
      this.$refs.modalOrder.show();
    },
    close() {
      this.order = {};
      this.$refs.modalOrder.hide();
    }
  }
};
</script>

<style>
</style>