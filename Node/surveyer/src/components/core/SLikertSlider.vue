<template>
  <el-slider v-model="value" :show-stops="showStops" :min="min" :max="size" :format-tooltip="formattooltip">
  </el-slider>
</template>

<script>
import { SingleValued } from '../mixins';

export default {
  name: 'SLikertSlider',
  mixins: [SingleValued],
  props: {
    min: {
      type: Number,
      default: 1,
    },
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
    formattooltip(val) {
      if (this.labels === null) {
        return val;
      }
      return this.labels[val];
    },
    defaultValue() {
      return 0;
    },
  },
  computed: {
    showStops() {
      return (this.size - this.min) < 20;
    },
  },
};
</script>