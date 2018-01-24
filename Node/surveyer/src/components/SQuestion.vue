<template>
  <q-card class="question">
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
      children_valid_state: [],
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
  computed: {
    isValid() {
      return this.children_valid_state.every(p => p);
    },
  },
  mounted() {
    let ind = 0;
    this.$slots.default.forEach((node) => {
      if (node.componentInstance) {
        const valid = node.componentInstance.isValid;
        if (valid !== undefined) {
          this.children_valid_state.push(node.componentInstance.isValid);
          node.componentInstance.$on('updateValidation', (function handler(q, index) {
            return function update(val) {
              q.$set(q.children_valid_state, index, val);
              q.$emit('updateValidation', q.isValid);
            };
          }(this, ind)));
          ind += 1;
        }
      }
    });
  },
};
</script>

<style>
.question + .question {
  margin-top: 20px;
}
</style>
