<template>
  <div class="home">
    <Canvas msg="DOTMIND" />
    <Chat />
  </div>
</template>

<script>
// @ is an alias to /src
import Canvas from '@/components/Canvas';
import Chat from '@/components/Chat';

export default {
  name: 'home',
  components: {
    Canvas,
    Chat
  }
};
</script>
