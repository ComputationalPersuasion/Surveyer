<template>
  <s-question :question="question">
    <s-form :base_name="form_base_name">
      <s-input :label="label"
               :base_name="base_name"
               :error_message="error_message"
               :req="req"/>
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
};
</script>