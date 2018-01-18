<template>
  <div>
    <q-chat-message v-for="(msg, ind) of messages"
                    :name="msg.from"
                    :text="msg.msgs"
                    :sent="msg.sent"
                    :key="ind"/>
  </div>
</template>

<script>
import { QChatMessage } from 'quasar-framework';

export default {
  name: 's-chat',
  components: {
    QChatMessage,
  },
  data() {
    return {
      messages: this.init_msgs,
    };
  },
  props: {
    init_msgs: {
      type: Array,
      default() {
        return [{
          msgs: ['Hi!'],
          from: 'me',
          sent: true,
        }];
      },
    },
  },
};
</script>