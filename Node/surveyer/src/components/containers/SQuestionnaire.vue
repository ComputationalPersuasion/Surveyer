<template>
  <s-question :question="questionnaire.instruction"
              :req="req"
              @updateValidation="updateValidation">
    <SLikertTable :items="questionnaire.items"
                  :base_name="base_name"
                  extremOnly
                  :req="req"/>
  </s-question>
</template>

<script>
import { SLikertTable } from '.';
import { SQuestion } from '..';
import { Questionnaire } from '../mixins';

export default {
  name: 's-questionnaire',
  mixins: [Questionnaire],
  components: {
    SLikertTable,
    SQuestion,
  },
  created() {
    const { module, submodulesRegister, watchersRegister } = this.module(this.base_name);
    this.$store.registerModule(this.base_name.split('.'), module);
    submodulesRegister(this.$store);
    watchersRegister(this.$store);
  },
};
</script>