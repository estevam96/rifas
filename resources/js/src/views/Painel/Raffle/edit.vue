<template>
  <b-modal
    ref="editmodal"
    :size="modal.size"
    scrollable
    :title-html="`<h1><b>${modal.title}</b></h1>`"
    hide-footer
    class="p-2"
  >
    <b-form @submit.prevent="saveRaflle">
      <b-row>
        <b-col sm="12">
          <div v-if="raffle.banner != null">
            <span>Previsão do Banner:</span>
            <img
              style="width: 100%; height: 20%;"
              :src="imgPreview || raffle.banner"
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
              v-model="file"
              placeholder="Escolha um arquivo ou solte-o aqui ..."
              drop-placeholder="olte-o aqui..."
              type="file"
            />
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Titulo">
            <b-form-input type="text" v-model="raffle.title" />
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Numero de tickets">
            <b-form-input type="number" v-model="raffle.tickets" />
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Preço do ticket">
            <b-form-input type="number" v-model="raffle.price" />
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Data do Sorteio">
            <vc-date-picker
              mode="single"
              :min-date="new Date()"
              v-model="raffle.draw_day"
              :input-props="{
                class: 'form-control'
              }"
            ></vc-date-picker>
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
            <b>CADASTRAR</b>
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-modal>
</template>

<script>
import { Raffle } from "../../../api";
import moment from "moment";
export default {
  data() {
    return {
      id: -1,
      raffle: {
        title: "",
        tickets: "",
        price: "",
        description: "",
        draw_day: "",
        banner: ""
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
        this.modal.loading = false;
      });
    },
    async saveRaflle() {
      let data = new FormData();

      data.append("title", this.raffle.title);
      data.append("tickets", this.raffle.tickets);
      data.append("price", this.raffle.price);
      data.append("description", this.raffle.description);
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
      await Raffle.update(this.id, data).then(() => {
        this.isSuccess = true;
      });
      this.$emit("update");
      this.raffle = {};
      this.close();
    },
    handleFileUpload() {
      this.file = this.$refs.banner.files[0];
    },
    show(id) {
      this.id = id;
      this.fetchRaffle(id);
      this.$refs.editmodal.show();
    },
    close() {
      this.raffle = {};
      this.file = null;
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