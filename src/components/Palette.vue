<template>
  <div id="Palette">
    <swatches v-model="color" />
  </div>
</template>

<script>
import Swatches from "vue-swatches";
import "vue-swatches/dist/vue-swatches.min.css";

export default {
  components: { Swatches },
  data() {
    return {
      color: "#1CA085"
    };
  }
};
</script>