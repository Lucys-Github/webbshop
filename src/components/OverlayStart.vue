<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['interaction']);

let showOverlay = ref(true);

const onClick = () => {
    showOverlay.value = !showOverlay.value
    emit('interaction');
}

</script>

<template>
    <div id="overlay" v-if="showOverlay">
        <button @click="onClick">
            <h2>Start shopping</h2>
        </button>
    </div>
</template>

<style scoped>
#overlay {
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

#buttonFlex {
    width: 100%;
    display: flex;
    justify-content: center;
}

button {
    width: 80%;
}
</style>
