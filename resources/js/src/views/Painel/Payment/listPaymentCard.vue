<template>
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
    <template v-slot:footer>
      <div class="d-flex justify-content-around">
        <b-button variant="info">Editar</b-button
        ><b-button variant="danger" @click="$emit('delete',data.id)">Excluir</b-button>
      </div>
    </template>
  </b-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.txt-bank {
  font-size: 14px;
}
</style>