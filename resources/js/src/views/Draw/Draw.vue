<template>
  <div class="container mt-5">
    <b-row>
      <b-col md="4" v-for="(number, index) in 15" :key="`id-${index}`">
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
          <router-link v-if="index < 5" :to="`/draw/show/${index}`" class="btn btn-success btn-block rounded-pill">
            <b class="text-uppercase">COMPRA RIFA</b>
            <font-awesome-icon :icon="['fas', 'check']"/>
          </router-link>
          <router-link v-else :to="`/draw/show/${index}`" class="btn btn-danger btn-block rounded-pill">
            <b class="text-uppercase">ver resultado</b>
            <font-awesome-icon :icon="['fas', 'check']"/>
          </router-link>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>