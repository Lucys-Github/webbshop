<script setup>
import { watch } from 'vue';

const playAudio = (() => {
    const audioElement = document.querySelector("audio");
    audioElement.play();
})

const props = defineProps({
    playAudio: Boolean
});

watch(() => props.playAudio, (newVal) => {
    playAudio();
});

</script>

<template>
    <audio autoplay preload="auto" loop src="/bgMusic.mp3" type="audio/mp3">
    </audio>
</template>

<style scoped></style>
