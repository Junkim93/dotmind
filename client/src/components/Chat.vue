<template>
  <div class="chat">
    <section class="message-list">
      <section class="message -left test-left">
        <ul
          class="nes-balloon from-left from-column"
          v-for="(data, index) in othersMsg"
          :key="index"
        >
          <li class="msg-style">{{ `others: ${data.msg}` }}</li>
        </ul>
      </section>
      <section class="message -right test-right">
        <ul
          class="nes-balloon from-right test-right from-column"
          v-for="(data, index) in ownMsg"
          :key="index"
        >
          <li class="msg-style">{{ data.msg }}</li>
        </ul>
      </section>
    </section>
    <div class="nes-field message-input">
      <label for="message-field"></label>
      <input
        type="text"
        @keypress.enter="sendMsg"
        v-model="message"
        id="message-field"
        class="nes-input"
      />
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
const URI = 'https://thawing-chamber-58948.herokuapp.com/';

export default {
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
    /* Methods for Message function */
    sendMsg() {
      this.messages.push({ msg: this.message, id: 1 });
      this.socket.emit('newMessage', { msg: this.message, id: 2 });
      this.message = '';
      this.moveScrolltoEnd();
    },

    moveScrolltoEnd() {
      const messageWrapper = this.$el.querySelector('.message-list');
      messageWrapper.scrollTop = messageWrapper.scrollHeight;
    }
  },

  mounted() {
    this.socket.on('message', data => {
      this.messages.push(data);
    });
  },

  updated() {
    this.moveScrolltoEnd();
  }
};
</script>

<style lang="scss" scoped>
.chat {
  width: 400px;
  flex: none;
  border: 1px solid black;
}

.message-list {
  display: flex;
  flex-direction: column;
  height: 380px;
  overflow: auto;
  overflow-x: hidden;
}

.message-input {
  width: 100%;
}

.test-left {
  margin-right: auto;
  text-align: left;
  width: 80%;
}

.test-right {
  margin-left: auto;
  text-align: right;
  max-width: 80%;
}

.from-column {
  display: flex;
  flex-direction: column;
}
</style>
