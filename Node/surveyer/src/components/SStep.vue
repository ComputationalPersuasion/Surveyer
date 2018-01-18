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
    };
  },
  computed: {
    current() {
      return this.$store.getters[`${this.surveyname}/value`];
    },
    active() {
      return this.current === this.step;
    },
  },
};
</script>
