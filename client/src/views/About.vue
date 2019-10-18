<template>
  <div class="about">
    <Chat msg="This is chat room" />
  </div>
</template>

<script>
import Chat from '@/components/Chat.vue';

export default {
  name: 'about',
  components: {
    Chat
  }
};
</script>
