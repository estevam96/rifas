<template>
  <b-row>
    <order-edit ref="editorder" @update="updateTable" />
    <order-show ref="showorder" />
    <order-delete ref="deleteorder" @update="updateTable" />
    <raffle-edit ref="editraffle" @update="updateTableRaffle" />
    <h4 class="text-uppercase">Ultimas Rifas</h4>
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
        empty-text="Não há rifas para mostra"
        show-empty
      >
        <template v-slot:cell(created_at)="row">
          {{ row.item.created_at | moment("DD/MM/YYYY HH:mm") }}
        </template>
        <template v-slot:cell(draw_day)="row">
          {{ row.item.draw_day | moment("dddd, DD/MM/YYYY") }}
        </template>
        <template v-slot:cell(action)="row">
          <b-button pill :to="`/draw/show/${row.item.id}`" size="sm"
            ><font-awesome-icon :icon="['fa', 'eye']"
          /></b-button>
          <b-button
            pill
            variant="info"
            size="sm"
            @click="$refs.editraffle.show(row.item.id)"
            ><font-awesome-icon :icon="['fa', 'edit']"
          /></b-button>
        </template>
      </b-table>
    </b-col>

    <b-col
      xl="12"
      v-if="lastPage > 1"
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

    <b-col xl="6" class="mt-4">
      <h4 class="text-uppercase">Ultimas Compras</h4>
    </b-col>
    <b-col xl="6" class="mt-4">
      <b-form-input
        type="text"
        debounce="500"
        v-model="orderTable.filter"
        placeholder="Buscar comprador"
      />
    </b-col>
    <b-col xl="12" class="mt-2">
      <b-table
        responsive
        ref="orderTable"
        :items="fetchOrders"
        :fields="orderTable.fields"
        hover
        :per-page="orderTable.perPage"
        :current-page="orderTable.page"
        no-provider-sorting
        small
        fixed
        striped
        :filter="orderTable.filter"
        empty-text="Não há pagamentos para mostra"
        show-empty
      >
        <template v-slot:cell(raffle)="row" v-if="orderTable.total > 0">
          <router-link :to="`/draw/show/${row.item.raffle.id}`">
            {{ row.item.raffle.title }}
          </router-link>
        </template>
        <template v-slot:cell(tickets)="row">
          <b-row v-if="orderTable.total > 0">
            <div
              v-for="(item, index) in row.item.tickets"
              :key="`idx-${index}`"
            >
              <b-badge class="p-2 m-1" variant="success">{{
                ("0000" + item.ticket).slice(-4)
              }}</b-badge>
            </div>
          </b-row>
        </template>
        <template v-slot:cell(expired_day)="row" v-if="orderTable.total > 0">
          {{ row.item.expired_day | moment("DD/MM/YYYY") }}
        </template>
        <template v-slot:cell(created_at)="row" v-if="orderTable.total > 0">
          {{ row.item.created_at | moment("DD/MM/YYYY") }}
        </template>
        <template v-slot:cell(action)="row" v-if="orderTable.total > 0">
          <b-button pill size="sm" @click="$refs.showorder.show(row.item.id)"
            ><font-awesome-icon :icon="['fa', 'eye']"
          /></b-button>
          <b-button
            pill
            variant="info"
            size="sm"
            @click="$refs.editorder.show(row.item.id)"
            ><font-awesome-icon :icon="['fa', 'edit']"
          /></b-button>
          <b-button
            pill
            variant="danger"
            size="sm"
            @click="$refs.deleteorder.show(row.item.id)"
            ><font-awesome-icon :icon="['fa', 'trash']"
          /></b-button>
        </template>
      </b-table>
    </b-col>

    <b-col
      v-if="orderTable.lastPage > 1"
      xl="12"
      class="d-flex justify-content-center align-items-center mb-4"
    >
      <b-pagination
        v-model="orderTable.page"
        :total-rows="orderTable.total"
        :per-page="orderTable.perPage"
        align="center"
      >
      </b-pagination>
    </b-col>
  </b-row>
</template>

<script>
import { Raffle, Order } from "../../api";
import OrderEdit from "./Order/edit";
import Ordershow from "./Order/show";
import OrderDelete from "./Order/delete";
import EditRaffle from "./Raffle/edit";
export default {
  components: {
    "order-edit": OrderEdit,
    "order-show": Ordershow,
    "order-delete": OrderDelete,
    "raffle-edit": EditRaffle
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
      ],
      orderTable: {
        page: 1,
        perPage: 10,
        total: 0,
        lastPage: 0,
        filter: null,
        filterOn: [],
        fields: [
          {
            key: "name",
            label: "Cliente",
            sortable: true
          },
          {
            key: "tickets",
            label: "Tickets",
            sortable: true
          },
          {
            key: "raffle",
            label: "Rifa",
            sortable: true
          },
          {
            key: "created_at",
            label: "Compra",
            class: "row-action",
            sortable: true
          },
          {
            key: "expired_day",
            label: "Expiração",
            class: "row-action",
            sortable: true
          },
          {
            key: "status",
            class: "row-status",
            label: "Status",
            sortable: true,
            formatter: value => {
              return value === "waiting"
                ? "Aguardando"
                : value === "paid out"
                ? "Pago"
                : "Cancelado";
            }
          },
          {
            key: "value_total",
            label: "Valor",
            class: "row-value",
            sortable: true,
            formatter: value => {
              return `R$ ${Number(value).toFixed(2)}`;
            }
          },
          {
            key: "action",
            label: "Opções",
            class: "row-action",
            sortable: true
          }
        ]
      }
    };
  },
  methods: {
    async fetchRaffle(ctx) {
      let item = [];
      await Raffle.listValiable(ctx.currentPage, ctx.perPage)
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
    async fetchOrders(ctx) {
      let item = [];
      await Order.list(ctx.currentPage, ctx.perPage, ctx.filter)
        .then(response => {
          this.orderTable.total = response.data.total;
          item = response.data.data;
          this.orderTable.perPage = ctx.perPage;
          this.orderTable.page = ctx.currentPage;
          this.orderTable.lastPage = response.data.last_page;
        })
        .catch(() => {
          item = [];
        });

      return item;
    },
    updateTableRaffle() {
      this.$refs.tableRaffle.refresh();
    },
    updateTable() {
      this.$refs.orderTable.refresh();
    }
  }
};
</script>

<style>
/* .row-value {
  width: 100px;
}
.row-status {
  width: 150px;
}
.row-action {
  width: 120px;
} */
</style>