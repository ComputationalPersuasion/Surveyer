<template>
  <s-questionnaire :questionnaire="questionnaire"
                   :module="module"
                   :req="req"
                   :base_name="base_name"
                   @updateValidation="updateValidation"/>
</template>

<script>
import { SQuestionnaire } from '../../containers';
import { Questionnaire } from '../../mixins';
import { RFQ } from '../../../questionnaires/personality';
import RFQModule from '../../../store/modules/RegulatoryFocusQuestionnaire';

export default {
  name: 's-rfq',
  mixins: [Questionnaire],
  components: {
    SQuestionnaire,
  },
  props: {
    base_name: {
      type: String,
      default: 'rfq',
    },
    questionnaire: {
      type: Object,
      default: () => RFQ,
    },
    module: {
      type: Function,
      default: RFQModule,
    },
  },
};
</script>