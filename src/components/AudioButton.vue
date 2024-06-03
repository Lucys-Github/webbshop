<script setup>
import { ref } from 'vue';

const isHidden = ref(false);

/* Audio background (using Web Audio API)*/
const playAudio = (() => {
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const audioElement = document.querySelector("audio");
const track = audioContext.createMediaElementSource(audioElement);
track.connect(audioContext.destination);
audioElement.play();
isHidden.value = true;
})
</script>

<template>
    <div>
    <button :class="{hidden: isHidden}" @click="playAudio"><RouterLink to="/home"><h2>Start shopping</h2></RouterLink></button>
    </div>
    <audio autoplay preload="auto" loop src="/bgMusic.mp3" type="audio/mp3">
    </audio>
</template>

<style scoped>
.hidden{
    display: none;
}

div{
    width: 100%;
    display: flex;
    justify-content: center;
}

button{
    width: 80%;
}
</style>
