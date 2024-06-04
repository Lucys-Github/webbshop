<script setup>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import AudioButton from './components/AudioButton.vue'

</script>

<template>
  <Header/>
  <Navbar/>
  <AudioButton/>
  <div id="bg">
    <RouterView />
  </div>
  <Footer/>
</template>

<style scoped>
#bg{
  min-height: 100vh;
  background-color: antiquewhite;
}
</style>
