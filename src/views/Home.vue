<template>
  <div class="home">
    <Canvas msg="DOTMIND" />
  </div>
</template>

<script>
// @ is an alias to /src
import Canvas from "@/components/Canvas";

export default {
  name: "home",
  components: {
    Canvas
  }
};
</script>
