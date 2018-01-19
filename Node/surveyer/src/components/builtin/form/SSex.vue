<template>
  <s-select :error_message="error_message"
           :req="req"
           :items="items"
           :label="label"
           :base_name="base_name"/>
</template>

<script>
import { SSelect } from '../../core';
import { Sex } from '../../../questionnaires/demographics';

export default {
  name: 's-sex',
  components: {
    SSelect,
  },
  props: {
    label: {
      type: String,
      default: 'Sex',
    },
    base_name: {
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
    },
  },
};
</script>