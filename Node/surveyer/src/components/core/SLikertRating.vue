<template>
  <q-field>
    <q-rating v-model="value"
              :color="color" icon="brightness_1" size="1.2em"
              :max="size"
              @change="change"/>
  </q-field>
</template>

<script>
import { QRating, QField } from 'quasar-framework';
import { minValue } from 'vuelidate/lib/validators';
import { CoreItem } from '../mixins';

export default {
  name: 's-liker-rating',
  components: {
    QRating,
    QField,
  },
  mixins: [CoreItem],
  props: {
    size: {
      type: Number,
      default: 5,
    },
    labels: {
      type: Array,
      default: null,
    },
  },
  computed: {
    color() {
      return this.$v.value.$error ? 'negative' : 'primary';
    },
  },
  methods: {
    defaultValue() {
      return 0;
    },
    change() {
      this.$v.value.$touch();
      this.notify();
    },
    addValidations() {
      return {
        minValue: minValue(1),
      };
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