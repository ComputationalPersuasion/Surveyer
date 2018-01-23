<template>
  <s-question :question="question"
              :req="req"
              @updateValidation="updateValidation">
    <SLikertTable :items="tipi.items"
                  :base_name="base_name"
                  extremOnly
                  :req="req"/>
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
    isValid() {
      return this.$children[0].isValid;
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
    req: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    updateValidation(val) {
      this.$emit('updateValidation', val);
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