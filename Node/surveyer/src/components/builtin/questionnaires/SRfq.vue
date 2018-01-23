<template>
  <s-question :question="question"
              :req="req"
              @updateValidation="updateValidation">
    <SLikertTable :items="rfq.items"
                  :base_name="base_name"
                  extremOnly
                  :req="req"/>
  </s-question>
</template>

<script>
import { SLikertTable } from '../../containers';
import { SQuestion } from '../../';
import { RFQ } from '../../../questionnaires/personality';
import RFQModule from '../../../store/modules/RegulatoryFocusQuestionnaire';

export default {
  name: 's-rfq',
  components: {
    SLikertTable,
    SQuestion,
  },
  computed: {
    rfq() {
      return RFQ;
    },
    isValid() {
      return this.$children[0].isValid;
    },
  },
  props: {
    base_name: {
      type: String,
      default: 'rfq',
    },
    question: {
      type: String,
      default: RFQ.instruction,
    },
    req: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    updateValidation(val) {
      this.$emit('updateValidation', val);
    },
  },
  created() {
    const { module, submodulesRegister, watchersRegister } = RFQModule(this.base_name);
    this.$store.registerModule(this.base_name.split('.'), module);
    submodulesRegister(this.$store);
    watchersRegister(this.$store);
  },
};
</script>