<template>
  <div id="app">
    <s-survey>
      <h1 slot="header">Cycling in the city</h1>
      <s-step>
        <s-cond :condition="rand(2)" data_name="cond_psycho">
          <s-cond-block :condition_value="0">
            <s-tipi />
          </s-cond-block>

          <s-cond-block :condition_value="1">
            <s-rfq />
          </s-cond-block>
        </s-cond>

        <!--<s-cond :condition="other('cond_psycho')" data_name="cond_toto">
          <s-cond-block :condition_value="0">
            <el-card>
              TIPI above.
            </el-card>
          </s-cond-block>
          <s-cond-block :condition_value="1">
            <el-card>
              RFQ above.
            </el-card>
          </s-cond-block>
        </s-cond>-->
      </s-step>
        <!--<SLikertTable :items="tipi.items" data_name="tipi" extremOnly @update:tipi="updateTipi"></SLikertTable>-->
      <!--<el-card>
        O: {{O}} C: {{C}} E: {{E}} A: {{A}} N: {{N}}
      </el-card>-->
      <!--<SQuestion :question="rfq.instruction">
        <SLikertTable :items="rfq.items" data_name="rfq" extremOnly @update:rfq="updateRFQ"></SLikertTable>
      </SQuestion>-->
      <!--<el-card>
        pre: {{prevention}} pro: {{promotion}}
      </el-card>-->
      <s-step>
        <s-question question="Please enter some preliminary information.">
          <s-form data_name="demo">
            <s-age data_name="age" req/>
            <s-sex data_name="sex" req/>
          </s-form>
        </s-question>
      </s-step>

      <s-step>
        <s-question>
          <s-chat/>
        </s-question>
      </s-step>
      <!--<SQuestion>
        <SSelect data_name="sex" :items="sex.items"></SSelect>
      </SQuestion>

      <SQuestion>
        <SLikertRadio data_name="radio"></SLikertRadio>
      </SQuestion>-->

      <!--<SStep title="End">
        <el-card style="text-align:left; white-space:pre-wrap">
          {{JSON.stringify(this.$store.state, null, 4)}}
        </el-card>
      </SStep>-->
    </s-survey>
  </div>
</template>

<script>
import { SSurvey, SStep, SQuestion } from './components';
import { SCond, SCondBlock, randCond, otherCond } from './components/conditional';
import { SLikertTable, SChat } from './components/containers';
import { SSelect, SLikertRadio, SLikertSlider, SForm } from './components/core';
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
