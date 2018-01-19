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
    isStepValid() {
      return this.isValid();
    },
  },
  methods: {
    isValid() {
      return this.question_valid_state.every(p => p);
    },
  },
  created() {
    this.$on('updateQuestion', function updateVal(id, val) {
      this.$set(this.question_valid_state, id, val);
      this.$parent.$emit('updateStep', this.step, this.isValid());
    });
  },
  mounted() {
    let ind = 0;
    this.$slots.default.forEach((node) => {
      if (node.componentOptions && node.componentOptions.tag === 's-question') {
        this.question_valid_state.push(node.componentInstance.isValid());
        /* eslint no-param-reassign: ["error", { "props": false }] */
        node.componentInstance.q_id = ind;
        ind += 1;
      }
    });
  },
};
</script>
