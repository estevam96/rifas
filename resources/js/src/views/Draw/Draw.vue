<template>
  <div class="container mt-5">
    <b-row>
      <b-col
        md="4"
        v-for="(raffle, index) in raffles"
        :key="`id-${index}`"
        class="d-flex justify-content-center"
      >
        <b-card
          :img-src="raffle.url_banner"
          title="Carro 0 km"
          img-alt="carro 0km"
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
            v-if="raffle.status === null"
            :to="`/draw/show/${raffle.id}`"
            class="btn btn-success btn-block rounded-pill"
          >
            <b class="text-uppercase">COMPRAR RIFA</b>
            <font-awesome-icon :icon="['fas', 'check']" />
          </router-link>
          <router-link
            v-else
            :to="`/draw/show/${raffle.id}`"
            class="btn btn-danger btn-block rounded-pill"
          >
            <b class="text-uppercase">ver resultado</b>
            <font-awesome-icon :icon="['fas', 'check']" />
          </router-link>
        </b-card>
      </b-col>

      <b-col xl="12" class="d-flex justify-content-center align-items-center">
        <b-pagination
          v-model="page"
          :total-rows="total"
          :per-page="perPage"
          align="center"
        >
        </b-pagination>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Raffle } from "../../api";
export default {
  data() {
    return {
      raffles: [],
      page: 1,
      perPage: 10,
      lastPage: 1,
      total: 0
    };
  },
  methods: {
    async fetchRaffle() {
      await Raffle.list(this.page, this.perPage).then(res => {
        this.raffles = res.data.data;
        this.page = res.data.current_page;
        this.perPage = res.data.per_page;
        this.lastPage = res.data.last_page;
        this.total = res.data.total;
      });
    }
  },
  mounted() {
    this.fetchRaffle();
  }
};
</script>

<style>
</style>