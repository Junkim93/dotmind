<template>
  <div class="canvas">
    <div ref="canvasImage" class="canvas__wrapper">
      <div
        v-for="(column, columnKey) in pixelData"
        :key="`column${columnKey}`"
        class="canvas__wrapper__column"
      >
        <span
          v-for="(row, rowKey) in column"
          :id="row.id"
          :key="`row${rowKey}`"
          class="canvas__wrapper__row"
          :style="{ backgroundColor: row.bgColor }"
          @mousedown.prevent="startDrawing"
          @mousemove.prevent="keepDrawing"
          @mouseup.prevent="endDrawing"
        />
      </div>
    </div>
    <Pallete @update-color="changeColor" />
    <div class="canvas__utils">
      <button class="nes-btn is-error canvas__utils__clear" @click="clearPaint">모두 지우기</button>
      <button class="nes-btn canvas__utils__download" @click="downloadImg">그림 다운로드</button>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import domtoimage from "dom-to-image";
import download from "downloadjs";
import Pallete from "./Pallete";

const URI = process.env.PORT
  ? "https://dot-mind.herokuapp.com/multi-game"
  : "http://localhost:4000/multi-game";
const socket = io(URI);

export default {
  components: { Pallete },

  props: {
    multiMode: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      framePixel: 16,
      pixelData: [],
      isDrawing: false,
      currentColor: "black"
    };
  },

  created() {
    this.initPixelData();
    this.setPixelData();
  },

  mounted() {
    this.receivePaint();
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
          acc.push({ id: `${columnIndex}+${rowIndex}`, bgColor: "" });
          return acc;
        }, []);
      });
    },

    paintPixel(v) {
      const targetPixel = v.toElement.id.split("+");
      const columnKey = targetPixel[0];
      const rowKey = targetPixel[1];

      this.pixelData[columnKey][rowKey].bgColor = this.currentColor;

      if (this.multiMode) {
        this.sendPaint({
          columnKey: columnKey,
          rowKey: rowKey,
          color: this.currentColor
        });
      }
    },

    sendPaint(targetInfo) {
      socket.emit("paintInfo", targetInfo);
    },

    receivePaint() {
      socket.on("receivePaintInfo", target => {
        this.pixelData[target.columnKey][target.rowKey].bgColor = target.color;
      });
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

    async downloadImg() {
      const node = this.$refs.canvasImage;
      const blob = await domtoimage.toBlob(node);
      download(blob, "undefined.png", "image/png");
    },

    clearPaint() {
      for (let i = 0; i < this.pixelData.length; i += 1) {
        for (let j = 0; j < this.pixelData.length; j += 1) {
          this.pixelData[i][j].bgColor = "";
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.canvas {
  padding: 0 30px;

  &__wrapper {
    background-image: linear-gradient(
        45deg,
        #e2e2e2 25%,
        transparent 25%,
        transparent 75%,
        #e2e2e2 75%,
        #e2e2e2
      ),
      linear-gradient(
        45deg,
        #e2e2e2 25%,
        transparent 25%,
        transparent 75%,
        #e2e2e2 75%,
        #e2e2e2
      );
    background-color: #fdfdfd;
    background-size: 30px 30px;
    background-position: 0 0, 15px 15px;

    border: 2px solid rgb(97, 97, 97);

    &__column {
      width: 100%;
      height: 30px;
    }
    &__row {
      display: inline-block;
      width: 30px;
      height: 30px;
      border: 1px solid rgba(105, 105, 105, 0.333);

      &:hover {
        background-color: #efed97;
      }
    }
  }
  &__utils {
    display: flex;
    justify-content: center;
    margin: 20px 0;

    &__download,
    &__clear {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
}
</style>
