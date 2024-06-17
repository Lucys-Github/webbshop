<script setup>
import { ref } from 'vue';

const products = ref([]);

fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(result => {
    products.value = result;
    console.log(products.value)
  })

</script>

<template>
    <div id="flex-container">
        <div class="flex-item" v-for="product in products">
        <div>
        <p><strong>{{ product.name }} </strong></p>
        <p>{{ product.info }}</p>
        </div>
        <img :src="product.imagePath">
        <button> Buy for {{ product.lives }} lives </button>
        </div>
    </div>
</template>

<style scoped>
#flex-container{
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin: 40px 0px;
gap: 20px;
}

.flex-item{
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

img{
    max-height: 105px;
    object-fit: contain;
}

button {
    padding: 2px 4px;
    color: darkred;
}

</style>
