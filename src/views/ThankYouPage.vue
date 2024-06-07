<script setup>
import { ref } from 'vue';

const imagePaths = ref([]);

fetch('http://localhost:3000/imagePaths')
  .then(response => response.json())
  .then(result => {
    imagePaths.value = result;
    console.log(imagePaths.value)
  })

</script>

<template>
    <div>
        <img v-for="image in imagePaths" :src="image.imagePath">
    </div>
</template>

<style scoped>
div{
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 40px;
    padding: 5px 40px 40px;
}

img{
    width: 100%;
    height: auto;
    object-fit: cover;
    outline: 4px solid darkred;
}

</style>
