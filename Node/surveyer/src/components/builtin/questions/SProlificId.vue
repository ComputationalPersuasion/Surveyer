<template>
  <s-question :question="question">
    <s-form :base_name="form_base_name">
      <s-input :label="label"
               :base_name="base_name"
               :error_message="error_message"
               :req="req"
               @updateValidation="notify"/>
    </s-form>
  </s-question>
</template>

<script>
import { SQuestion } from '../../';
import { SForm, SInput } from '../../core';

export default {
  name: 's-prolific-id',
  components: { SQuestion, SForm, SInput },
  props: {
    question: {
      type: String,
      default: 'Please enter your Prolific ID.',
    },
    form_base_name: {
      type: String,
      default: 'prolific',
    },
    label: {
      type: String,
      default: 'Prolific ID',
    },
    base_name: {
      type: String,
      default: 'id',
    },
    error_message: {
      type: String,
      default: 'Please enter a valid Prolific ID.',
    },
    req: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isValid() {
      return this.$children[0].isValid;
    },
  },
  methods: {
    notify(val) {
      this.$emit('updateValidation', val);
    },
  },
};
</script>