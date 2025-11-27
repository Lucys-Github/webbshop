<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['toggleOverlay']);

const unLoopedAudios = ["scream1.mp3", "scream2.mp3", "scream3.mp3" ];

const loopedAudios = [
  "explosion1.mp3",
  "explosion2.mp3",
  "explosion3.mp3",
  "glass1.mp3",
  "gun1.mp3",
  "gun2.mp3",
  "gun3.mp3",
  "gun4.mp3",
  "gun5.mp3",
  "gun6.mp3",
  "gun7.mp3"
];

const playAudio = (() => {
emit('toggleOverlay');
const audioElements = document.querySelectorAll("audio");
audioElements.forEach(audioElement => {
 audioElement.play();
});
})
</script>

<template>
    <button @click="playAudio" >
            <h1> Buy for 21 lives </h1>
    </button>
    <audio v-for="audio in unLoopedAudios" :key="audio" :src="audio" type="audio/mp3" preload="auto"></audio>
    <audio v-for="audio in loopedAudios" :key="audio" :src="audio" type="audio/mp3" preload="auto"></audio>
</template>

<style scoped>
button {
    padding: 0px 4px;
    color: darkred;
    margin: 50px 0px;
}
</style>
