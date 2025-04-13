<script setup>
import { ref, onMounted } from 'vue';

const user = ref('');
const message = ref('');
const messages = ref([]);

const fetchMessages = () => {
fetch('http://localhost:3000/messages')
  .then(response => response.json())
  .then(result => {
    messages.value = result;
  })}

fetchMessages()

const handleSubmit = () => {
  if(user.value.length > 0 && message.value.length > 0){
  fetch('http://localhost:3000/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: user.value,
      message: message.value,
    })
  })
  .then(res => {
    fetchMessages();
  })
      user.value = '';
      message.value = '';
}
}

</script>

<template>
  <h1>Write a mesage:</h1>
    <form @submit.prevent="handleSubmit">
      <label for="user">User:</label>
      <input type="text" id="user" name="user" v-model="user" required @keydown.enter="handleSubmit">
      <br><br>
      <label for="message">Message:</label>
      <textarea id="message" name="message" v-model="message" required @keydown.enter="handleSubmit"></textarea>
      <br><br>
      <button>submit</button>
    </form>

      <div v-for="message in messages">
            <p>user: {{ message.user }}</p>
            <p>message:{{ message.message }}</p>
        </div>
</template>
