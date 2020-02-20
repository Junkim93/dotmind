<template>
  <div class="bg">
    <h1>도트 마인드</h1>
    <router-link :to="{ name: 'game' }">
      <button type="button" class="nes-btn is-primary">혼자 그림 그리기</button>
    </router-link>
    <router-link :to="{ name: 'multiGame' }">
      <button type="button" class="nes-btn is-success">같이 그림 그리기</button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg {
  text-align: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);

  > h1 {
    color: white;
    font-size: 50px;
    padding-bottom: 20px;
  }
}
</style>
