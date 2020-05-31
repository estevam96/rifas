<template>
  <div>
    <div>
      <hooper :infiniteScroll="true" class="customCarousel" :mouseDrag="false">
        <slide
          v-for="(slide, indx) in recentRaffles"
          :key="`id-${indx}`"
          :index="indx"
        >
          <div
            class="bannerBackground"
            :style="`background-image: url(${slide.url_banner})`"
          >
            <div class="banner container ">
              <b-row class="h-100 d-flex align-items-center">
                <b-col cols="6">
                  <h3 class="text-white text-uppercase" style="font-size: 5vw">
                    {{ slide.title }}
                  </h3>
                  <b-button
                    variant="outline-light"
                    :to="`/draw/show/${slide.id}`"
                  >
                    <b class="text-uppercase">
                      compra rifa
                    </b>
                  </b-button>
                </b-col>
              </b-row>
            </div>
          </div>
        </slide>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </div>
    <div class="container mt-1">
      <b-row>
        <b-col md="6">
          <router-link to="#" class="btn btn-block">
            <font-awesome-icon
              :icon="['fab', 'whatsapp']"
              size="2x"
              :style="{ color: '#ffc107' }"
            />
            <p style="color:#ffc107">
              Envio de Comprovantes
            </p>
          </router-link>
        </b-col>
        <b-col md="6">
          <router-link to="#" class="btn btn-block">
            <font-awesome-icon
              :icon="['fab', 'whatsapp']"
              size="2x"
              :style="{ color: '#28a745' }"
            />
            <p style="color: #28a745">Duvidas: Entre para o grupo</p>
          </router-link>
        </b-col>
      </b-row>
    </div>
    <div class="container content-raffle mt-3">
      <!--  <h4>GANHADORES DOS ÚLTIMOS SORTEIOS REALIZADOS</h4>
      <b-col lg="12">
        <div class="ganhadores">
          <vue-glide :options="options">
            <vue-glide-slide>
              <b-img
                src="https://picsum.photos/536/354/?image=41"
                fluid
                alt="Fluid image"
              ></b-img>
            </vue-glide-slide>
            <vue-glide-slide>
              <b-img
                src="https://picsum.photos/536/354/?image=42"
                fluid
                alt="Fluid image"
              ></b-img>
            </vue-glide-slide>
            <vue-glide-slide>
              <b-img
                src="https://picsum.photos/536/354/?image=43"
                fluid
                alt="Fluid image"
              ></b-img>
            </vue-glide-slide>
            <vue-glide-slide>
              <b-img
                src="https://picsum.photos/536/354/?image=44"
                fluid
                alt="Fluid image"
              ></b-img>
            </vue-glide-slide>
          </vue-glide>
        </div>
      </b-col> -->
      <div class="mt-4 mb-2" v-if="lastRaffles.length > 0">
        <h4>PROXIMOS SORTEIOS</h4>
      </div>
      <b-row v-if="lastRaffles.length > 0">
        <b-col
          md="4"
          v-for="(raffle, index) in lastRaffles"
          :key="`id-${index}`"
          class="d-flex justify-content-center"
        >
          <b-card
            :img-src="raffle.url_banner"
            :title="raffle.title"
            :img-alt="raffle.title"
            img-top
            border-variant="secondary"
            title-tag="h4"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Sorteio {{ raffle.draw_day | moment("dddd, D MMMM  YYYY") }}
            </b-card-text>
            <router-link
              :to="`/draw/show/${raffle.id}`"
              class="btn btn-success btn-block rounded-pill"
            >
              <b>COMPRA RIFA</b>
              <font-awesome-icon :icon="['fas', 'check']" />
            </router-link>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <instruction />
  </div>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";

import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from "hooper";
import "hooper/dist/hooper.css";

import Instruction from "../containers/Introduction";
import { Raffle } from "../api";

export default {
  components: {
    "vue-glide": Glide,
    "vue-glide-slide": GlideSlide,
    instruction: Instruction,
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation
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
      },
      lastRaffles: [],
      recentRaffles: []
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    async fetchLastRaffle() {
      await Raffle.last().then(res => {
        this.lastRaffles = res.data;
      });
    },
    async fetchRecentRaffle() {
      await Raffle.recent().then(res => {
        this.recentRaffles = res.data;
      });
    }
  },
  mounted() {
    this.fetchRecentRaffle();
    this.fetchLastRaffle();
  }
};
</script>

<style>
.content-raffle {
  min-height: 40vh;
}
.customCarousel {
  height: auto;
}
.bannerBackground {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.banner {
  height: 60vh;
}
@media only screen and (max-width: 600px) {
  .banner {
    height: 23vh;
  }
}
.num {
  color: white;
  font-size: x-large;
  font-weight: bold;
}
.number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.instruction {
  height: 100px;
  display: flex;
  align-items: center;
}
.instruction p {
  text-align: justify;
  font-size: 15px;
}
</style>