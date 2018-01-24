<template>
  <div class="with">
    <slot :vars="transformed_vars">
    </slot>
  </div>
</template>

<script>
export default {
  name: 's-with',
  data() {
    return {
      question_valid_state: [],
    };
  },
  props: {
    base_name: {
      type: String,
      required: true,
    },
    vars: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isValid() {
      return this.question_valid_state.every(p => p);
    },
    transformed_vars() {
      return Object.assign({}, ...Object.entries(this.vars).map(
        ([key, f]) => ({ [key]: f(this.$store) })));
    },
  },
  mounted() {
    let ind = 0;
    this.$children.forEach((node) => {
      const valid = node.isValid;
      if (valid !== undefined) {
        this.question_valid_state.push(node.isValid);
        node.$on('updateValidation', (function handler(s, index) {
          return function update(val) {
            s.$set(s.question_valid_state, index, val);
            s.$emit('updateValidation', s.isValid);
          };
        }(this, ind)));
        ind += 1;
      }
    });
  },
};
</script>

<style>
.with + .question, .with + .with {
  margin-top: 20px;
}
</style>
