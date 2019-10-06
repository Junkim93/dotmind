<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
export default {
  components: { Home }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
