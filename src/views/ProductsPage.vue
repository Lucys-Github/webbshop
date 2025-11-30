<script setup>
import { ref } from 'vue';
import { shoppingBag } from '../store'

const products = ref([]);

fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(result => {
        products.value = result;
    })
</script>

<template>
    <div id="flex-container">
        <div id="product-card" v-for="product in products">
            <div id="product-title">
                <p><strong>{{ product.name }} </strong></p>
                <p>{{ product.info }}</p>
            </div>
            <div id="image-container">
                <img :src="product.imagePath">
            </div>
            <button @click="shoppingBag.addProduct(product.id)"> Buy for {{ product.lives }} lives </button>
        </div>
    </div>
</template>

<style scoped>
#flex-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    gap: 20px;
}

#product-title {
    text-align: left;
    width: 100%;
}

#product-card {
    box-shadow: 2px 2px 2px 4px rgb(139 0 0);
    width: 200px;
    height: 200px;
    padding: 20px;
    outline: 3px solid black;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#image-container {
    display: flex;
    max-width: 150px;
    max-height: 100px;
}

img {
    object-fit: contain;
}

button {
    padding: 8px 0px;
    background-color: white;
    color: black;
    width: 100%;
    outline: 2px solid black;
    transition: outline-width 0.2s ease-out;
}

button:hover {
    outline: 4px solid  rgb(139 0 0);
}

button:active {
    box-shadow: inset 0em 0em 4px black;
}
</style>
