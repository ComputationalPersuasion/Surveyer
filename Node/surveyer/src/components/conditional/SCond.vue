<template>
  <div>
    <slot>
    </slot>
  </div>
</template>

<script>
import { SingleValued } from '../mixins';

export default {
  name: 's-cond',
  mixins: [SingleValued],
  props: {
    condition: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      condvalue: this.condition(this.$store),
    };
  },
  provide() {
    return {
      cond: this.condvalue,
    };
  },
  methods: {
    defaultValue() {
      return this.condvalue;
    },
  },
};
</script>
