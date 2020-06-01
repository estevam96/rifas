<template>
  <div class="container mt-4">
    <h4 class="text-center mb-4">
      Veja como é fácil entra em contato contato conosco..
    </h4>
    <h6 class="text-center mb-5">
      Logo a baixo iremos disponibilizar alguns botões com links para os nossos
      contatos referente a cada sorteio é só clicar no botão.
    </h6>
    <b-col md="12" class="d-flex justify-content-center">
      <b-button class="mb-2" variant="success" squared>
        <b class="text-uppercase">
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
          Grupo no whatsapp
        </b>
      </b-button>
    </b-col>
    <div class="separator mb-2"></div>
    <b-col md="12" class="d-flex justify-content-center">
      <b-button class="btn-custom-color mb-2" squared>
        <b class="text-uppercase">
          <font-awesome-icon :icon="['fab', 'instagram']" />
          Nosso Instagram
        </b>
      </b-button>
    </b-col>
  </div>
</template>

<script>
export default {};
</script>

<style>
.btn-custom-color {
  background-color: #b618a8;
}
.btn-custom-color:hover {
  background-color: #7a297a;
}
</style>