<template>
  <div class="home">
    <Canvas msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Canvas from '@/components/Canvas.vue';

export default {
  name: 'home',
  components: {
    Canvas
  }
};
</script>
