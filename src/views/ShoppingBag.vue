<script setup>
import OverlayCheckout from '../components/OverlayCheckout.vue'

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
                <h3> {{ product.lives }} lives</h3>
        </div>
    </div>
    <div id="flex-div">
        <!-- Button that toggles Overlay + Overlay -->
        <OverlayCheckout/>
    </div>
</template>

<style scoped>
#flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 40px 0px;
    gap: 20px;
}

.flex-item {
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

img {
    max-height: 105px;
    object-fit: contain;
}

h3{
    color: darkred;
}

#flex-div {
    display: flex;
    justify-content: center;
}

</style>
