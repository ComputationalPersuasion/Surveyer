<template>
  <div v-if="show">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: 's-cond-block',
  inject: ['cond'],
  data() {
    return {
      children_valid_state: [],
    };
  },
  props: {
    condition_value: {
      required: true,
    },
  },
  computed: {
    show() {
      return this.cond === this.condition_value;
    },
    isValid() {
      return this.children_valid_state.every(p => p);
    },
  },
  mounted() {
    let ind = 0;
    this.$slots.default.forEach((node) => {
      if (node.componentInstance) {
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