<template>
  <div class="Game">
    <div v-if="!status">
      <button type="button" class="nes-btn is-primary" @click="isStart">게임 시작</button>
    </div>
    <div v-else>
      <button type="button" class="nes-btn is-error" @click="isStart">{{ word }}</button>
    </div>

    <div class="nes-field message-input">
      <label for="answer-field"></label>
      <input
        type="text"
        @keypress.enter="checkAnswer"
        v-model="answer"
        id="answer-field"
        class="nes-input"
      />
    </div>
  </div>
</template>

<script>
import dummy from '../dummyWord';

export default {
  data() {
    return {
      status: false,
      wordList: dummy.wordList,
      answer: ''
    };
  },
  methods: {
    isStart() {
      !this.status ? (this.status = true) : (this.status = false);
    },
    checkAnswer() {
      if (this.answer === this.word) {
        this.isStart();
        this.init();
      } else {
        this.alert();
      }
    },
    alert() {
      alert('아니야 임마');
    },
    init() {
      this.answer = '';
    }
  },
  computed: {
    word() {
      const num = Math.floor(Math.random() * this.wordList.length);
      return this.wordList[num];
    }
  }
};
</script>

<style>
</style>