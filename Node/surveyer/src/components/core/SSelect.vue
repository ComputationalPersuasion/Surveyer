<template>
  <q-field v-if="in_form" :errorLabel="error_message" :error="$v.value.$error">
    <q-select v-model="value"
              :options="options"
              :float-label="reqlabel"
              :filter="filter"
              @blur="$v.value.$touch"/>
    {{value}}
  </q-field>
  <q-select v-else v-model="value"
                   :options="options"
                   :float-label="reqlabel"
                   :filter="filter"/>
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
    /* isValid() {
      return !this.$v.value.$error && (!this.req || (this.value !== undefined));
    }, */
  },
  /* watch: {
    isValid: function updateValidation() {
      this.valid = this.isValid;
    },
  }, */
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