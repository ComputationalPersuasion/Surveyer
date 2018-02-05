<template>
  <q-chat-message v-if="message.msgs"
                  :name="message.from"
                  :text="message.msgs"
                  :sent="message.sent"
                  :bg-color="(message.sent ? 'primary' : 'light')"
                  :text-color="(message.sent ? 'white' : 'black')"
                  class="animate-fade"
                  avatar="static/chococat.png"/>
  <q-chat-message v-else
                  name="Me"
                  bg-color="light"
                  class="animate-fade"
                  avatar="static/chococat.png">
    <div class="cursor-pointer" @click="$emit('click')">
      {{message.text}}
    </div>
  </q-chat-message>
</template>

<script>
import { QChatMessage } from 'quasar-framework';

export default {
  name: 's-chat-message',
  components: {
    QChatMessage,
  },
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.q-message-received .q-message-text:last-child:before {
  z-index: -1;
}
</style>
