<template>
  <b-modal
    ref="editmodal"
    :size="modal.size"
    scrollable
    :title-html="`<h1><b>${modal.title}</b></h1>`"
    hide-footer
    class="p-2"
  >
    <b-row v-if="modal.loading" class="d-flex justify-content-center">
      <b-spinner size="md" variant="primary" /> {{ modal.loadingTitle }}
    </b-row>
    <b-form @submit.prevent="saveRaflle" v-if="!modal.loading && id != -1">
      <b-row>
        <b-col sm="12">
          <div v-if="raffle.banner != null">
            <span>Previsão do Banner:</span>
            <b-img
              style="width: 100%; height: 337px;"
              :src="imgPreview || raffle.banner"
              fluid
              alt="Previsão"
            />
          </div>
        </b-col>
        <b-col md="12">
          <b-form-group
            label="Banner"
            description="utilize imagem com 1365x404, para evitar distorção  "
          >
            <b-form-file
              ref="banner"
              name="banner"
              v-model="file"
              placeholder="Escolha um arquivo ou solte-o aqui ..."
              drop-placeholder="olte-o aqui..."
              type="file"
            />
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Título" label-size="sm">
            <b-input
              type="text"
              name="raffle.title"
              v-model="$v.raffle.title.$model"
              :state="$v.raffle.title.$error ? false : null"
              size="sm"
            />
            <b-form-invalid-feedback v-if="!$v.raffle.title.required">
              Você deve informar o título para a rifa
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Numero de tickets" label-size="sm">
            <b-input
              type="number"
              name="raffle.tickets"
              v-model="$v.raffle.tickets.$model"
              :state="$v.raffle.tickets.$error ? false : null"
              min="200"
              max="1000"
              step="1"
              size="sm"
            />
            <b-form-invalid-feedback v-if="!$v.raffle.tickets.required">
              Você deve informar a quantidade de tickets
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Preço do ticket" label-size="sm">
            <b-input
              type="number"
              name="raffle.price"
              v-model="$v.raffle.price.$model"
              :state="$v.raffle.price.$error ? false : null"
              min="0"
              max="9999.99"
              step="0.01"
              size="sm"
            />
            <b-form-invalid-feedback v-if="!$v.raffle.price.required">
              Você deve informar o valor dos tickets
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Ticket vencendor">
            <b-form-input
              name="winnerTicket"
              type="number"
              min="0"
              :max="raffle.tickets"
              step="1"
              v-model="raffle.winning_ticket"
            />
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Nome do ganhador">
            <b-form-input name="winner" type="text" v-model="raffle.winner" />
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Data do Sorteio" label-size="sm">
            <vc-date-picker
              mode="single"
              :min-date="currentDate.getTime() + 86400000"
              v-model="raffle.draw_day"
              :input-props="{
                class: 'form-control'
              }"
            />
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Descrição">
            <quill-editor
              v-model="raffle.description"
              :value="raffle.description"
              :options="editorOption"
            />
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
            <b v-else>CADASTRAR</b>
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-modal>
</template>

<script>
import { Raffle } from "../../../api";
import moment from "moment";
import { validationMixin } from "vuelidate";
const { required, minValue, maxValue } = require("vuelidate/lib/validators");
export default {
  data() {
    return {
      id: -1,
      currentDate: new Date(),
      raffle: {
        title: "",
        tickets: undefined,
        price: undefined,
        description: "",
        draw_day: "",
        banner: "",
        winner: "",
        winning_ticket: ""
      },
      ondlRiffle: {},
      file: null,
      modal: {
        title: "Editar Rifa",
        loadingTitle: "",
        size: "lg",
        loading: true,
        operating: false,
        success: false
      },
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ align: [] }],
            ["clean"]
          ]
        }
      }
    };
  },
  mixins: [validationMixin],
  validations: {
    raffle: {
      title: {
        required
      },
      tickets: {
        required,
        minValue: 200,
        maxValue: 1000
      },
      price: {
        required
      }
    }
  },
  methods: {
    async fetchRaffle(id) {
      await Raffle.show(id).then(res => {
        const raffle = res.data;
        Object.assign(this.raffle, {
          title: raffle.title,
          tickets: Number(raffle.tickets),
          price: Number(raffle.price),
          description: raffle.description,
          draw_day: new Date(raffle.draw_day.replace("-", "/")),
          banner: raffle.url_banner
        });
        this.ondlRiffle.draw_day = moment(this.raffle.draw_day).format(
          "YYYY-MM-DD"
        );
        this.ondlRiffle.winner = raffle.winner;
        this.modal.loading = false;
      });
    },
    async saveRaflle() {
      this.$v.$touch();
      if (!this.$v.$error) {
        let data = new FormData();
        this.modal.operating = true;
        data.append("title", this.raffle.title);
        data.append("tickets", this.raffle.tickets);
        data.append("price", this.raffle.price);
        data.append("description", this.raffle.description);
        data.append("winner", this.raffle.winner);
        data.append("winning_ticket", this.raffle.winning_ticket);
        if (
          this.ondlRiffle.draw_day !==
          moment(this.raffle.draw_day).format("YYYY-MM-DD")
        ) {
          data.append(
            "draw_day",
            moment(this.raffle.draw_day).format("YYYY-MM-DD")
          );
        }
        if (typeof this.raffle.banner != "string")
          data.append("banner", this.file);
        data.append("_method", "PUT");

        if (this.ondlRiffle.winner !== this.raffle.winner)
          data.append("status", "concluded");

        await Raffle.update(this.id, data)
          .then(() => {
            this.isSuccess = true;
            this.modal.operating = false;
            this.$notify("success", "Sucesso!", `Edições salva`, {
              duration: 3000,
              permanent: false
            });
          })
          .catch(error => {
            this.$notify("error", "Error!", "Não foi salvar alterações", {
              duration: 3000,
              permanent: false
            });
          });
        this.$emit("update");
        this.raffle = {};
        this.close();
      }
    },
    handleFileUpload() {
      this.file = this.$refs.banner.files[0];
    },
    show(id) {
      this.id = id;
      this.modal.loading = true;
      this.fetchRaffle(id);
      this.$refs.editmodal.show();
    },
    close() {
      this.raffle = {};
      this.file = null;
      this.$v.$reset();
      this.$refs.editmodal.hide();
    }
  },
  computed: {
    imgPreview() {
      if (this.file) {
        return URL.createObjectURL(this.file);
      }
      return null;
    }
  }
};
</script>

<style>
</style>