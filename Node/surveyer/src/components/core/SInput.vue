<template>
  <q-field :error-label="error_message" :error="$v.value.$error">
    <q-input v-if="isNumber"
             v-model.number="value"
             :float-label="reqlabel"
             type="number"
             @blur="$v.value.$touch"
             @change="notifyParent"/>
    <q-input v-else
             v-model="value"
             :float-label="reqlabel"
             :type="type"
             @blur="$v.value.$touch"
             @change="notifyParent"/>
  </q-field>
</template>

<script>
import { QInput, QField } from 'quasar-framework';
import { between, requiredIf } from 'vuelidate/lib/validators';
import { FormItem, SingleValued, Validable } from '../mixins';

export default {
  name: 's-input',
  components: {
    QField,
    QInput,
  },
  mixins: [SingleValued, FormItem, Validable],
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
  validations() {
    const v = {
      value: {
        requiredIf: requiredIf(function req() {
          return this.req;
        }),
      },
    };
    if (this.isNumber) {
      v.value.between = between(this.min, this.max);
    }
    return v;
  },
};
</script>
