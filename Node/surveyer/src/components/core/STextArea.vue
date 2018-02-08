<template>
  <q-field :error-label="error_message" :error="$v.value.$error">
      <q-input v-model="value"
               :float-label="reqlabel"
               :min-rows="minrows"
               :max-rows="maxrows"
               type="textarea"
               @blur="$v.value.$touch"
               @change="notify"/>
  </q-field>
</template>

<script>
import { QInput, QField } from 'quasar-framework';
import { CoreItem } from '../mixins';

export default {
  name: 's-text-area',
  components: {
    QField,
    QInput,
  },
  mixins: [CoreItem],
  props: {
    minrows: {
      type: Number,
      default: 5,
    },
    maxrows: {
      type: Number,
      default: 10,
    },
  },
  methods: {
    defaultValue() {
      return null;
    },
  },
};
</script>

<style>
.q-rating .q-icon + .q-icon {
  padding-left: 10px;
}

.q-field.row {
  margin-top: 10px;
}
</style>