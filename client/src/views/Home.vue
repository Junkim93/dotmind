<template>
  <div class="home-container">
    <header>
      <Nav />
    </header>
    <div class="contents-container">
      <Canvas class="canvas-container" />
      <Chat class="chat-container" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue';
import Canvas from '@/components/Canvas.vue';
import Chat from '@/components/Chat.vue';

export default {
  name: 'home',
  components: {
    Nav,
    Canvas,
    Chat
  }
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.contents-container {
  display: flex;
  justify-content: space-around;
  flex: 1;
}
</style>
