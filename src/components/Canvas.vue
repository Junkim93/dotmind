<template>
  <div class="canvas">
    <h1>{{ msg }}</h1>
    <table class="pixel-canvas"></table>
  </div>
</template>

<script>
export default {
  name: "Canvas",
  props: {
    msg: String
  },
  data() {
    return {
      pixelWidth: 32,
      pixelHeight: 32
    };
  },
  methods: {
    makeGrid() {
      const pixelCanvas = document.querySelector(".pixel-canvas");
      for (let i = 0; i < this.pixelHeight; i += 1) {
        const gridRow = document.createElement("tr");
        pixelCanvas.appendChild(gridRow);

        for (let j = 0; j < this.pixelWidth; j += 1) {
          const gridCell = document.createElement("td");
          gridRow.appendChild(gridCell);
          console.log(i, j);
        }
      }
    }
  },
  mounted() {
    this.makeGrid();
  }
};
</script>

<style scoped>
.canvas {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.pixel-canvas {
  background-color: white;
}
</style>
