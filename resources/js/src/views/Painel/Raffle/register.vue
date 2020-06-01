<template>
  <b-modal
    ref="registemodal"
    :size="modal.size"
    scrollable
    :title-html="`<h4><b>${modal.title}</b></h4>`"
    hide-footer
    class="p-2"
  >
    <b-form @submit.prevent="saveRaflle">
      <b-row>
        <b-col sm="12">
          <div v-if="file != null">
            <span>Previsão do Banner:</span>
            <img
              style="width: 100%; height: 20%;"
              :src="imgPreview"
              alt="Previsão"
            />
          </div>
        </b-col>
        <b-col md="12">
          <b-form-group label="Titulo" label-size="sm">
            <b-input
              type="text"
              name="title"
              v-model="raffle.title"
              size="sm"
            />
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Numero de tickets" label-size="sm">
            <b-input
              type="number"
              name="tickets"
              v-model="raffle.tickets"
              min="200"
              max="1000"
              step="1"
              size="sm"
            />
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Preço do ticket" label-size="sm">
            <b-input
              type="number"
              name="price"
              v-model="raffle.price"
              min="0"
              max="9999.99"
              step="0.01"
              size="sm"
            />
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Data do Sorteio" label-size="sm">
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
          <b-form-group
            label="Banner"
            description="utilize imagem com 1365x404, para evitar distorção  "
            label-size="sm"
          >
            <b-form-file
              ref="banner"
              v-model="file"
              placeholder="Escolha um arquivo ou solte-o aqui ..."
              drop-placeholder="solte-o aqui..."
              type="file"
              size="sm"
              name="banner"
              accept="image/png, image/jpeg"
            />
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Imagens" label-size="sm">
            <b-form-file
              ref="imagens"
              v-model="raffle.imagens"
              placeholder="Escolha um arquivo ou solte-o aqui ..."
              drop-placeholder="solte-o aqui..."
              type="file"
              name="imagens"
              multiple
              size="sm"
              accept="image/png, image/jpeg"
              plain
            />
          </b-form-group>
        </b-col>
        <b-col md="12" class="mb-2">
          <div
            class=""
            v-for="(img, index) in raffle.imagens"
            :key="`idx-${index}`"
          >
            <b-row>
              <b-col md="10"
                ><p>{{ img.name }}</p>
              </b-col>
              <b-col md="2"
                ><b-button size="sm" @click="removeFile(index)"
                  >remover</b-button
                >
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col md="12">
          <b-form-group label="Descrição" label-size="sm">
            <quill-editor
              v-model="raffle.description"
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
export default {
  data() {
    return {
      raffle: {
        imagens: []
      },
      file: null,
      modal: {
        title: "Cadastro de Rifa",
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
    async saveRaflle() {
      this.modal.operating = true;
      let data = new FormData();

      data.append("title", this.raffle.title);
      data.append("tickets", this.raffle.tickets);
      data.append("price", this.raffle.price);
      data.append("description", this.raffle.description);
      data.append(
        "draw_day",
        moment(this.raffle.draw_day).format("YYYY-MM-DD")
      );
      data.append("banner", this.file);

      for (var i = 0; i < this.raffle.imagens.length; i++) {
        let file = this.raffle.imagens[i];
        data.append("imagens[" + i + "]", file);
      }

      await Raffle.store(data).then(() => {
        this.isSuccess = true;
        this.modal.operating = false;
      });
      this.$emit("update");
      this.close();
    },
    handleFilesUpload() {
      let file = this.$refs.imagens.files;

      for (var i = 0; i < file.length; i++) {
        this.raffle.imagens.push(file[i]);
      }
    },
    removeFile(key) {
      this.raffle.imagens.splice(key, 1);
    },
    show() {
      this.$refs.registemodal.show();
    },
    close() {
      this.raffle = {};
      this.file = null;
      this.$refs.registemodal.hide();
    }
  },
  computed: {
    imgPreview() {
      if (this.file) {
        return URL.createObjectURL(this.file);
      }
      return null;
    },
    imgsPreview() {
      if (this.raffle.imagens) {
      }
    }
  }
};
</script>

<style>
</style>