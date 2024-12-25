import { ref } from "vue";
import { defineStore } from "pinia";
export const useProductsStore = defineStore("products", () => {
  const products = ref<number[]>([]);

  function addProduct(product: number) {
    products.value.push(product);
  }

  return {
    products,
    addProduct,
  };
});
