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
import { Tipi } from '../../../questionnaires/personality';
import TipiModule from '../../../store/modules/Tipi';

export default {
  name: 's-tipi',
  mixins: [Questionnaire],
  components: {
    SQuestionnaire,
  },
  props: {
    base_name: {
      type: String,
      default: 'tipi',
    },
    questionnaire: {
      type: Object,
      default: () => Tipi,
    },
    module: {
      type: Function,
      default: TipiModule,
    },
  },
};
</script>