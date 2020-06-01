<template>
  <b-row>
    <register-modal ref="registe" @update="fetchBanks" />
    <delete-modal ref="delete" @update="fetchBanks" />
    <edit-modal ref="edit" @update="fetchBanks" />
    <b-col md="6">
      <h4 class="text-uppercase">Contas para pagamento</h4>
    </b-col>
    <b-col md="6" class="d-flex justify-content-end mb-2">
      <b-button variant="info" @click="$refs.registe.show()"
        ><b>CADASTRA</b>
      </b-button>
    </b-col>
    <b-col
      sm="6"
      lg="3"
      xl="3"
      class="mb-3"
      v-for="(item, idx) in payment"
      :key="`idx-${idx}`"
    >
      <payment-card :data="item" @delete="remove" @edit="edit" />
    </b-col>
  </b-row>
</template>

<script>
import { Payment } from "../../../api";
import PaymentCard from "./listPaymentCard";
import RegisteModal from "./register";
import DeleteModal from "./delete";
import EditModal from "./edit";

export default {
  components: {
    "payment-card": PaymentCard,
    "register-modal": RegisteModal,
    "delete-modal": DeleteModal,
    "edit-modal": EditModal
  },
  data() {
    return {
      payment: [],
      isLoad: false
    };
  },
  methods: {
    async fetchBanks() {
      this.isLoad = true;
      await Payment.list().then(response => {
        this.payment = response.data;
        this.isLoad = false;
      });
    },
    remove(id) {
      this.$refs.delete.show(id);
    },
    edit(id) {
      this.$refs.edit.show(id);
    }
  },
  mounted() {
    this.fetchBanks();
  }
};
</script>

<style>
</style>