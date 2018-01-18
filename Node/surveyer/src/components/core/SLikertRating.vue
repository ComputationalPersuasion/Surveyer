<template>
  <q-rating :max="size" color="primary" icon="brightness_1" v-model="value" size="1.2em" />
</template>

<script>
import { QRating } from 'quasar-framework';
import { SingleValued } from '../mixins';

export default {
  name: 'SLikertRating',
  components: {
    QRating,
  },
  mixins: [SingleValued],
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
  methods: {
    defaultValue() {
      return 0;
    },
  },
};
</script>

<style>
.q-rating .q-icon + .q-icon {
  padding-left: 10px;
}
</style>