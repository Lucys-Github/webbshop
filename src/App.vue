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
  <div id="router-view-div">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>
#router-view-div {
/*   min-height: 100vh;
 */  background-color: white;
  margin: 40px 90px;
}

</style>
