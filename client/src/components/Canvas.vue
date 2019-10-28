<template>
  <div class="canvas">
    <table
      class="pixel-canvas"
      ref="pixel"
      @mousedown="isDrawing"
      @mouseup="isntDrawing"
      @mouseover.prevent="paintPixelSocket"
    ></table>

    <div class="palette">
      <swatches v-model="currentColor" colors="text-basic" inline />
      <button class="nes-btn" @click.prevent="eraseCanvasSocket">CLEAR</button>
    </div>
  </div>
</template>

<script>
import Swatches from 'vue-swatches';
import 'vue-swatches/dist/vue-swatches.min.css';
import io from 'socket.io-client';
const URI = 'https://thawing-chamber-58948.herokuapp.com/';

export default {
  components: { Swatches },
  data() {
    return {
      pixelWidth: 32,
      pixelHeight: 32,
      drawing: false,
      currentColor: 'black',
      socket: io(URI)
    };
  },
  methods: {
    makeGrid() {
      for (let i = 0; i < this.pixelHeight; i += 1) {
        const gridRow = document.createElement('tr');
        this.$refs.pixel.appendChild(gridRow);

        for (let j = 0; j < this.pixelWidth; j += 1) {
          const gridCell = document.createElement('td');
          gridCell.key = String(i) + String(j);
          gridRow.appendChild(gridCell);
        }
      }
    },
    isDrawing(e) {
      this.drawing = true;
      this.paintPixelSocket(e);
    },
    isntDrawing() {
      this.drawing = false;
    },
    paintPixelSocket(e) {
      if (this.drawing && e.target.tagName === 'TD') {
        e.target.style.backgroundColor = this.currentColor;
        const pixelData = { key: e.target.key, color: this.currentColor };
        this.socket.emit('newPixelData', pixelData);
      }
    },
    eraseCanvas() {
      this.$refs.pixel.querySelectorAll('td').forEach(td => (td.style.backgroundColor = 'white'));
    },
    eraseCanvasSocket() {
      this.eraseCanvas();
      this.socket.emit('eraseCanvasSign');
    }
  },
  mounted() {
    this.makeGrid();

    this.socket.on('paintPixel', data => {
      this.$refs.pixel.querySelectorAll('td').forEach(td => {
        if (td.key === data.key) {
          td.style.backgroundColor = data.color;
        }
      });
    });

    this.socket.on('eraseCanvas', () => {
      this.eraseCanvas();
    });
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
