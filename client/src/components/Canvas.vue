<template>
  <div class="canvas">
    <h1>{{ msg }}</h1>
    <table
      class="pixel-canvas"
      ref="pixel"
      @mousedown="isDrawing"
      @mouseup="isntDrawing"
      @mouseover="paintPixel"
    ></table>

    <div class="palette">
      <swatches v-model="currentColor" inline />
      <button class="palette-eraser" @click.prevent="eraseAllPalette">CLEAR</button>
    </div>
  </div>
</template>

<script>
import Swatches from 'vue-swatches';
import 'vue-swatches/dist/vue-swatches.min.css';
import io from 'socket.io-client';

export default {
  name: 'Canvas',
  props: {
    msg: String
  },
  components: { Swatches },
  data() {
    return {
      pixelWidth: 32,
      pixelHeight: 32,
      drawing: false,
      currentColor: 'black',
      socket: io('http://localhost:4000/')
    };
  },
  methods: {
    makeGrid() {
      const pixelCanvas = this.$refs.pixel;
      for (let i = 0; i < this.pixelHeight; i += 1) {
        const gridRow = document.createElement('tr');
        pixelCanvas.appendChild(gridRow);

        for (let j = 0; j < this.pixelWidth; j += 1) {
          const gridCell = document.createElement('td');
          gridRow.appendChild(gridCell);
        }
      }
    },
    isDrawing(e) {
      this.drawing = true;
      this.paintPixel(e);
    },
    isntDrawing() {
      this.drawing = false;
    },
    paintPixel(e) {
      if (this.drawing && e.target.tagName === 'TD')
        e.target.style.backgroundColor = this.currentColor;
    },
    eraseAllPalette() {
      const pixelCanvas = this.$refs.pixel;
      pixelCanvas.querySelectorAll('td').forEach(td => (td.style.backgroundColor = 'white'));
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
