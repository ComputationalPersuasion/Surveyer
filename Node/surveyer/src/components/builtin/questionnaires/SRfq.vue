<template>
  <s-question :question="question">
    <SLikertTable :items="rfq.items" :data_name="data_name" extremOnly></SLikertTable>
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
    data_name: {
      type: String,
      default: 'rfq',
    },
    question: {
      type: String,
      default: RFQ.instruction,
    },
  },
  created() {
    const { module, submodulesRegister, watchersRegister } = RFQModule(this.data_name);
    this.$store.registerModule(this.data_name.split('.'), module);
    submodulesRegister(this.$store);
    watchersRegister(this.$store);
  },
};
</script>