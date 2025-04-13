<script setup>
import { ref } from 'vue';

const imagePaths = ref([]);

fetch('http://localhost:3000/imagePaths')
  .then(response => response.json())
  .then(result => {
    imagePaths.value = result;
    console.log(imagePaths.value)
  }).catch((error)=>console.error(error))

</script>

<template>
  <div>
    <div id="grid-container">
      <div id="image-div" v-for="image in imagePaths" key="image.id">
        <img :src="image.imagePath">
      </div>
    </div>
  </div>
</template>

<style scoped>
#grid-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px 0px;}

#image-div{
   display: flex;
 justify-content: center;
  align-items: flex-start;
  padding: 10px;
}


img{
  max-width: 100%;
  max-height: 100%;
  padding:10px;
   border: 4px inset  darkred;
  outline: 4px double darkred;
  margin: 8px;
  box-shadow:  2px 2px 10px 4px rgb(0 0 0 / 0.8);
 }

@media (min-width: 600px) {
div{
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
}
</style>
