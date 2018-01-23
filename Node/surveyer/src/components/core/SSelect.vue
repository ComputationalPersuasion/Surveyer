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
import { CoreItem } from '../mixins';

export default {
  name: 's-select',
  components: {
    QSelect,
    QField,
  },
  mixins: [CoreItem],
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
};
</script>