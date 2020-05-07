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
h4 {
  color: #ffffff;
}
</style>