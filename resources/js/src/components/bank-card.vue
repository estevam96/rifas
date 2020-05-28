<template>
  <b-row class="mb-5">
    <b-col
      md="3"
      v-for="(data, index) in payment"
      :key="`id -${index}`"
      class="d-flex justify-content-center"
    >
      <b-card
        :img-src="data.url_image"
        :img-alt="data.bank"
        img-top
        img-height="150px"
        img-width="300"
      >
        <div class="pl-2 d-flex flex-grow-1 min-width-zero">
          <b-card-body>
            <b-row>
              <b-col md="12">
                <h6 class="">{{ data.bank }}</h6>
                <p class="txt-bank">Titular: {{ data.holder }}</p>
                <p class="txt-bank">Agência: {{ data.agency }}</p>
                <p class="txt-bank">Conta: {{ data.account }}</p>
                <p class="txt-bank" v-if="data.type">Tipo: {{ data.type }}</p>
              </b-col>
            </b-row>
          </b-card-body>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { Payment } from "../api";
export default {
  data() {
    return {
      payment: []
    };
  },
  methods: {
    async fetchBanks() {
      await Payment.list().then(response => {
        this.payment = response.data;
      });
    }
  },
  mounted() {
    this.fetchBanks();
  }
};
</script>

<style>
.bank-description p {
  font-size: 14px;
  line-height: 1;
}
</style>