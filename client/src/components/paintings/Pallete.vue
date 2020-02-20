<template>
  <div class="pallete">
    <div class="pallete-wrapper" v-for="(item, index) in color" :key="index">
      <button
        class="nes-btn pallete-wrapper__paint"
        :style="{ backgroundColor: item }"
        @click.prevent="emitColor(item)"
      />
    </div>
    <button
      class="nes-btn pallete-wrapper__eraser"
      @click.prevent="emitColor('')"
    >
      지우개
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: [
        '#ffffff',
        '#000000',
        '#fe0000',
        '#fd7500',
        '#FEF400',
        '#02fe00',
        '#0595FF',
        '#D201FD',
      ],
      currentColor: '',
    };
  },

  methods: {
    emitColor(item) {
      this.currentColor = item;
      this.$emit('update-color', this.currentColor);
    },
  },
};
</script>

<style lang="scss" scoped>
.pallete {
  display: flex;
  justify-content: center;
  margin: 10px 0;

  &-wrapper {
    &__paint,
    &__eraser {
      width: 35px;
      height: 35px;
      margin: 5px;
    }
    &__eraser {
      width: 70px;
      font-size: 15px;
      text-align: center;
    }
  }
}
</style>
