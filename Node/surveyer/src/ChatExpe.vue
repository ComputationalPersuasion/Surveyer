<template>
  <div id="app">
    <s-survey :submit_function="submit">
      <h1 slot="header">Cycling in the city</h1>
      <s-step>
        <s-question question="Hello,

        You are about to take part in a survey concerning cycling from home to work.

        This is completely anonymous and you can decide to stop your participation at any point in time.
        In addition, there is no right or wrong answer. We are only interested in what you think.

        Thank you, please proceed to the next page."/>
      </s-step>

      <s-step>
        <s-prolific-id :req="!testing"/>
        <s-question question="Please select your sex from the list." :req="!testing">
          <s-form base_name="demo">
            <s-sex :req="!testing"/>
          </s-form>
        </s-question>
      </s-step>

      <s-step>
        <s-tipi :req="!testing"/>
      </s-step>

      <s-step>
        <s-question question="What is your position towards cycling from home to work?" :req="!testing">
          <s-form base_name="belief">
            <s-slider error_message="Please select a value on the slider."
                      left_label="Negative"
                      center_label="Neutral"
                      right_label="Positive"
                      base_name="pre"
                      :min="-5"
                      :max="5"
                      :decimals="2"
                      :step="0.01"
                      :snap="false"
                      :markers="false"
                      :req="!testing"/>
          </s-form>
        </s-question>
        <s-question question="What is your position on the government investing in initiatives and infrastructures for cyclists?" :req="!testing">
          <s-form base_name="beliefgov">
            <s-slider error_message="Please select a value on the slider."
                      left_label="Negative"
                      center_label="Neutral"
                      right_label="Positive"
                      base_name="pre"
                      :min="-5"
                      :max="5"
                      :decimals="2"
                      :step="0.01"
                      :snap="false"
                      :markers="false"
                      :req="!testing"/>
          </s-form>
        </s-question>
      </s-step>

      <s-step>
        <s-question question="Please read and interact with the chat box below. You will not be able to type in your answer. However, you will be able to click on messages when asked to do so." :req="!testing">
          <q-btn v-if="!conversation_started"
                 color='primary' class="q-field"
                 @click="startConversation">
            Please click to start the conversation.
          </q-btn>
          <s-chat v-show="conversation_started"
                  disabled_input ref="chatbox"/>
        </s-question>
      </s-step>

      <s-step>
        <s-question question="What is your position now towards cycling from home to work?" :req="false">
          <s-form base_name="belief">
            <s-slider error_message="Please select a value on the slider."
                      left_label="Negative"
                      center_label="Neutral"
                      right_label="Positive"
                      base_name="post"
                      :min="-5"
                      :max="5"
                      :decimals="2"
                      :step="0.01"
                      :snap="false"
                      :markers="false"
                      :req="false"/>
          </s-form>
        </s-question>
        <s-question question="What is your position now on the government investing in initiatives and infrastructures for cyclists?" :req="false">
          <s-form base_name="beliefgov">
            <s-slider error_message="Please select a value on the slider."
                      left_label="Negative"
                      center_label="Neutral"
                      right_label="Positive"
                      base_name="post"
                      :min="-5"
                      :max="5"
                      :decimals="2"
                      :step="0.01"
                      :snap="false"
                      :markers="false"
                      :req="false"/>
          </s-form>
        </s-question>
        <s-question question="Do you have any additional argument(s) concerning cycling in the city  that you want to share with us?">
          <s-form base_name="newarg">
            <s-text-area :maxrows="20" base_name="text"/>
          </s-form>
        </s-question>
      </s-step>

      <s-submit ref="submit" message="Thank you for participating in this survey.

      Please enter the code XBQBQSZU on Prolific."/>
    </s-survey>
  </div>
</template>

<script>
import axios from 'axios';
import { QBtn } from 'quasar-framework';
import { SSurvey, SStep, SQuestion, SSubmit } from './components';
import { SSex } from './components/builtin/form';
import SProlificId from './components/builtin/questions/SProlificId';
import { STipi } from './components/builtin/questionnaires';
import { SForm, SInput, SSlider, STextArea } from './components/core';
import { SChat } from './components/containers';

export default {
  name: 'app',
  components: {
    SStep,
    SSurvey,
    SQuestion,
    SChat,
    SForm,
    SInput,
    SProlificId,
    SSlider,
    SSex,
    STipi,
    SSubmit,
    STextArea,
    QBtn,
  },
  data() {
    return {
      testing: false,
      conversation_started: false,
      submitted: false,
    };
  },
  mounted() {
    this.$store.watch(() => this.$store.getters['belief/pre/value'], (val) => {
      this.$store.commit('belief/post/update', val);
    });
    this.$store.watch(() => this.$store.getters['beliefgov/pre/value'], (val) => {
      this.$store.commit('beliefgov/post/update', val);
    });
  },
  methods: {
    startConversation() {
      this.conversation_started = true;
      this.$refs.chatbox.startConversation();
    },
    submit() {
      this.$refs.submit.show();
      axios.post('back/submit', {
        userid: this.$store.getters['prolific/id/value'],
        features: {
          postbel: this.$store.getters['belief/post/value'],
          postbelgov: this.$store.getters['beliefgov/post/value'],
          additionalarg: this.$store.getters['newarg/text/value'],
        },
      });
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
