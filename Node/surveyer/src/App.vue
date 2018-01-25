<template>
  <div id="app">
    <s-survey>
      <h1 slot="header">Arguments</h1>
      <s-step>
        <s-question question="Hello and welcome,

            You are about to take part in an experiment in which you will be asked about your beliefs on different topics. For each topic, we will also present you with arguments extracted from actual debates taking place on a debating forum. These arguments are representing all points of view and do not reflect ours, only those of the participants of these debates. There is no right or wrong answer.

            In addition, it is completely anonymous and you can decide to withdraw from the experiment at any point in time.

            Thank you."/>
      </s-step>

      <s-step>
        <s-prolific-id :req="!testing"/>
      </s-step>

      <s-step>
        <s-question question="We will first start with some questions about yourself.

            Please proceed to the next page."/>
      </s-step>

      <s-step>
        <s-tipi :req="!testing"/>
      </s-step>

      <s-step>
        <s-rfq :req="!testing"/>
      </s-step>

      <s-step>
        <s-question question="Please enter some additional information.">
          <s-form base_name="demo">
            <s-age base_name="age" :req="!testing"/>
            <s-sex base_name="sex" :req="!testing"/>
          </s-form>
        </s-question>
      </s-step>

      <template v-for="topic in args.themes">
        <s-step :key="topic.tag + '-intro'">
          <s-question :question="`We are now going to ask you a few questions on how you feel about ${topic.name}.
              There is no right or wrong answer, all we are interested in is what you believe.`"/>
        </s-step>

        <s-step :key="topic.tag + '-prefbel'">
          <s-question :question="topic.question">
            <s-form :base_name="'pre-' + topic.tag">
              <s-slider base_name="belief"
                        :min="-5"
                        :max="5"
                        :step="0.01"
                        :snap="false"
                        :markers="false"
                        :label_value="label => `${parseFloat(label).toFixed(2)}`"
                        left_label="No"
                        center_label="Neutral"
                        right_label="Yes"
                        :req="!testing"/>
            </s-form>
          </s-question>
        </s-step>

        <s-step :key="topic.tag + '-arg'">
          <s-with :base_name="topic.tag"
                  :vars="{procon: otherFun('pre-' + topic.tag + '.belief', (val) => ((val < 0) ? 'pro' : 'con')),
                          emotfact: randItems('emot', 'fact'),
                          gainloss: randItems('gain', 'loss')}">
            <template slot-scope="withV">
              <s-question>
                  <h6 class="text-left">
                    {{topic.arguments[withV.vars.procon()][withV.vars.emotfact][withV.vars.gainloss]}}
                  </h6>
              </s-question>
            </template>
          </s-with>
          <s-question question="How good do you think this argument is?">
            <s-form :base_name="topic.tag">
              <s-slider base_name="good"
                        :min="-5"
                        :max="5"
                        :step="0.01"
                        :snap="false"
                        :markers="false"
                        left_label="Bad"
                        center_label="Neutral"
                        right_label="Good"
                        :label_value="label => `${parseFloat(label).toFixed(2)}`"
                        :req="!testing"/>
            </s-form>
          </s-question>
          <s-question :question="topic.question">
            <s-form :base_name="'post-' + topic.tag">
              <s-slider base_name="belief"
                        :min="-5"
                        :max="5"
                        :step="0.01"
                        :snap="false"
                        :markers="false"
                        :label_value="label => `${parseFloat(label).toFixed(2)}`"
                        left_label="No"
                        center_label="Neutral"
                        right_label="Yes"
                        :req="!testing"/>
            </s-form>
          </s-question>
        </s-step>
      </template>
    </s-survey>
  </div>
</template>

<script>
import { SSurvey, SStep, SQuestion } from './components';
import { SWith, randCond, otherCond, randItemsCond, otherFunCond } from './components/conditional';
import { SLikertTable, SChat } from './components/containers';
import { SSelect, SForm, SInput, SLikertRating, SSlider } from './components/core';
import { SSex, SAge, SProlificId } from './components/builtin/form';
import { STipi, SRfq } from './components/builtin/questionnaires';
import Arguments from './questionnaires/arguments';

export default {
  name: 'app',
  components: {
    SLikertTable,
    SQuestion,
    SForm,
    SSex,
    SAge,
    STipi,
    SRfq,
    SSelect,
    SWith,
    SStep,
    SSurvey,
    SChat,
    SInput,
    SLikertRating,
    SSlider,
    SProlificId,
  },
  data() {
    return {
      testing: true,
    };
  },
  computed: {
    args() {
      return Arguments;
    },
  },
  methods: {
    rand: randCond,
    other: otherCond,
    randItems: randItemsCond,
    otherFun: otherFunCond,
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
