<template>
  <s-select :error_message="error_message"
           :req="req"
           :items="items"
           :label="label"
           :data_name="nested_name"/>
</template>

<script>
import { SSelect } from '../../core';
// import { Validable } from '../../mixins';
import { Sex } from '../../../questionnaires/demographics';

export default {
  name: 's-sex',
  inject: ['form_name'],
  // mixins: [Validable],
  components: {
    SSelect,
  },
  props: {
    label: {
      type: String,
      default: 'Sex',
    },
    data_name: {
      type: String,
      default: 'sex',
    },
    error_message: {
      type: String,
      default: 'Please select your sex from the list.',
    },
    req: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    items() {
      return Sex.items;
    },
    nested_name() {
      return `${this.form_name}.${this.data_name}`;
    },
  },
};
</script>