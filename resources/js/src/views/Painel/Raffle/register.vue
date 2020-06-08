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
          <div v-if="raffle.banner != null">
            <span>Previsão do Banner:</span>
            <img
              style="width: 100%; height: 20%;"
              :src="imgPreview"
              alt="Previsão"
            />
          </div>
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
          <b-form-group label="Data do Sorteio" label-size="sm">
            <vc-date-picker
              mode="single"
              :min-date="currentDate.getTime() + 86400000"
              v-model="$v.raffle.draw_day.$model"
              :input-props="{
                class: 'form-control'
              }"
            />
            <b-form-invalid-feedback v-if="!$v.raffle.draw_day.minDate">
              Você deve informar o valor dos tickets
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group
            label="Banner"
            description="Utilize imagem com 1365x404, para evitar distorção. formatos aceitos jpg, jpeg e png  "
            label-size="sm"
          >
            <b-form-file
              ref="banner"
              v-model="$v.raffle.banner.$model"
              :state="$v.raffle.banner.$error ? false : null"
              placeholder="Escolha um arquivo ou solte-o aqui ..."
              drop-placeholder="solte-o aqui..."
              type="file"
              size="sm"
              name="banner"
              accept="image/png, image/jpeg"
            />
            <b-form-invalid-feedback v-if="!$v.raffle.banner.required">
              Você deve adicionar uma imagem como banner
            </b-form-invalid-feedback>
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
import { mapGetters, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
const {
  required,
  minValue,
  maxValue,
  withParams
} = require("vuelidate/lib/validators");
import { Raffle } from "../../../api";
import moment from "moment";
const tomorrow = new Date();
const minDate = value => value >= tomorrow.getTime() + 86400000;
export default {
  data() {
    return {
      currentDate: new Date(),
      raffle: {
        banner: null,
        title: "",
        tickets: 200,
        price: undefined,
        draw_day: "",
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
  mixins: [validationMixin],
  validations: {
    raffle: {
      banner: {
        required
      },
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
      },
      draw_day: {
        minDate
      }
    }
  },
  methods: {
    async saveRaflle() {
      this.$v.$touch();
      if (!this.$v.$error) {
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
        data.append("banner", this.raffle.banner);

        for (var i = 0; i < this.raffle.imagens.length; i++) {
          let file = this.raffle.imagens[i];
          data.append("imagens[" + i + "]", file);
        }

        await Raffle.store(data)
          .then(() => {
            this.isSuccess = true;
            this.modal.operating = false;
            this.$notify("success", "Sucesso!", `Rifa cadastrada`, {
              duration: 3000,
              permanent: false
            });
          })
          .catch(error => {
            this.$notify("error", "Error!", "Não foi cadastra a rifa", {
              duration: 3000,
              permanent: false
            });
          });

        this.$emit("update");
        this.close();
      }
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
      this.$v.$reset();
      this.$refs.registemodal.hide();
    }
  },
  computed: {
    imgPreview() {
      if (this.raffle.banner) {
        return URL.createObjectURL(this.raffle.banner);
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