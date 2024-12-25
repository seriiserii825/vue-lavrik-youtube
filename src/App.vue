<script lang="ts" setup>
import { computed, ref } from "vue";

const products = ref([
  { id: 1, title: "Milk", cost: 100 },
  { id: 2, title: "Salmon fish", cost: 200 },
  { id: 3, title: "Vine", cost: 1000 },
]);
const cart = ref([]);
const total = computed(() => {
  return cart.value.reduce((acc, id) => {
    const product = products.value.find((p) => p.id === id);
    if (!product) return acc;
    return acc + product.cost;
  }, 0);
});

function add(id: number) {
  cart.value.push(id);
}
</script>

<template>
  <div class="container container-fluid my-2 w-100 py-5">
    <div class="row mb-3">
      <div v-for="product in products" class="mb-5 col-md-3">
        <h2>{{ product.title }}</h2>
        <div>{{ product.cost }}</div>
        <button v-if="cart.includes(product.id)" class="btn btn-danger">Remove from cart</button>
        <button @click="add(product.id)" v-else class="btn btn-success">Add to cart</button>
      </div>
      <strong>Total: {{ total }}</strong>
    </div>
  </div>
</template>
