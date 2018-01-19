<template>
  <s-input :error_message="error_msg"
          :label="label"
          :data_name="nested_name"
          type="number"
          :req="req"
          :min="min"
          :max="max"/>
</template>

<script>
import { SInput } from '../../core';
// import { Validable } from '../../mixins';

export default {
  name: 's-age',
  inject: ['form_name'],
  // mixins: [Validable],
  components: {
    SInput,
  },
  props: {
    label: {
      type: String,
      default: 'Age',
    },
    data_name: {
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
    nested_name() {
      return `${this.form_name}.${this.data_name}`;
    },
    error_msg() {
      return `Please enter your age (between ${this.min} and ${this.max}).`;
    },
  },

};
</script>
