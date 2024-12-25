<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  in_cart: Boolean,
});
</script>

<template>
  <div class="product">
    <h2>{{ product.title }}</h2>
    <div>{{ product.cost }}</div>
    <button
      @click="$emit('remove', product.id)"
      v-if="in_cart"
      class="btn btn-danger"
    >
      Remove from cart
    </button>
    <button @click="$emit('add', product.id)" v-else class="btn btn-success">
      Add to cart
    </button>
  </div>
</template>
