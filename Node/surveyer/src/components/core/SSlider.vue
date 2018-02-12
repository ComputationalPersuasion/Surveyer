<template>
  <q-field :error-label="error_message" :error="$v.value.$error">
    <div class="row justify-between" v-if="show_bar_above">
      <div class="col-2 text-left">
        {{left_label}}
      </div>
      <div class="col-2 text-center">
        {{center_label}}
      </div>
      <div class="col-2 text-right">
        {{right_label}}
      </div>
    </div>
    <q-slider v-model="value"
              :color="(touched ? 'primary' : 'orange-11')"
              :float-label="reqlabel"
              :min="min"
              :max="max"
              :step="step"
              :label="with_label"
              :label-value="label_value(value)"
              :decimals="decimals"
              :snap="snap"
              :markers="markers"
              :fill-handle-always="fill_handle"
              @change="change"/>
  </q-field>
</template>

<script>
import { QSlider, QField, debounce } from 'quasar-framework';
import { CoreItem } from '../mixins';

export default {
  name: 's-slider',
  data() {
    return {
      touched: false,
      debounced_notify: null,
    };
  },
  components: {
    QField,
    QSlider,
  },
  mixins: [CoreItem],
  props: {
    left_label: {
      type: String,
      default: '',
    },
    center_label: {
      type: String,
      default: '',
    },
    right_label: {
      type: String,
      default: '',
    },
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 7,
    },
    step: {
      type: Number,
      default: 1,
    },
    with_label: {
      type: Boolean,
      default: true,
    },
    label_value: {
      type: Function,
      default: value => `${value}`,
    },
    decimals: {
      type: Number,
      default: 0,
    },
    fill_handle: {
      type: Boolean,
      default: true,
    },
    snap: {
      type: Boolean,
      default: true,
    },
    markers: {
      type: Boolean,
      default: true,
    },
    show_bar_above: {
      type: Boolean,
      default: true,
    },
    default_value: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    isValid() {
      return !this.req || (!this.$v.value.$invalid && this.touched);
    },
  },
  mounted() {
    this.debounced_notify = debounce(() => this.notify(), 300);
  },
  methods: {
    defaultValue() {
      return this.default_value;
    },
    change() {
      this.touched = true;
      this.$v.value.$touch();
      this.debounced_notify();
    },
  },
};
</script>
