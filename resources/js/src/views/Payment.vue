<template>
  <div class="container mt-4">
    <h3 class="text-uppercase text-white mb-4">Dados para pagamento via transferência</h3>
    <h5 class="text-white text-center">* Para realizar seu pagamento você deve efetivar transferência para uma de nossas contas.</h5>
    <div class="separator mb-5"></div>
    <b-row class="mb-5">
      <b-col md="3" v-for="(item, index) in item " :key="`id -${index}`">
        <bank-card :data="item"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BankCard from '../components/bank-card';
export default {
  components:{
    "bank-card": BankCard
  },
  data() {
    return {
       item: [
        {
          image: 'https://www.oficinadanet.com.br/imagens/post/22453/bb01.jpg',
          bank: "Nubank",
          holder: "Nome Do titular",
          agency: "123",
          account: "123459-9",
          type: " Conta Corrente"
        },
        {
          image: 'https://www.oficinadanet.com.br/imagens/post/22453/bb01.jpg',
          bank: "Nubank",
          holder: "Nome Do titular",
          agency: "123",
          account: "123459-9",
          type: " Conta Corrente"
        },
        {
          image: 'https://www.oficinadanet.com.br/imagens/post/22453/bb01.jpg',
          bank: "Nubank",
          holder: "Nome Do titular",
          agency: "123",
          account: "123459-9",
          type: " Conta Corrente"
        },
        {
          image: 'https://www.oficinadanet.com.br/imagens/post/22453/bb01.jpg',
          bank: "Nubank",
          holder: "Nome Do titular",
          agency: "123",
          account: "123459-9",
          type: " Conta Corrente"
        }
      ]
    }
  },
}
</script>

<style>
.separator{
  border-bottom: 1px solid #fff;
}
</style>