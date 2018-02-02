<template>
  <div class="row justify-center">
    <div class="col-6">
      <div class="column">
        <div class="chatbox text-left round-borders q-field">
          <div class="text-center" v-if="messages.length === 0">
            No messages yet.
          </div>
          <s-chat-message v-else v-for="(msg, ind) of messages"
                          :key="ind"
                          :message="msg"
                          @click="showDialog(msg)"/>
        </div>
        <div>
          <q-input v-model="tosend"
                   :disable="disabled_input"
                   :after="[{icon: 'send', handler: handleSend}]"
                   @keypress.enter="handleSend"
                   disabled
                   inverted color="primary"
                   class="no-margin"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Dialog, QChatMessage, QInput } from 'quasar-framework';
import { SAge } from '../builtin/form';
import { SLikertRating } from '../core';
import SChatMessage from './SChatMessage';

export default {
  name: 's-chat',
  components: {
    QChatMessage,
    QInput,
    SAge,
    SLikertRating,
    SChatMessage,
  },
  data() {
    return {
      messages: [],
      tosend: '',
    };
  },
  props: {
    disabled_input: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    startConversation() {
      this.messages.push({
        msgs: ['Hi!', 'Please note that you cannot type in your aswers.'],
        from: 'Me',
      });
      axios.post('http://localhost:5000/firstcontact', {
        userid: this.$store.getters['prolific/id/value'],
        features: {
          O: this.$store.getters['tipi/O'],
          C: this.$store.getters['tipi/C'],
          E: this.$store.getters['tipi/E'],
          A: this.$store.getters['tipi/A'],
          N: this.$store.getters['tipi/N'],
          sex: this.$store.getters['demo/sex/value'],
        },
      }).then((response) => {
        this.messages.push({
          msgs: [
            'Let\'s start with a simple question.',
            response.data.arg,
          ],
          from: 'Me',
        });
        const cArgs = response.data.cArgs.map(
          arg => ({
            label: arg.arg,
            value: arg.tag }));
        this.askCounterArguments(response.data.arg, cArgs);
      });
    },
    /* askAge() {
      this.messages.push({
        text: 'Can I ask you your age?',
        type: 'age',
      });
    },
    askSex() {
      this.messages.push({
        text: 'What is your sex?',
        type: 'sex',
      });
    }, */
    askCounterArguments(originalArg, counterArgs) {
      this.messages.push({
        text: 'Please click to select you answer(s).',
        type: 'arg',
        arg: originalArg,
        cArgs: counterArgs,
      });
    },
    handleSend() {
      if (!this.disabled_input) {
        //
      }
    },
    showDialog(msg) {
      switch (msg.type) {
        case 'arg':
          this.showArgDialog(msg.arg, msg.cArgs);
          break;
        /* case 'age':
          this.showAgeDialog();
          break;
        case 'sex':
          this.showSexDialog();
          break; */
        default:
          break;
      }
    },
    showSexDialog() {
      Dialog.create({
        title: 'Please select your sex from the list below.',
        form: {
          sex: {
            type: 'radio',
            model: '',
            items: [
              { label: 'Female', value: 'Female' },
              { label: 'Male', value: 'Male' },
              { label: 'Other', value: 'Other' },
            ],
          },
        },
        buttons: [
          'Cancel',
          {
            label: 'Ok',
            handler: (data) => {
              this.messages.pop();
              this.messages.push({
                msgs: [data.sex],
                from: 'You',
                sent: true,
              });
            },
          },
        ],
      });
    },
    showAgeDialog() {
      Dialog.create({
        title: 'Please enter your age below.',
        form: {
          age: {
            type: 'number',
            min: 1,
            max: 99,
            label: 'Age',
          },
        },
        buttons: [
          'Cancel',
          {
            label: 'Ok',
            handler: (data) => {
              this.messages.pop();
              this.messages.push({
                msgs: [data.age],
                from: 'You',
                sent: true,
              });
            },
          },
        ],
      });
    },
    showArgDialog(arg, cArgs) {
      Dialog.create({
        title: arg,
        message: 'Please select the answer(s) that are explaining your situation.',
        form: {
          args: {
            type: 'checkbox',
            model: [],
            items: cArgs,
          },
        },
        buttons: [
          'Cancel',
          {
            label: 'Select',
            handler: (data) => {
              this.messages.pop();
              this.messages.push({
                msgs: [data.args.map(
                tag => cArgs.filter(
                  p => p.value === tag)[0].label).join(' and ')],
                from: 'You',
                sent: true,
              });
            },
          },
        ],
      });
    },
  },
};
</script>

<style>
.chatbox {
  padding: 10px 5px;
  border: solid 1px lightgrey;
  height: 400px;
  overflow: auto;
}
</style>
