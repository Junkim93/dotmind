<template>
  <div class="home-container">
    <header>
      <Nav />
    </header>
    <div class="contents-container">
      <Canvas class="canvas-container" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/layouts/Nav.vue';
import Canvas from '@/components/paintings/Canvas.vue';

export default {
  components: {
    Nav,
    Canvas,
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/gameView.scss';
</style>
