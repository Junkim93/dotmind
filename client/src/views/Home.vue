<template>
  <div class="home-container">
    <header>
      <Nav />
      <Game />
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
import Game from '@/components/Game.vue';

export default {
  name: 'home',
  components: {
    Nav,
    Canvas,
    Chat,
    Game
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
