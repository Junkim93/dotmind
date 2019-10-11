<template>
  <div class="chat">
    <h1>채팅창 개발</h1>
    <ul v-for="(message, index) in messages" :key="index">
      <li>{{ message }}</li>
    </ul>
    <input type="text" @keyup.enter="sendMessage" v-model="message" />
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  data() {
    return {
      socket: io('http://localhost:4000/'),
      messages: [],
      message: ''
    };
  },

  methods: {
    sendMessage() {
      this.messages.push(this.message);
      this.socket.emit('newMessage', this.message);
      this.message = '';
    }
  },

  mounted() {
    this.socket.on('message', data => {
      this.messages.push(data);
    });
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>