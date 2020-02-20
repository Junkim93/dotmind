<template>
  <div class="chat nes-container is-rounded">
    <div class="chat__message" ref="messageContainer">
      <ul
        class="chat__message__list"
        v-for="(data, index) in messages"
        :key="index"
      >
        <li
          v-if="isOtherUser(data.id)"
          class="chat__message__list__content"
          :class="{ otherUser: isOtherUser(data.id) }"
        >
          anonymous: {{ data.msg }}
        </li>
        <li v-else class="chat__message__list__content">{{ data.msg }}</li>
      </ul>
    </div>
    <div class="nes-field chat__input">
      <input
        type="text"
        class="nes-input"
        ref="chatInput"
        v-model="message"
        @keypress="sendMsg"
      />
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';

const socket = io('http://localhost:4000/multi-game');

export default {
  data() {
    return {
      message: '',
      messages: [],
    };
  },

  created() {
    this.receiveMsg();
  },

  updated() {
    this.scrollToBottom();
  },

  methods: {
    sendMsg(e) {
      if (e.code == 'Enter') {
        this.messages.push({ msg: this.message, id: 0 });
        socket.emit('message', { msg: this.message, id: 1 });
        this.initMsg();
      }
    },

    receiveMsg() {
      socket.on('newMessage', msg => {
        this.messages.push(msg);
      });
    },

    initMsg() {
      this.$refs.chatInput.value = '';
      this.message = '';
    },

    isOtherUser(id) {
      return id == 1;
    },

    scrollToBottom() {
      const shouldScroll =
        this.$refs.messageContainer.scrollTop +
          this.$refs.messageContainer.clientHeight ==
        this.$refs.messageContainer.scrollHeight;

      if (!shouldScroll) {
        this.$refs.messageContainer.scrollTop = this.$refs.messageContainer.scrollHeight;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.chat {
  width: 400px;
  height: 580px;
  padding: 10px 12px;
  position: relative;

  &__message {
    height: 90%;
    overflow-y: auto;
    font-size: 20px;

    &__list {
      padding: 3px 0;
      width: 100%;
      position: relative;

      &__content {
        display: block;
        width: 80%;
        margin-left: auto;
        text-align: right;
        overflow: hidden;
        word-wrap: break-word;
      }
    }
  }

  .otherUser {
    color: rgb(61, 83, 116);
    text-align: left;
    margin: 0;
  }

  &__input {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    bottom: 0;
    margin-bottom: 5px;
  }
}
</style>
