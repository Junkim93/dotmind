<template>
  <div class="home">
    <Canvas msg="DOTMIND" />
    <Palette />
  </div>
</template>

<script>
// @ is an alias to /src
import Canvas from "@/components/Canvas";
import Palette from "@/components/Palette";

export default {
  name: "home",
  components: {
    Canvas,
    Palette
  }
};
</script>
