<template>
  <b-modal
    ref="registemodal"
    :size="modal.size"
    scrollable
    :title-html="`<h4><b>${modal.title}</b></h4>`"
    hide-footer
    class="p-2"
  >
    <b-form @submit.prevent="savePayment">
      <b-row class="mb-3">
        <b-col md="6">
          <b-form-group label="Banner">
            <b-form-file
              ref="banner"
              v-model="payment.image"
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
              :src="imgPreview"
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
            <v-select
              :searchable="false"
              :options="accontType"
              v-model="payment.type"
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
            <b>CADASTRAR</b>
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-modal>
</template>

<script>
import { Payment } from "../../../api";
export default {
  data() {
    return {
      modal: {
        title: "Cadastro de Conta para pagamento",
        loadingTitle: "",
        size: "lg",
        loading: true,
        operating: false,
        success: false
      },
      payment: {},
      accontType: ["Conta-corrente", "Conta poupança", "Conta de pagamento"],
      loading: false
    };
  },
  methods: {
    async savePayment() {
      this.loading = true;
      let data = new FormData();
      data.append("image", this.payment.image);
      data.append("bank", this.payment.bank);
      data.append("holder", this.payment.holder);
      data.append("agency", this.payment.agency);
      data.append("account", this.payment.account);
      data.append("type", this.payment.type);
      await Payment.store(data).then(response => {
        this.$emit("update");
        this.close();
        this.payment = {};
      });
      this.loading = false;
    },
    show() {
      this.$refs.registemodal.show();
    },
    close() {
      this.payment = {};
      this.$refs.registemodal.hide();
    }
  },
  computed: {
    imgPreview() {
      if (this.payment.image) {
        return URL.createObjectURL(this.payment.image);
      }
      return null;
    }
  }
};
</script>

<style>
</style>