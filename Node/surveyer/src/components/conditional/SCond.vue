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
      children_valid_state: [],
    };
  },
  provide() {
    return {
      cond: this.condvalue,
    };
  },
  computed: {
    isValid() {
      return this.children_valid_state.every(p => p);
    },
  },
  methods: {
    defaultValue() {
      return this.condvalue;
    },
  },
  mounted() {
    let ind = 0;
    this.$slots.default.forEach((node) => {
      if (node.componentInstance && node.componentOptions.tag === 's-cond-block') {
        this.children_valid_state.push(node.componentInstance.isValid);
        node.componentInstance.$on('updateValidation', (function handler(c, index) {
          return function update(val) {
            c.$set(c.children_valid_state, index, val);
            c.$emit('updateValidation', c.isValid);
          };
        }(this, ind)));
        ind += 1;
      }
    });
  },
};
</script>
