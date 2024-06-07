<script setup>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import CalmBgAudio from './components/CalmBgAudio.vue'

</script>

<template>
  <Header/>
  <Navbar/>
  <div id="bg">
    <RouterView/>
  </div>
  <Footer/>
  <CalmBgAudio/>
</template>

<style scoped>
#bg{
  min-height: 100vh;
  background-color: antiquewhite;
}
</style>
