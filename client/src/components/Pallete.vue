<template>
  <div class="wrapper">
    <div class="wrapper" v-for="(item, index) in color" :key="index">
      <button class="test" :style="{ backgroundColor: item }" @click.prevent="emitColorInfo(item)"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: ['red', 'black', 'yellow'],
      currentColor: ''
    };
  },

  methods: {
    emitColorInfo(item) {
      this.currentColor = item;
      this.$emit('update-color', this.currentColor);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.test {
  width: 40px;
  height: 40px;
  margin: 5px;
}
</style>
