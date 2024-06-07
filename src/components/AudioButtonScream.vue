<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['toggleOverlay']);

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
    <!-- Not looped -->
    <audio class="stop" preload="auto"  src="scream1.mp3" type="audio/mp3">
    </audio>
    <audio  class="stop" preload="auto"  src="scream2.mp3" type="audio/mp3">
    </audio>
    <audio  class="stop" preload="auto"  src="scream3.mp3" type="audio/mp3">
    </audio>
    <!-- Looped -->
    <audio  preload="auto" loop src="explosion1.mp3" type="audio/mp3">
    </audio>
    <audio preload="auto" loop src="explosion2.mp3" type="audio/mp3">
    </audio>
    <audio  preload="auto" loop src="explosion3.mp3" type="audio/mp3">
    </audio>
    <audio  preload="auto" loop src="glass1.mp3" type="audio/mp3">
    </audio>
    <audio  preload="auto" loop src="gun1.mp3" type="audio/mp3">
    </audio>
    <audio preload="auto" loop src="gun2.mp3" type="audio/mp3">
    </audio>
    <audio  preload="auto" loop src="gun3.mp3" type="audio/mp3">
    </audio>
    <audio  preload="auto" loop src="gun4.mp3" type="audio/mp3">
    </audio>
    <audio  preload="auto" loop src="gun5.mp3" type="audio/mp3">
    </audio>
    <audio  preload="auto" loop src="gun6.mp3" type="audio/mp3">
    </audio>
    <audio preload="auto" loop src="gun7.mp3" type="audio/mp3">
    </audio>
</template>

<style scoped>
button {
    padding: 0px 4px;
    color: darkred;
    margin: 50px 0px;
}
</style>
