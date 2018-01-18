<template>
  <q-data-table :data="rows" :config="config" :columns="columns" class="no-border">
    <template slot="col-likert" slot-scope="cell">
      <SLikertRating :size="cell.row.size" :data_name="data_name+'.'+cell.row.tag" />
    </template>
  </q-data-table>
</template>

<script>
import { QDataTable } from 'quasar-framework';
import { SLikertRating } from '../core';

export default {
  name: 'SLikertTable',
  components: {
    QDataTable,
    SLikertRating,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    extremOnly: {
      type: Boolean,
      default: false,
    },
    compact: {
      type: Boolean,
      default: false,
    },
    slider: {
      type: Boolean,
      default: false,
    },
    data_name: {
      type: String,
      required: true,
    },
    random_order: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      config: {
        rowHeight: '50px',
        noHeader: true,
      },
      columns: [
        {
          label: 'Words',
          field: 'text',
          width: '300px',
          style: {
            'white-space': 'normal',
            'text-align': 'justify',
          },
        },
        {
          label: 'LeftLabel',
          field: 'minLabel',
          width: '100px',
          style: {
            'text-align': 'right',
          },
        },
        {
          label: 'Likert',
          field: 'likert',
          width: '150px',
        },
        {
          label: 'RightLabel',
          field: 'maxLabel',
          width: '100px',
          style: {
            'text-align': 'left',
          },
        },
      ],
    };
  },
  computed: {
    rows() {
      if (this.random_order) {
        return Array.from(this.items).sort(() => Math.random() - 0.5);
      }
      return this.items;
    },
  },
  methods: {
    labels(full, compact) {
      if (this.extremOnly) {
        return null;
      }
      if (this.compact) {
        return compact;
      }
      return full;
    },
  },
};
</script>

<style scoped>
.q-data-table {
  font-size: 100%;
  margin-top: 20px;
}
</style>