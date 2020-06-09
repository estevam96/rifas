<template>
  <div class="container mt-4">
    <h4 class="text-center mb-4">
      Veja como é fácil entra em contato contato conosco..
    </h4>
    <h6 class="text-center mb-5">
      Logo a baixo iremos disponibilizar alguns botões com links para os nossos
      contatos referente a cada sorteio é só clicar no botão.
    </h6>

    <b-row>
      <b-col
        md="4"
        class="d-flex justify-content-center "
        v-for="(item, index) in contact"
        :key="`key-${index}`"
      >
        <b-card
          class="d-flex justify-content-center align-items-center m-2"
          v-if="item.type !== 'email-rodape' && item.type !== 'telefone-rodape'"
        >
          <b-link
            class="text-decoration-none"
            :href="
              `${item.social === 'envelope' ? 'mailto:' : ''}${item.contact}`
            "
          >
            <font-awesome-icon
              class="text-body"
              :icon="[
                `${
                  item.social === 'envelope' || item.social === 'phone'
                    ? 'fa'
                    : 'fab'
                }`,
                item.social
              ]"
              size="2x"
            />
            <b class="ml-2 text-body text-uppercase">{{ item.type }}</b>
          </b-link>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Contact } from "../api";
export default {
  data() {
    return {
      contact: []
    };
  },
  methods: {
    async fetchContact() {
      await Contact.list().then(({ data }) => {
        this.contact = data;
      });
    }
  },
  mounted() {
    this.fetchContact();
  }
};
</script>

<style>
.btn-custom-color {
  background-color: #b618a8;
}
.btn-custom-color:hover {
  background-color: #7a297a;
}
</style>