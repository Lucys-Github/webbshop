<script setup>
import { ref } from 'vue';
import AudioButtonScream from '../components/AudioButtonScream.vue'

let showOverlay = ref(false);

const toggleOverlay = () => {
    showOverlay.value = !showOverlay.value
}
</script>

<template>
    <div class="overlay" v-if="showOverlay">
        <h1>Thank you for shopping with us Today :)</h1>
        <router-link to="/thankyounotes">
            <h2>Read our reviews </h2>
        </router-link>
        <router-link to="/">
            <h2>Continue shopping </h2>
        </router-link>
    </div>
    <AudioButtonScream @toggle-overlay="toggleOverlay" />
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

.overlay h1 {
    color: white;
    margin: 0px 40px;
    text-align: left;
}

.overlay a {
    margin: 0px 40px;
}

div a {
    text-decoration: underline white 3px;
    color: white;
}
</style>
