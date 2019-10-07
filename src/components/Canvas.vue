<template>
  <div class="canvas">
    <h1>{{ msg }}</h1>
    <table
      class="pixel-canvas"
      @mousedown="isTrueDrawing"
      @mouseleave="isFalseDrawing"
      @mouseup="isFalseDrawing"
      @mouseover="paintPixel"
    ></table>

    <div class="palette">
      <swatches v-model="currentColor" />
    </div>
  </div>
</template>

<script>
import Swatches from "vue-swatches";
import "vue-swatches/dist/vue-swatches.min.css";

export default {
  name: "Canvas",
  props: {
    msg: String
  },
  components: { Swatches },
  data() {
    return {
      pixelWidth: 32,
      pixelHeight: 32,
      isDrawing: false,
      currentColor: "black"
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
        }
      }
    },
    isTrueDrawing(e) {
      this.isDrawing = true;
      this.paintPixel(e);
    },
    isFalseDrawing() {
      this.isDrawing = false;
    },
    paintPixel(e) {
      if (this.isDrawing && e.target.tagName === "TD")
        e.target.style.backgroundColor = this.currentColor;
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
