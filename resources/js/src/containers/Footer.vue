<template>
  <footer class="footer pt-4 pb-4 mt-auto">
    <div class="container">
      <b-row>
        <b-col md="6 d-flex align-items-end">
          <p class="text-light">
            Copyrights © 2020 Todos os direitos reservados.
          </p>
        </b-col>
        <b-col md="6">
          <b-row>
            <b-col class="d-flex justify-content-end">
              <div
                class=""
                v-for="(item, idx) in contactFooter"
                :key="`index-${idx}`"
              >
                <b-link
                  class="m-1"
                  :href="item.contact"
                  target="_blank"
                  v-if="item.social !== 'envelope' && item.social !== 'phone'"
                  ><font-awesome-icon
                    :icon="['fab', item.social]"
                    size="2x"
                    :style="{ color: socialColor(item.social) }"
                /></b-link>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="d-flex justify-content-end">
              <b-col lg="6" class="d-flex justify-content-end">
                <p class="m-1 text-light" v-if="!email === {}">
                  <font-awesome-icon :icon="['fa', 'envelope']" />
                  {{ email.contact }}
                </p>
              </b-col>
              <b-col lg="6" class="d-flex justify-content-end">
                <p class="m-1 text-light" v-if="!phone.contact === {}">
                  <font-awesome-icon :icon="['fab', 'whatsapp']" />
                  +55
                  {{ phoneFormat }}
                </p>
              </b-col>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </footer>
</template>

<script>
import { Contact } from "../api";
export default {
  data() {
    return {
      contactFooter: [],
      email: {},
      phone: {
        id: -1,
        type: "",
        social: "",
        isFooter: false,
        contact: "0000000000"
      }
    };
  },
  methods: {
    async fetData() {
      await Contact.list("telefone-rodape").then(({ data }) => {
        this.phone = data;
      });
      await Contact.list("email-rodape").then(({ data }) => {
        this.email = data;
      });
      await Contact.footer().then(({ data }) => {
        this.contactFooter = data;
      });
    },
    socialColor(value) {
      switch (value) {
        case "facebook-square":
          return "#3b5998";
        case "facebook-messenger":
          return "#3b5998";
        case "instagram-square":
          return "#B618A8";
        case "twitter-square":
          return "#00acee";
        case "youtube":
          return "#c4302b";
        case "whatsapp":
          return "#28a745";
        default:
          return "#ffffff";
      }
    }
  },
  computed: {
    phoneFormat() {
      return `(${this.phone.contact.substring(
        0,
        2
      )}) ${this.phone.contact.substring(2, 6)}-${this.phone.contact.substring(
        6,
        11
      )}`;
    }
  },
  mounted() {
    this.fetData();
  }
};
</script>

<style>
.footer {
  background-color: black;
}
</style>