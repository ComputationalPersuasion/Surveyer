<template>
  <s-question :question="question" req>
    <SLikertTable :items="tipi.items" :base_name="base_name" extremOnly></SLikertTable>
  </s-question>
</template>

<script>
import { SLikertTable } from '../../containers';
import { SQuestion } from '../../';
import { Tipi } from '../../../questionnaires/personality';
import TipiModule from '../../../store/modules/Tipi';

export default {
  name: 's-tipi',
  components: {
    SLikertTable,
    SQuestion,
  },
  computed: {
    tipi() {
      return Tipi;
    },
  },
  props: {
    base_name: {
      type: String,
      default: 'tipi',
    },
    question: {
      type: String,
      default: Tipi.instruction,
    },
  },
  created() {
    const { module, submodulesRegister, watchersRegister } = TipiModule(this.base_name);
    this.$store.registerModule(this.base_name.split('.'), module);
    submodulesRegister(this.$store);
    watchersRegister(this.$store);
  },
};
</script>