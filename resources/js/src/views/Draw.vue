<template>
  <div class="container mt-4">
      <b-row>
          <b-col md="6">
            <vue-glide :options="options">
              <vue-glide-slide>
                  <b-img src="https://picsum.photos/536/354/?image=41" fluid alt="Fluid image"></b-img>
              </vue-glide-slide>
              <vue-glide-slide>
                  <b-img src="https://picsum.photos/536/354/?image=42" fluid alt="Fluid image"></b-img>
              </vue-glide-slide>
              <vue-glide-slide>
                  <b-img src="https://picsum.photos/536/354/?image=43" fluid alt="Fluid image"></b-img>
              </vue-glide-slide>
              <vue-glide-slide>
                  <b-img src="https://picsum.photos/536/354/?image=44" fluid alt="Fluid image"></b-img>
              </vue-glide-slide>
            </vue-glide>
          </b-col>
          <b-col md="6">
            <h4 class="text-white">Titulo do sorteio</h4>
            <div class="separator"></div>
            <div class="description text-white mt-2">
              <b>Descriptiom</b>
              <br>
              <br>
              <span>iopefjoepjfoerjijp</span>
            </div>
            <div class="mt-2">
              <span class="text-white-50">
                <font-awesome-icon :icon="['fa', 'calendar-alt']" />
                Sorteio:
               </span>
              <span class="text-secondary">Data e horario não informado</span>
            </div>
          </b-col>
      </b-row>
      <div class="separator mb-5"></div>
      <b-row>
        <b-col md="12">
        <vue-perfect-scrollbar class="scroll m-4" :settings="{ suppressScrollX: true, wheelPropagation: false }">
          <div class="float-left"  v-for="(item, index) in 999" :key="`id-${index}`" >
            <b-button pill variant="success">{{("0000" + item).slice(-4)}}</b-button>
          </div>
        </vue-perfect-scrollbar>
        </b-col>
        <b-col md="12">
          <b-button block variant="info">Reserva</b-button>
        </b-col>
      </b-row>
      <h4 class="text-uppercase text-white mt-5">Forma de pagamento</h4>
        <div class="separator mb-5 "></div>
        <b-row class="mb-5">
          <b-col md="3" v-for="(item, index) in item " :key="`id -${index}`">
            <bank-card :data="item"/>
          </b-col>
        </b-row>
  </div>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";
import BankCard from '../components/bank-card';

export default {
  components: {
    "vue-glide": Glide,
    "vue-glide-slide": GlideSlide,
    "bank-card": BankCard
  },
  data() {
    return {
      options: {
        gap: 5,
        perView: 1,
        type: "carousel",
        autoplay: 3000,
        breakpoints: {
          600: {
            perView: 1
          }
        }
      },
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
.scroll {
  height: 500px;
}
</style>