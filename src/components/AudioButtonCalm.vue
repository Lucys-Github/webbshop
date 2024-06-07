<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['toggleOverlay']);

const playAudio = (() => {
emit('toggleOverlay');
const audioElement = document.querySelector("audio");
audioElement.play();
})
</script>

<template>
    <div id="buttonFlex">
    <button @click="playAudio"><h2>Start shopping</h2></button>
    </div>
    <audio autoplay preload="auto" loop src="/bgMusic.mp3" type="audio/mp3">
    </audio>
</template>

<style scoped>

#buttonFlex{
    width: 100%;
    display: flex;
    justify-content: center;
}

button{
    width: 80%;
}
</style>
