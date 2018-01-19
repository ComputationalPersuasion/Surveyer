<template>
  <s-question :question="question" req>
    <SLikertTable :items="rfq.items" :base_name="base_name" extremOnly></SLikertTable>
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
  },
  created() {
    const { module, submodulesRegister, watchersRegister } = RFQModule(this.base_name);
    this.$store.registerModule(this.base_name.split('.'), module);
    submodulesRegister(this.$store);
    watchersRegister(this.$store);
  },
};
</script>