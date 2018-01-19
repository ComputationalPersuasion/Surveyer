<template>
  <div id="app">
    <s-survey>
      <h1 slot="header">Arguments</h1>
      <s-step>
        <s-question>
          <h6 class="text-left canwrap">Hello and welcome,

You are about to take part in an experiment in which you will be asked about your beliefs on different topics. For each topic, we will also present you with arguments extracted from actual debates taking place on a debating forum. These arguments are representing all points of view and do not reflect ours, only those of the participants of these debates. There is no right or wrong answer.

In addition, it is completely anonymous and you can decide to withdraw from the experiment at any point in time.

Thank you.</h6>
        </s-question>
      </s-step>

      <s-step>
        <s-question question="Please enter your Prolific ID.">
          <s-form data_name="prolific">
            <s-input label="Prolific ID"
                    data_name="id"
                    error_message="Please enter a valid Prolific ID."
                    req/>
          </s-form>
        </s-question>
      </s-step>

      <s-step>
        <s-question>
          <h6 class="text-left canwrap">We will first start with some questions about yourself.

Please proceed to the next page.</h6>
        </s-question>
      </s-step>

      <s-step>
        <s-tipi />
      </s-step>

      <s-step>
        <s-rfq />
      </s-step>

      <s-step>
        <s-question question="Please enter some additional information.">
          <s-form data_name="demo">
            <s-age data_name="age" req/>
            <s-sex data_name="sex" req/>
          </s-form>
        </s-question>
      </s-step>

      <s-step>
        <s-question>
          <h6 class="text-left canwrap">We are now going to ask you a few questions on how you feel about abortion. There is no right or wrong answer, all we are interested in is what you believe.</h6>
        </s-question>
      </s-step>
    </s-survey>
  </div>
</template>

<script>
import { SSurvey, SStep, SQuestion } from './components';
import { SCond, SCondBlock, randCond, otherCond } from './components/conditional';
import { SLikertTable, SChat } from './components/containers';
import { SSelect, SLikertRadio, SLikertSlider, SForm, SInput } from './components/core';
import { SSex, SAge } from './components/builtin/form';
import { STipi, SRfq } from './components/builtin/questionnaires';

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
    SLikertRadio,
    SLikertSlider,
    SCond,
    SCondBlock,
    SStep,
    SSurvey,
    SChat,
    SInput,
  },
  methods: {
    rand: randCond,
    other: otherCond,
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
