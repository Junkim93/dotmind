<template>
  <div class="canvas">
    <div
      class="canvas__wrapper"
      v-for="(column, columnKey) in pixelData"
      :key="`column${columnKey}`"
    >
      <span
        class="canvas__wrapper-pixel"
        v-for="(row, rowKey) in column"
        :key="`row${rowKey}`"
        :id="row.id"
        :style="{ backgroundColor: row.bgColor }"
        @mousedown.prevent="startDrawing"
        @mousemove.prevent="keepDrawing"
        @mouseup.prevent="endDrawing"
      ></span>
    </div>
    <Pallete @update-color="changeColor"></Pallete>
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
import Pallete from '@/components/Pallete';

export default {
  components: { Pallete },
  data() {
    return {
      framePixel: 16,
      pixelData: [],
      isDrawing: false,
      currentColor: 'black',
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
      this.pixelData = this.pixelData.map((column, columnIndex) => {
        return column.reduce((acc, row, rowIndex) => {
          acc.push({ id: `${columnIndex}+${rowIndex}`, bgColor: '' });
          return acc;
        }, []);
      });
    },

    paintPixel(v) {
      const targetPixel = v.toElement.id.split('+');
      const columnKey = targetPixel[0];
      const rowKey = targetPixel[1];

      this.pixelData[columnKey][rowKey].bgColor = this.currentColor;
    },

    startDrawing(v) {
      this.isDrawing = true;
      this.paintPixel(v);
    },

    keepDrawing(v) {
      if (this.isDrawing) {
        this.paintPixel(v);
      }
    },

    endDrawing() {
      this.isDrawing = false;
    },

    changeColor(v) {
      this.currentColor = v;
    },

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
  },
};
</script>

<style lang="scss" scoped>
.canvas {
  &__wrapper {
    width: 100%;
    height: 33px;

    &-pixel {
      display: inline-block;
      width: 32px;
      height: 32px;
      border: 1px solid rgba(105, 105, 105, 0.333);

      &:hover {
        background-color: rgb(61, 240, 85);
      }
    }
  }
}
</style>
