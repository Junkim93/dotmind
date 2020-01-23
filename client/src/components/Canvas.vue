<template>
  <div class="canvas">
    <div v-for="(column, columnKey) in pixelData" :key="columnKey">
      <span v-for="(row, rowKey) in column" :key="rowKey">{{ row.text }}</span>
    </div>
    <!-- <table
      class="pixel-canvas"
      ref="pixel"
      @mousedown="isDrawing"
      @mouseup="isntDrawing"
      @mouseover.prevent="paintPixelSocket"
    ></table>-->

    <!-- <div class="palette">
      <swatches v-model="currentColor" colors="text-basic" inline />
      <button class="nes-btn" @click.prevent="eraseCanvasSocket">CLEAR</button>
    </div>-->
  </div>
</template>

<script>
// import Swatches from 'vue-swatches';
// import 'vue-swatches/dist/vue-swatches.min.css';
// import io from 'socket.io-client';
// const URI = 'https://thawing-chamber-58948.herokuapp.com/';
// const local = 'http://localhost:3000/';

export default {
  // components: { Swatches },
  data() {
    return {
      framePixel: 16,
      pixelData: [],
      drawing: false,
      currentColor: 'black'
      // socket: io(local)
    };
  },

  created() {
    this.initPixelData();
    this.setPixelData();
  },

  mounted() {
    // this.socket.on('paintPixel', data => {
    //   this.$refs.pixel.querySelectorAll('td').forEach(td => {
    //     if (td.key === data.key) {
    //       td.style.backgroundColor = data.color;
    //     }
    //   });
    // });
    // this.socket.on('eraseCanvas', () => {
    //   this.eraseCanvas();
    // });
  },

  methods: {
    initPixelData() {
      const newArr = Array.apply(null, Array(this.framePixel));
      this.pixelData = newArr.map(el => {
        el = newArr;
        return el;
      });
    },
    setPixelData() {
      this.pixelData = this.pixelData.map(height => {
        return height.reduce((acc, width, i) => {
          acc.push({ id: i, color: 'red' + i, text: '❌' });
          return acc;
        }, []);
      });
      // this.pixels.flatMap(el => {
      // })
      // this.pixels = this.pixels.reduce((acc, curr, i) => {
      //   acc[i];
      // }, []);
      // for (let i = 0; i < this.pixelHeight; i += 1) {
      //   const gridRow = document.createElement('tr');
      //   this.$refs.pixel.appendChild(gridRow);
      //   for (let j = 0; j < this.framePixel; j += 1) {
      //     const gridCell = document.createElement('td');
      //     gridCell.key = String(i) + String(j);
      //     gridRow.appendChild(gridCell);
      //   }
      // }
    }
    // isDrawing(e) {
    //   this.drawing = true;
    //   this.paintPixelSocket(e);
    // },
    // isntDrawing() {
    //   this.drawing = false;
    // },
    // paintPixelSocket(e) {
    //   if (this.drawing && e.target.tagName === 'TD') {
    //     e.target.style.backgroundColor = this.currentColor;
    //     const pixelData = { key: e.target.key, color: this.currentColor };
    //     this.socket.emit('newPixelData', pixelData);
    //   }
    // },
    // eraseCanvas() {
    //   this.$refs.pixel.querySelectorAll('td').forEach(td => (td.style.backgroundColor = 'white'));
    // },
    // eraseCanvasSocket() {
    //   this.eraseCanvas();
    //   this.socket.emit('eraseCanvasSign');
    // }
  }
};
</script>

<style scoped>
.canvas {
}

.pixel-canvas {
  background-color: white;
}
</style>
