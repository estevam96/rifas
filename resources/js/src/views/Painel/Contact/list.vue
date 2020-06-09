<template>
  <b-row>
    <register-modal ref="register" @update="fetchContatct" />
    <edit-modal ref="edit" @update="fetchContatct" />
    <show-modal ref="show" @update="fetchContatct" />
    <delete-modal ref="delete" @update="fetchContatct" />
    <b-col sm="6">
      <h4 class="text-uppercase">Redes Sociais/Contatos</h4>
    </b-col>
    <b-col sm="6" class="d-flex justify-content-end mb-2">
      <b-button variant="info" @click="$refs.register.show()"
        ><b>CADASTRAR</b>
      </b-button>
    </b-col>
    <b-col
      xl="12"
      class="mb-3"
      v-for="(item, idx) in contacts"
      :key="`idx-${idx}`"
    >
      <list-contact
        :key="item.id"
        :data="item"
        @edit="edit"
        @show="show"
        @delete="remove"
      />
    </b-col>
  </b-row>
</template>

<script>
import { Contact } from "../../../api";
export default {
  components: {
    "list-contact": () => import("../../../components/listed/contact-list"),
    "register-modal": () => import("./register"),
    "edit-modal": () => import("./editar"),
    "show-modal": () => import("./show"),
    "delete-modal": () => import("./delete")
  },
  data() {
    return {
      contacts: []
    };
  },
  methods: {
    async fetchContatct() {
      await Contact.list()
        .then(({ data }) => {
          this.contacts = data;
        })
        .catch(erro => {
          this.$notify(
            "error",
            "Error!",
            "Não foi possivel obter os contatos",
            {
              duration: 3000,
              permanent: false
            }
          );
        });
    },
    edit(id) {
      this.$refs.edit.show(id);
    },
    show(id) {
      this.$refs.show.show(id);
    },
    remove(id) {
      this.$refs.delete.show(id);
    }
  },
  mounted() {
    this.fetchContatct();
  }
};
</script>

<style>
</style>