<template>
  <q-field :error-label="error_message" :error="$v.value.$error">
    <q-select v-model="value"
              :options="options"
              :float-label="reqlabel"
              :filter="filter"
              @blur="$v.value.$touch"
              @change="notify"/>
  </q-field>
</template>

<script>
import { QSelect, QField } from 'quasar-framework';
import { requiredIf } from 'vuelidate/lib/validators';
import { SingleValued, FormItem, Validable } from '../mixins';

export default {
  name: 's-select',
  components: {
    QSelect,
    QField,
  },
  mixins: [SingleValued, FormItem, Validable],
  props: {
    items: {
      type: Array,
      required: true,
    },
    filter: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    options() {
      return this.items.map(it => ({ label: it.text, value: it.tag }));
    },
  },
  validations() {
    return {
      value: {
        requiredIf: requiredIf(function req() {
          return this.req;
        }),
      },
    };
  },
};
</script>