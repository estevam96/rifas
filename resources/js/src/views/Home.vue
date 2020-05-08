<template>
  <div>
    <div>
      <b-carousel
        id="carousel"
        v-model="slide"
        fade
        indicators
        :interval="3000"
        background="#ababab"
        img-width="1024"
        img-height="480"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://www.rifasdovale.com.br/images/slider/rifasdovale_1588472510.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://www.rifasdovale.com.br/images/slider/rifasdovale_1588641071.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="container mt-1">
        <b-row>
          <b-col md="6">
            <router-link to="#" class="btn btn-block">
                <font-awesome-icon :icon="['fab', 'whatsapp']" size="2x" :style="{color: '#ffc107'}"/>
                <p style="color:#ffc107">
                    Envio de Comprovantes
                </p>
            </router-link>
          </b-col>
          <b-col md="6">
            <router-link to="#" class="btn btn-block" >
                <font-awesome-icon :icon="['fab', 'whatsapp']" size="2x" :style="{color: '#28a745'}"/>
                <p style="color: #28a745">Duvidas: Entre para o grupo</p>
            </router-link>
          </b-col>
        </b-row>
    </div>
    <div class="container mt-3">
      <h4>GANHADORES DOS ÚLTIMOS SORTEIOS REALIZADOS</h4>
        <b-col lg="12">
        <div class="ganhadores">
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
        </div>
      </b-col>
      <div class="mt-2 mb-2">
        <h4>PROXIMOS SORTEIOS</h4>
      </div>
      <b-row>
        <b-col md="4" v-for="(number, index) in 10" :key="`id-${index}`">
            <b-card
              :img-src="`https://picsum.photos/600/300/?image=2${number}`"
              title="Carro 0 km"
              img-alt="carro 0km"
              img-top
              border-variant="dark"
              text-variant="white"
              bg-variant="dark"
              title-tag="h4"
              style="max-width: 20rem;"
              class="mb-2"
            >
                <b-card-text>
                  Sorteio dia 07/05/2020
                </b-card-text>
                <router-link to="#" class="btn btn-success rounded-pill">
                    <b>COMPRA RIFA</b>
                    <font-awesome-icon :icon="['fas', 'check']"/>
                </router-link>
            </b-card>
        </b-col>
      </b-row>
  </div>
  <div class="bg-secondary pt-5 pb-3">
    <div class="container">
        <b-row>
            <b-col md="3">
              <h5 class="text-white mb-2">1º  ESCOLHA O SORTEIO</h5>
              <div class="text-white-50">
                  <p>Escolha o prêmio que gostaria de concorrer, verifique a descrição, regulamento do sorteio e fotos em caso de dúvidas entre em contato com o administrado</p>
              </div>
            </b-col>
            <b-col md="3">
              <h5 class="text-white mb-2">2º  SELECIONE SEUS NÚMEROS</h5>
              <div class="text-white-50">
                  <p>Você pode escolher quantos números desejar! Mais números, mais chances de ganhar</p>
              </div>
            </b-col>
            <b-col md="3">
              <h5 class="text-white mb-2">3º  FAÇA O PAGAMENTO</h5>
              <div class="text-white-50">
                  <p>Faça o pagamento em umas das contas exibidas. Envie o comprovante ao administrador via whatsapp.</p>
              </div>
            </b-col>
            <b-col md="3">
              <h5 class="text-white mb-2">4º  AGUARDE O SORTEIO</h5>
              <div class="text-white-50">
                  <p>Aguarde o sorteio pela Loteria Federal Cruze os dedos Você pode ser o próximo sorteado</p>
              </div>
            </b-col>
        </b-row>
    </div>
</div>
    </div>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";

export default {
  components: {
    "vue-glide": Glide,
    "vue-glide-slide": GlideSlide
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      options: {
        gap: 5,
        perView: 3,
        type: "carousel",
        autoplay: 3000,
        breakpoints: {
          600: {
            perView: 1
          },
          1400: {
            perView: 3
          }
        }
      }
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style>
.banner {
  background-repeat: round;
  height: 480px;
  width: 100%;
}
.num{
    color: white;
    font-size: x-large;
    font-weight: bold;
}
.number{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.instruction{
    height: 100px;
    display: flex;
    align-items: center;
}
.instruction p {
    text-align: justify;
    font-size: 15px;
}
h4 {
  color: #ffffff;
}
</style>