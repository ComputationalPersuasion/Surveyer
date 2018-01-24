<template>
  <div v-show="active" class="step animate-fade">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: 's-step',
  data() {
    return {
      step: -1,
      surveyname: null,
      question_valid_state: [],
    };
  },
  computed: {
    current() {
      return this.$store.getters[`${this.surveyname}/value`];
    },
    active() {
      return this.current === this.step;
    },
    isValid() {
      return this.question_valid_state.every(p => p);
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
