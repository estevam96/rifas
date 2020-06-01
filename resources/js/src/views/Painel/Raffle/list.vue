<template>
  <b-row>
    <edit-modal ref="edit" @update="updateTable" />
    <registe-modal ref="registe" @update="updateTable" />
    <delete-modal ref="delete" @update="updateTable" />
    <b-col sm="6">
      <h4 class="text-uppercase">Rifas</h4>
    </b-col>
    <b-col sm="6" class="d-flex justify-content-end mb-2">
      <b-button variant="info" @click="$refs.registe.show()"
        ><b>CADASTRA</b>
      </b-button>
    </b-col>
    <b-col xl="12">
      <b-table
        ref="tableRaffle"
        responsive
        :items="fetchRaffle"
        :fields="fields"
        hover
        :per-page="perPage"
        :current-page="page"
        no-provider-sorting
        small
        fixed
        striped
      >
        <template v-slot:cell(created_at)="row">
          {{ row.item.created_at | moment("DD/MM/YYYY HH:mm") }}
        </template>
        <template v-slot:cell(draw_day)="row">
          {{ row.item.draw_day | moment("DD/MM/YYYY") }}
        </template>
        <template v-slot:cell(action)="row">
          <b-button pill :to="`/draw/show/${row.item.id}`" size="sm"
            ><font-awesome-icon :icon="['fa', 'eye']"
          /></b-button>
          <b-button
            pill
            variant="info"
            size="sm"
            @click="$refs.edit.show(row.item.id)"
            ><font-awesome-icon :icon="['fa', 'edit']"
          /></b-button>
          <b-button
            pill
            variant="danger"
            size="sm"
            @click="$refs.delete.show(row.item.id)"
            ><font-awesome-icon :icon="['fa', 'trash']"
          /></b-button>
        </template>
      </b-table>
    </b-col>

    <b-col
      v-if="lastPage > 1"
      xl="12"
      class="d-flex justify-content-center align-items-center"
    >
      <b-pagination
        v-model="page"
        :total-rows="total"
        :per-page="perPage"
        align="center"
      >
      </b-pagination>
    </b-col>
  </b-row>
</template>

<script>
import { Raffle } from "../../../api";
import RegisteModal from "./register";
import EditModal from "./edit";
import DeleteModal from "./delete";
export default {
  components: {
    "registe-modal": RegisteModal,
    "edit-modal": EditModal,
    "delete-modal": DeleteModal
  },
  data() {
    return {
      page: 1,
      perPage: 10,
      total: 0,
      lastPage: 0,
      fields: [
        {
          key: "title",
          label: "Titulo",
          sortable: true
        },
        {
          key: "tickets",
          label: "Numero de tickets",
          sortable: true
        },
        {
          key: "created_at",
          label: "Data de Cadastro",
          sortable: true
        },
        {
          key: "draw_day",
          label: "Dia sorteio",
          sortable: true
        },
        {
          key: "action",
          label: "Opções",
          sortable: true
        }
      ]
    };
  },
  methods: {
    async fetchRaffle(ctx) {
      let item = [];
      await Raffle.list(ctx.currentPage, ctx.perPage)
        .then(response => {
          this.total = response.data.total;
          item = response.data.data;
          this.perPage = ctx.perPage;
          this.page = ctx.currentPage;
          this.lastPage = response.data.last_page;
        })
        .catch(() => {
          item = [];
        });

      return item;
    },
    remove(id) {
      this.$refs.delete.show(id);
    },
    updateTable() {
      this.$refs.tableRaffle.refresh();
    }
  }
};
</script>

<style>
</style>