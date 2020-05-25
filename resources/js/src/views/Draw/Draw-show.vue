<template>
  <div>
    <div class="container mt-4">
      <modal-order
        ref="ordermodal"
        :tickets="tickets"
        :price="raffle.price"
        @update="forceRerender"
      />
      <b-row>
        <b-col md="6">
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
        </b-col>
        <b-col md="6">
          <h4 class="">{{ raffle.title }}</h4>
          <div class="separator"></div>
          <div class="description  mt-2">
            <p v-html="raffle.description"></p>
          </div>
          <div class="mt-2">
            <span class="">
              <font-awesome-icon :icon="['fa', 'calendar-alt']" />
              Sorteio:
            </span>
            <span class="text-secondary">{{
              raffle["draw_day"] | moment("DD/MM/YYYY")
            }}</span>
          </div>
        </b-col>
      </b-row>
      <div class="separator mb-5"></div>
      <b-row>
        <b-col md="12">
          <vue-perfect-scrollbar
            ref="scroll"
            class="scroll m-4"
            :settings="{ suppressScrollX: true, wheelPropagation: false }"
          >
            <div
              class="d-flex justify-content-center align-items-center"
              v-if="ticketsButtons.length === 0"
            >
              <b-spinner type="grow" label="Spinning"></b-spinner
              ><b-spinner type="grow" label="Spinning"></b-spinner>
              <b-spinner type="grow" label="Spinning"></b-spinner>
            </div>
            <div :key="keytickets">
              <div
                class="float-left"
                v-for="(item, index) in ticketsButtons"
                :key="`id-${index}`"
              >
                <span :id="`tooltip-${index}`">
                  <b-button
                    pill
                    :disabled="item.order !== null"
                    :variant="
                      item.type === 'reserved'
                        ? 'warning'
                        : item.type === 'paid out'
                        ? 'success'
                        : 'dark'
                    "
                    @click="reservationTicket(item.ticket)"
                  >
                    {{ ("0000" + item.ticket).slice(-4) }}
                  </b-button>
                </span>
                <b-tooltip
                  v-if="item.order"
                  :target="`tooltip-${index}`"
                  triggers="hover"
                >
                  Numero: {{ ("0000" + item.ticket).slice(-4) }}
                  {{ item.type === "reserved" ? "reservado" : "pago" }} por:
                  {{ item.order.name }}
                </b-tooltip>
              </div>
            </div>
          </vue-perfect-scrollbar>
        </b-col>
        <b-col md="12">
          <b-button v-if="tickets.length > 0" @click="show" block variant="info"
            >Reserva</b-button
          >
        </b-col>
      </b-row>
      <h4 class="text-uppercase text-white mt-5">Forma de pagamento</h4>
      <div class="separator mb-5 "></div>
      <b-row class="mb-5">
        <b-col md="3" v-for="(item, index) in item" :key="`id -${index}`">
          <bank-card :data="item" />
        </b-col>
      </b-row>
    </div>
    <instruction />
  </div>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";
import BankCard from "../../components/bank-card";
import OrderModal from "./order-modal";
import Instruction from "../../containers/Introduction";

import { Ticket, Order, Raffle } from "../../api";
export default {
  components: {
    "vue-glide": Glide,
    "vue-glide-slide": GlideSlide,
    "bank-card": BankCard,
    instruction: Instruction,
    "modal-order": OrderModal
  },
  data() {
    return {
      raffle: {},
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
      keytickets: 0,
      item: [
        {
          image: "https://www.oficinadanet.com.br/imagens/post/22453/bb01.jpg",
          bank: "Nubank",
          holder: "Nome Do titular",
          agency: "123",
          account: "123459-9",
          type: " Conta Corrente"
        },
        {
          image: "https://www.oficinadanet.com.br/imagens/post/22453/bb01.jpg",
          bank: "Nubank",
          holder: "Nome Do titular",
          agency: "123",
          account: "123459-9",
          type: " Conta Corrente"
        },
        {
          image: "https://www.oficinadanet.com.br/imagens/post/22453/bb01.jpg",
          bank: "Nubank",
          holder: "Nome Do titular",
          agency: "123",
          account: "123459-9",
          type: " Conta Corrente"
        },
        {
          image: "https://www.oficinadanet.com.br/imagens/post/22453/bb01.jpg",
          bank: "Nubank",
          holder: "Nome Do titular",
          agency: "123",
          account: "123459-9",
          type: " Conta Corrente"
        }
      ],
      ticketsButtons: [],
      tickets: []
    };
  },
  methods: {
    async fetchRaffle() {
      await Raffle.show(this.$route.params.id).then(response => {
        this.raffle = response.data;
      });
    },
    async generateButtons() {
      this.ticketsButtons = [];
      await Ticket.ReserveTickets(this.$route.params.id).then(response => {
        for (let index = 0; index <= this.raffle.tickets; index++) {
          let el = response.data.find(num => num.ticket === index);
          this.ticketsButtons.push({
            ticket: el ? el.ticket : index,
            type: el ? el.status : "avaliable",
            order: el ? el.order : null
          });
        }
      });
    },
    show() {
      this.$refs.ordermodal.show(this.$route.params.id);
    },
    reservationTicket(ticket) {
      let el = this.tickets.find(isPresent => {
        return isPresent === ticket;
      });
      if (!el) {
        this.tickets.push(ticket);
        this.tickets = this.sortTickets(this.tickets);
        this.ticketsButtons[ticket].type = "reserved";
      } else {
        let index = this.tickets.indexOf(ticket);
        this.tickets.splice(index, 1);
        this.ticketsButtons[ticket].type = "avaliable";
      }
    },
    sortTickets(tickets) {
      return this.tickets.sort((a, b) => {
        return a - b;
      });
    },
    async forceRerender() {
      await this.generateButtons();
      this.tickets = [];
      this.keytickets += 1;
    }
  },
  mounted() {
    this.fetchRaffle();
    this.generateButtons();
  }
};
</script>

<style>
.separator {
  border-bottom: 1px solid #808080;
}
.scroll {
  height: 500px;
}
</style>