<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from '@/views/Home.vue';
export default {
  components: { Home }
};
</script>

<style>
@import './assets/styles/reset.scss';

#app {
  font-family: 'Press Start 2P', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 30px;
}

/* pixel 화면 스타일 */
table,
tr,
td {
  border: silver 1px dotted;
}

table {
  border-collapse: collapse;
}

tr {
  height: 20px;
}

td {
  min-width: 20px;
  box-sizing: border-box;
}
</style>
