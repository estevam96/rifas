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
          <b-form-group label="Status">
            <v-select
              :options="statusOptions"
              v-model="order.status"
              :reduce="
                status =>
                  status === 'Aguardando'
                    ? 'waiting'
                    : status === 'Pago'
                    ? 'paid out'
                    : 'canceled'
              "
            />
          </b-form-group>
        </b-col>
      </b-row>
    </div>
    <template v-slot:modal-footer>
      <b-row class="d-flex justify-content-end">
        <b-col class="d-flex justify-content-end" sm="6">
          <b-button type="button" @click="close" squared class="mt-4 mr-2">
            <b>CANCELAR</b>
          </b-button>
          <b-button
            @click="saveOrder()"
            variant="primary"
            squared
            class="mt-4"
            :class="{ 'show-success': !modal.operating && modal.success }"
          >
            <b-spinner variant="light" small v-if="modal.operating" />
            <b v-else>SALVAR</b>
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
      order: {
        status: ""
      },
      modal: {
        title: "Confirma Pagamento",
        loadingTitle: "",
        size: "sm",
        loading: true,
        operating: false,
        success: false
      },
      statusOptions: ["Pago", "Aguardando", "Cancelar"]
    };
  },
  methods: {
    async featOrder() {
      await Order.show(this.id).then(res => {
        this.order = res.data;
        this.modal.loading = false;
      });
    },
    async saveOrder() {
      this.modal.operating = true;
      await Order.update(this.id, { status: this.order.status }).then(res => {
        this.$emit("update");
        this.modal.operating = false;
        this.close();
      });
    },
    show(id) {
      this.id = id;
      this.featOrder(id);
      this.$refs.modalOrder.show();
    },
    close() {
      this.order = {
        status: ""
      };
      this.$refs.modalOrder.hide();
    }
  }
};
</script>

<style>
</style>