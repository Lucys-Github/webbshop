  <script setup>
import { ref } from 'vue';

const messages = ref([]);
const user = ref([]);
const message = ref([]);

fetch('http://localhost:3000/messages')
  .then(response => response.json())
  .then(result => {
    messages.value = result;
    console.log(messages.value)
  })

</script>

<template>
    <h1>Write a mesage:</h1>
        <form action="http://localhost:3000/submit" method="post">
            <label for="user">User:</label>
            <input type="text" id="user" v-model="user.value" required>
            <br><br>
            <label for="message">Message:</label>
            <textarea  id="message" v-model="message.value" required></textarea>
            <br><br>
            <input type="submit" value="Post">
        </form>

        <div v-for="message in messages">
            <p>{{ message.user }}</p>
            <p>{{ message.message }}</p>
        </div>
</template>

