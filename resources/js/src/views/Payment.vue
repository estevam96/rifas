<template>
  <div class="container mt-4">
    <h3 class="text-uppercase mb-4">
      Dados para pagamento via transferência
    </h3>
    <h5 class="text-center">
      * Para realizar seu pagamento você deve efetivar transferência para uma de
      nossas contas.
    </h5>
    <div class="separator mb-5"></div>
    <bank-card />
  </div>
</template>

<script>
import BankCard from "../components/bank-card";
export default {
  components: {
    "bank-card": BankCard
  },
  data() {
    return {};
  }
};
</script>

<style>
.separator {
  border-bottom: 1px solid #696479;
}
</style>