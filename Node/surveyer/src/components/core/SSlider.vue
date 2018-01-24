<template>
  <q-field :error-label="error_message" :error="$v.value.$error">
    <q-input v-if="isNumber"
             v-model.number="value"
             :float-label="reqlabel"
             type="number"
             @blur="$v.value.$touch"
             @change="notify"/>
    <q-input v-else
             v-model="value"
             :float-label="reqlabel"
             :type="type"
             @blur="$v.value.$touch"
             @change="notify"/>
  </q-field>
</template>

<script>
import { QInput, QField } from 'quasar-framework';
import { between } from 'vuelidate/lib/validators';
import { CoreItem } from '../mixins';

export default {
  name: 's-input',
  components: {
    QField,
    QInput,
  },
  mixins: [CoreItem],
  props: {
    type: {
      type: String,
      default: 'text',
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    isNumber() {
      return this.type === 'number';
    },
  },
  methods: {
    addValidations() {
      if (this.isNumber) {
        return {
          between: between(this.min, this.max),
        };
      }
      return null;
    },
  },
};
</script>
