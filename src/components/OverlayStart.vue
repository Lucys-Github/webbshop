<script setup>
import { ref, defineEmits } from 'vue';
import Header from './Header.vue'

const emit = defineEmits(['interaction']);

let showOverlay = ref(true);

const onClick = () => {
    showOverlay.value = !showOverlay.value
    emit('interaction');
}

</script>

<template>
    <div id="overlay" v-if="showOverlay">
        <Header />
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
    border-color: hwb(0 0% 46%);
    border-width: 0;
    border-style: solid;
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    transition: border-width 2s ease-in-out;
}

#overlay:has(button:hover){
    border-width:30px;
}

button {
    width: 80vw;
    height: 44px;
}

button:hover {
filter: brightness(0.8);
border: 2px solid gray;
}
</style>
