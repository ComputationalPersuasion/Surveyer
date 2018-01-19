<template>
  <q-card>
    <q-card-main>
      <h6 class="text-justify canwrap" v-if="question">{{question}} <span v-if="req" class="reqmark">*</span></h6>
      <slot>
        <span>No question asked.</span>
      </slot>
    </q-card-main>
  </q-card>
</template>

<script>
import { QCard, QCardMain } from 'quasar-framework';

export default {
  name: 's-question',
  data() {
    return {
      q_id: -1,
      children_valid_state: new Map(),
    };
  },
  components: {
    QCard,
    QCardMain,
  },
  props: {
    question: {
      type: String,
      default: null,
    },
    req: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    isValid() {
      return Array.from(this.children_valid_state.values()).every(p => p);
    },
  },
  created() {
    this.$on('updateVal', function updateVal(name, val) {
      this.children_valid_state.set(name, val);
      this.$parent.$emit('updateQuestion', this.q_id, this.isValid());
    });
  },
};
</script>
