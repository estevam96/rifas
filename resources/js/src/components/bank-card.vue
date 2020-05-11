<template>
      <b-card bg-variant="dark" class="mb-1" :img-src="data.image" :img-alt="data.id" img-top>
        <div class="bank-description">
          <h6 class="text-white">{{data.bank}}</h6>
          <p class="text-white">Titular: {{data.holder}}</p>
          <p class="text-white">Agência: {{data.agency}}</p>
          <p class="text-white">Conta: {{data.account}}</p>
          <p class="text-white">Tipo: {{data.type}}</p>
        </div>
      </b-card>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style>
.bank-description p {
  font-size: 14px ;
  line-height: 1;
}
</style>