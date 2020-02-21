<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import 'nes.css/css/nes.css';
export default {};
</script>

<style lang="scss">
@import url('./assets/styles/reset.scss');
@font-face {
  font-family: DungGeunMo;
  src: url('./assets/fonts/DungGeunMo.woff2') format('woff2');
}
html {
  background-color: #63666a;
}
#app {
  font-family: 'DungGeunMo', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
