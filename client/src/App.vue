<template>
  <div id="app">
    <Header />
    <Home class="test" />
  </div>
</template>

<script>
import Home from '@/views/Home.vue';

export default {
  components: {
    Home
  }
};
</script>

<style lang="scss">
@import url('./styles/reset.scss');

#app {
  font-family: 'DungGeunMo', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
