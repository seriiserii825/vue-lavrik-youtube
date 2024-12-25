<script lang="ts" setup>
import {ref} from 'vue';

const products = ref([
  { id: 1, title: "Milk", cost: 100 },
  { id: 2, title: "Salmon fish", cost: 200 },
  { id: 3, title: "Vine", cost: 1000 },
]);
console.log(products.value, "products.value");
</script>

<template>
  <div class="container my-2">
    <div class="row mb-3">
      <div v-for="product in products" class="col">
        <h2>{{ product.title }}</h2>
        <div>{{ product.cost }}</div>
      </div>
    </div>
  </div>
</template>
