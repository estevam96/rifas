<template>
  <b-card class="d-flex flex-row align-items-center" no-body>
    <div style="max-width: 20%" class="d-flex ml-2">
      <font-awesome-icon
        :icon="[
          `${
            data.social === 'envelope' || data.social === 'phone' ? 'fa' : 'fab'
          }`,
          data.social
        ]"
        size="2x"
      />
    </div>
    <div class="pl-2 d-flex flex-grow-1 min-width-zero">
      <div
        class="card-body align-self-center d-flex flex-lg-row justify-content-between min-width-zero align-items-lg-center"
      >
        <div class="w-40 w-sm-100">
          <p class="list-item-heading mb-0 text-xs-center truncate">
            {{ data.type }}
          </p>
          <p
            class="list-item-heading mb-0 text-xs-center truncate"
          >
            {{ data.contact }}
          </p>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <b-button
            @click="$emit('show', data.id)"
            size="sm"
            variant="dark"
            class="py-2 px-2 mr-1 d-flex"
            ><font-awesome-icon :icon="['fa', 'eye']"
          /></b-button>
          <b-button
            @click="$emit('edit', data.id)"
            size="sm"
            variant="primary"
            class="py-2 px-2 mr-1 d-flex"
            ><font-awesome-icon :icon="['fa', 'edit']"
          /></b-button>
          <b-button
            @click="$emit('delete', data.id)"
            size="sm"
            variant="secondary"
            class="py-2 px-2 mr-1 d-flex"
            ><font-awesome-icon :icon="['fa', 'trash']"
          /></b-button>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  methods: {}
};
</script>

<style>
</style>