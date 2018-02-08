<template>
  <div class="row justify-center">
    <div class="col-6">
      <div class="column">
        <div class="chatbox text-left round-borders q-field" ref="chatbox">
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
import { Dialog, QChatMessage, QInput, format, scroll } from 'quasar-framework';
import { SAge } from '../builtin/form';
import { SLikertRating } from '../core';
import SChatMessage from './SChatMessage';

const { capitalize } = format;
const { animScrollTo, getScrollPosition } = scroll;

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
      valid: false,
    };
  },
  computed: {
    isValid() {
      return this.valid;
    },
  },
  props: {
    disabled_input: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    delayMessage(msg, timeout, merge = false) {
      const fn = merge
        ? () => this.messages[this.messages.length - 1].msgs.push(msg)
        : () => this.messages.push(msg);
      return new Promise(resolve => setTimeout(() => {
        fn();
        animScrollTo(this.$refs.chatbox, getScrollPosition(this.$refs.chatbox) + 100, 500);
        resolve();
      }, timeout));
    },
    terminateDialog() {
      return this.delayMessage({
        msgs: ['We do not have any additional argument to present.', 'Please proceed to the next page.'],
        from: 'Me',
      }, 1000).then(() => this.validateChat());
    },
    validateChat() {
      this.valid = true;
      this.$emit('updateValidation', true);
    },
    startConversation() {
      this.messages.push({
        msgs: ['Hi!', 'Let\'s start with a simple question.'],
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
          initbel: this.$store.getters['belief/pre/value'],
          initbelgov: this.$store.getters['beliefgov/pre/value'],
        },
      }).then((response) => {
        this.delayMessage({
          msgs: [
            capitalize(response.data.arg),
          ],
          from: 'Me',
        }, 1000).then(() => this.askCounterArguments([response.data], 1000));
      });
    },
    askCounterArguments(args, timeout) {
      return this.delayMessage({
        text: 'Please click to select you answer(s).',
        type: 'arg',
        arguments: args,
      }, timeout);
    },
    handleSend() {
      if (!this.disabled_input) {
        //
      }
    },
    showDialog(msg) {
      switch (msg.type) {
        case 'arg':
          this.showArgDialog(msg.arguments);
          break;
        default:
          break;
      }
    },
    capitalizeArg(arg) {
      return `${capitalize(arg)}${arg.endsWith('?') ? '' : '.'}`;
    },
    showArgDialog(args) {
      const formObj = {};
      args.forEach((a) => {
        if (a.cArgs.length === 0) {
          return;
        }
        formObj[`${a.tag}h`] = {
          type: 'heading',
          label: this.capitalizeArg(a.arg),
        };
        const capCArgs = a.cArgs.map(
          arg => ({ value: arg.tag, label: `${capitalize(arg.arg)}.` }));
        if (a.tag !== 'init') {
          capCArgs.push({ value: 'none', label: 'None of the above.' });
        }
        formObj[a.tag] = {
          type: 'checkbox',
          model: [],
          items: capCArgs,
        };
      });
      Dialog.create({
        title: 'Please select the answer(s) that are best explaining your situation for each argument.',
        form: formObj,
        buttons: [
          'Cancel',
          {
            label: 'Select',
            preventClose: true,
            handler: (data, close) => {
              let counterTags = [];
              const argsLbl = [];
              if (Object.values(data).some(choices => choices.length === 0)) {
                return;
              }
              this.messages.pop();
              Object.keys(data).forEach((tag) => {
                if (data[tag].includes('none')) {
                  return;
                }
                const a = args.filter(arg => arg.tag === tag)[0];
                counterTags = counterTags.concat(data[tag]);
                data[tag].forEach((cTag) => {
                  argsLbl.push(a.cArgs.filter(c => c.tag === cTag)[0].arg);
                });
              });
              if (argsLbl.length === 0) {
                this.messages.push({
                  msgs: ['None of the above.'],
                  from: 'You',
                  sent: true,
                });
              } else {
                this.messages.push({
                  msgs: [`${capitalize(argsLbl.join(' and '))}.`],
                  from: 'You',
                  sent: true,
                });
              }
              axios.post('http://localhost:5000/post_arguments', {
                userid: this.$store.getters['prolific/id/value'],
                args: counterTags,
              }).then((response) => {
                close();
                if (response.data.length === 0) {
                  this.terminateDialog();
                } else {
                  const [first, ...rest] = response.data;
                  let prom = this.delayMessage({
                    msgs: [this.capitalizeArg(first.arg)],
                    from: 'Me',
                  }, 1000);
                  rest.forEach((arg) => {
                    prom = prom.then(() =>
                      this.delayMessage(this.capitalizeArg(arg.arg), 1000, true));
                  });
                  prom.then(() => {
                    if (response.data.every(a => a.cArgs.length === 0)) {
                      return this.terminateDialog();
                    }
                    return this.askCounterArguments(response.data, 1000);
                  });
                }
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
  padding: 10px 20px;
  border: solid 1px lightgrey;
  height: 400px;
  overflow: auto;
}

.modal-scroll {
  max-height: 300px;
}
</style>
