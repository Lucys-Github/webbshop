<script setup>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import CalmBgAudio from './components/CalmBgAudio.vue'
import OverlayStart from './components/OverlayStart.vue'
import { ref } from 'vue'

const startAudio = () =>{
  play.value = true;
}

let play = ref(false);
</script>

<template>
  <CalmBgAudio :playAudio="play" />
  <Header />
  <Navbar />
  <OverlayStart @interaction="startAudio"/>
  <div id="bg">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>
#bg {
  min-height: 100vh;
  background-color: antiquewhite;
}
</style>
