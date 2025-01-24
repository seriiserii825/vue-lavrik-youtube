<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import Product from "./components/Product.vue";
import { useProductsStore } from "./store/useProductsStore";
// some vuew code
const porducts_store = useProductsStore();
console.log(porducts_store.products, "porducts_store.products");

const products = ref([
  { id: 1, title: "Milk", cost: 100 },
  { id: 2, title: "Salmon fish", cost: 2000 },
  { id: 3, title: "Vine", cost: 1000 },
]);
const cart = ref<number[]>([]);
const total = computed(() => {
  return cart.value.reduce((acc, id) => {
    const product = products.value.find((p) => p.id === id);
    if (!product) return acc;
    return acc + product.cost;
  }, 0);
});

const sale_level = 3000;
const is_sale = computed(() => total.value >= sale_level);

function add(id: number) {
  cart.value.push(id);
}
function remove(id: number) {
  cart.value = cart.value.filter((i) => i !== id);
}
function addToStore() {
  porducts_store.addProduct(3);
}
</script>

<template>
  <button class="btn btn-primary" @click="addToStore">some</button>
  <div class="container container-fluid my-2 w-100 py-5">
    <div class="alert alert-success" v-if="is_sale">Sale!!!</div>
    <div class="row mb-3 d-flex">
      <Product
        v-for="product in products"
        :in_cart="cart.includes(product.id)"
        :product="product"
        :key="product.id"
        class="mb-5 col-md-4 border border-primary p-3"
        @add="add"
        @remove="remove"
      />
    </div>
    <div class="row">
      <div class="col-md-3">
        <strong>Total: {{ total }}</strong>
      </div>
      <div class="col-md-6">
        <button class="btn btn-outline-danger" @click="cart = []">
          Reset cart
        </button>
      </div>
    </div>
  </div>
</template>
