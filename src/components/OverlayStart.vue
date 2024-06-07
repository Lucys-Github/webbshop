<script setup>
import { ref } from 'vue';

import AudioButtonCalm from '../components/AudioButtonCalm.vue'

let showOverlay = ref(true);

const toggleOverlay = () => {
    showOverlay.value = !showOverlay.value
}

</script>

<template>
    <div class="overlay" v-if="showOverlay">
        <AudioButtonCalm @toggle-overlay="toggleOverlay"/>
    </div>
</template>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    border: 30px solid darkred;
    opacity: 0.8;
    z-index: 1000;
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}
</style>
