<template>
  <b-modal
    ref="modal"
    :size="modal.size"
    scrollable
    :title-html="`<h4><b>${modal.title}</b></h4>`"
    hide-footer
  >
    <b-row v-if="modal.loading" class="d-flex justify-content-center">
      <b-spinner size="md" variant="primary" /> {{ modal.loadingTitle }}
    </b-row>
    <div v-if="!modal.loading && id != -1">
      <b-form @submit.prevent="savePayment">
        <b-row class="mb-3">
          <b-col md="6">
            <b-form-group label="Banner">
              <b-form-file
                ref="banner"
                v-model="file"
                placeholder="Escolha um arquivo"
                drop-placeholder="solte-o aqui..."
                type="file"
              />
            </b-form-group>
          </b-col>
          <b-col sm="6" v-if="payment.image != null">
            <div>
              <span>Previsão do Banner:</span>
              <img
                style="width: 100%; height: 20%;"
                :src="imgPreview || payment.image"
                alt="Previsão"
              />
            </div>
          </b-col>
          <b-col md="12">
            <b-form-group label="Nome do Banco">
              <b-input type="text" v-model="payment.bank" required />
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group label="Nome do Titular">
              <b-input type="text" v-model="payment.holder" required />
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group label="Numero da Agência">
              <b-input type="number" v-model="payment.agency" />
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group label="Numero da Conta">
              <b-input type="number" v-model="payment.account" />
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group label="Tipo da Conta">
              <v-select :options="accontType" v-model="payment.type" />
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
              <b v-else>SALVAR</b>
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </div>
  </b-modal>
</template>

<script>
import { Payment } from "../../../api";
export default {
  data() {
    return {
      payment: {
        image: "",
        bank: "",
        holder: "",
        agency: "",
        account: "",
        type: ""
      },
      accontType: ["Conta-corrente", "Conta poupança", "Conta de pagamento"],
      modal: {
        title: "Cadastro de Conta para pagamento",
        loadingTitle: "",
        size: "lg",
        loading: true,
        operating: false,
        success: false
      },
      id: -1,
      file: null
    };
  },
  methods: {
    async fetchPayment(id) {
      //this.modal.operating = false;
      await Payment.show(id).then(response => {
        const payment = response.data;
        Object.assign(this.payment, {
          image: payment.url_image,
          bank: payment.bank,
          holder: payment.holder,
          agency: payment.agency,
          account: payment.account,
          type: payment.type
        });
        this.modal.loading = false;
      });
    },
    async savePayment() {
      this.modal.operating = true;
      let data = new FormData();
      if (typeof this.payment.image != "string")
        data.append("image", this.file);
      data.append("bank", this.payment.bank);
      data.append("holder", this.payment.holder);
      data.append("agency", this.payment.agency);
      data.append("account", this.payment.account);
      data.append("type", this.payment.type);
      data.append("_method", "PUT");
      await Payment.edit(this.id, data).then(response => {
        this.modal.operating = false;
        this.$emit("update");
        this.payment = {};
        this.close();
      });
    },
    show(id) {
      this.id = id;
      this.fetchPayment(id);
      this.$refs.modal.show();
    },
    close() {
      this.payment = {};
      this.$refs.modal.hide();
    }
  },
  computed: {
    imgPreview() {
      if (this.file) {
        return URL.createObjectURL(this.file);
      }
      return null;
    }
  }
};
</script>

<style>
</style>