<template>
  <el-radio-group v-model="value">
    <el-radio v-for="[i, l] in items" :label="i" :key="i">{{l}}</el-radio>
  </el-radio-group>
</template>

<script>
import { SingleValued } from '../mixins';

export default {
  name: 'SLikertRadio',
  mixins: [SingleValued],
  props: {
    size: {
      type: Number,
      default: 5,
    },
    showLabels: {
      type: Boolean,
      default: true,
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
  computed: {
    items() {
      let likertLabels = this.labels;
      if (likertLabels === null) {
        if (this.showLabels) {
          likertLabels = Array.from(new Array(this.size), (val, ind) => ind + 1);
        } else {
          likertLabels = new Array(this.size).fill('');
        }
      }
      return likertLabels.map((l, i) => [i + 1, l]);
    },
  },
};
</script>