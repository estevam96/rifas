<template>
  <b-modal
    ref="modalOrder"
    :size="modal.size"
    :title-html="`<h5>${modal.title}</h5>`"
    hide-footer
    class="p-2"
  >
    <b-row class="d-flex justify-content-center">
      <div v-for="(item, index) in tickets" :key="`idx-${index}`">
        <b-badge class="p-2 m-1" variant="success">{{
          ("0000" + item).slice(-4)
        }}</b-badge>
      </div>
    </b-row>
    <b-row>
      <b-col lg="12">
        <b>Valor: R$ {{ Number(price * tickets.length).toFixed(2) }}</b>
      </b-col>
    </b-row>
    <form @submit.prevent="saveOrder">
      <b-row>
        <b-col lg="12">
          <b-form-group label="Nome *">
            <b-input
              type="text"
              name="order.name"
              v-model="$v.order.name.$model"
              :state="$v.order.name.$error ? false : null"
              placeholder="Nome e sobrenome"
            />
            <b-form-invalid-feedback v-if="!$v.order.name.require">
              Você deve informar o seu nome
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col lg="12">
          <b-form-group label="Telefone *">
            <b-input
              type="text"
              name="order.phone"
              v-model="$v.order.phone.$model"
              :state="$v.order.phone.$error ? false : null"
              placeholder="(99) 99999-999"
              v-mask="{ mask: '(99) 99999-9999', autoUnmask: true }"
            />
            <b-form-invalid-feedback v-if="!$v.order.phone.require">
              Você deve informar o seu telefone
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-end">
        <b-col class="d-flex justify-content-end" sm="6">
          <b-button type="button" @click="close" squared class="mt-4 mr-2">
            <b>CANCELAR</b>
          </b-button>
          <b-button
            type="submit"
            variant="primary"
            squared
            class="mt-4"
            :class="{ 'show-success': !modal.operating && modal.success }"
          >
            <b-spinner variant="light" small v-if="modal.operating" />
            <b v-else>SALVA</b>
          </b-button>
        </b-col>
      </b-row>
    </form>
  </b-modal>
</template>

<script>
import { validationMixin } from "vuelidate";
const { required, email } = require("vuelidate/lib/validators");
import { Order } from "../../api";
export default {
  props: ["tickets", "price"],
  data() {
    return {
      id: "",
      order: {
        name: "",
        phone: ""
      },
      modal: {
        title: "Concluir",
        loadingTitle: "",
        size: "lg",
        loading: true,
        operating: false,
        success: false
      }
    };
  },
  mixins: [validationMixin],
  validations: {
    order: {
      name: {
        required
      },
      phone: {
        required
      }
    }
  },
  methods: {
    async saveOrder() {
      this.modal.operating = true;
      this.$v.$touch();
      if (!this.$v.$error) {
        await Order.store({
          name: this.order.name,
          phone: this.order.phone,
          raffle_id: this.id,
          tickets: this.tickets
        })
          .then(response => {
            this.$emit("update");
            this.modal.operating = false;
            this.close();
            this.$notify(
              "success",
              "Sucesso!",
              `Os Tickets foram reservados para ${this.order.name}`,
              {
                duration: 3000,
                permanent: false
              }
            );
          })
          .catch(error => {
            this.modal.operating = false;
            this.$notify("error", "Error!", "Não foi possível concluir", {
              duration: 3000,
              permanent: false
            });
          });
      } else {
        this.modal.operating = false;
      }
    },
    show(id) {
      this.id = id;
      this.$refs.modalOrder.show();
    },
    close() {
      this.order = {
        name: "",
        phone: ""
      };
      this.$v.$reset();
      this.$refs.modalOrder.hide();
    }
  }
};
</script>

<style>
</style>