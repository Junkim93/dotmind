<template>
  <div class="Game">
    <div v-if="start">
      <button type="button" class="nes-btn is-primary" @click="computedStart">
        게임 시작
      </button>
    </div>
    <div v-else>
      <button type="button" class="nes-btn is-error" @click="isStart">
        {{ randomWord }}
      </button>
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
import game from './Game.js';

export default {
  data() {
    return {
      start: true,
      wordList: dummy.wordList,
      answer: '',
    };
  },

  methods: {
    isStart() {
      return (this.start = game.switchBoolean(this.start));
    },
    checkAnswer() {
      if (game.isEqual(this.randomWord, this.answer)) {
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
    },
  },
  computed: {
    randomWord() {
      const num = game.getRandomNum(this.wordList);
      return this.wordList[num];
    },
  },
};
</script>

<style></style>
