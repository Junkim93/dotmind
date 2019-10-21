<template>
  <div class="chat">
    <section class="message-list">
      <section class="message -left">
        <i class="nes-ash"></i>
        <ul class="nes-balloon from-left" v-for="(data, index) in othersMsg" :key="index">
          <li>{{ `others: ${data.msg}` }}</li>
        </ul>
      </section>
      <section class="message -right">
        <ul class="nes-balloon from-right" v-for="(data, index) in ownMsg" :key="index">
          <li>{{ data.msg }}</li>
        </ul>
        <i class="nes-ash"></i>
      </section>
    </section>
    <div class="nes-field">
      <label for="message-field"></label>
      <input
        type="text"
        @keyup.enter="sendMessage"
        v-model="message"
        id="message-field"
        class="nes-input"
      />
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
const URI = 'https://aqueous-peak-71251.herokuapp.com/';

export default {
  name: 'Chat',
  data() {
    return {
      socket: io(URI),
      messages: [],
      message: ''
    };
  },

  computed: {
    ownMsg() {
      const result = this.messages.filter(el => {
        return el.id === 1;
      });
      return result;
    },
    othersMsg() {
      const result = this.messages.filter(el => {
        return el.id === 2;
      });
      return result;
    }
  },

  methods: {
    sendMessage() {
      this.messages.push({ msg: this.message, id: 1 });
      this.socket.emit('newMessage', { msg: this.message, id: 2 });
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

.nes-field {
  width: 300px;
}
</style>
