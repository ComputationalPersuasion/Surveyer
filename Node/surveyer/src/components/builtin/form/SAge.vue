<template>
  <s-input :error_message="error_msg"
          :label="label"
          :base_name="base_name"
          type="number"
          :req="req"
          :min="min"
          :max="max"/>
</template>

<script>
import { SInput } from '../../core';

export default {
  name: 's-age',
  components: {
    SInput,
  },
  props: {
    label: {
      type: String,
      default: 'Age',
    },
    base_name: {
      type: String,
      default: 'age',
    },
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 150,
    },
    req: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    error_msg() {
      return `Please enter your age (between ${this.min} and ${this.max}).`;
    },
  },
  created() {
    this.$on('updateVal', function updateVal(name, val) {
      this.$parent.$emit('updateVal', name, val);
    });
  },
};
</script>
