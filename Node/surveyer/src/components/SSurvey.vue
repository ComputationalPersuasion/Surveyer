<template>
  <q-layout>
    <div class="animate-fade">
      <slot name="header"></slot>
    </div>

    <div class="row justify-center">
      <div class="col-10">
        <slot></slot>
      </div>
    </div>

    <div v-if="!hidebar && !submitted">
      <q-card flat>
        <q-card-main>
          <div class="row">
            <div class="col-1">
              <q-btn v-back-to-top="-1" icon="keyboard_arrow_left" color="primary" @click="decrement" :disabled="firstpage" class="stepper" v-if="!emptysteps" round small/>
            </div>
            <div class="col">
              <q-progress :percentage="percentage" color="primary" style="height: 20px;top: 10px" />
            </div>
            <div class="col-1">
              <q-btn v-back-to-top="-1" icon="keyboard_arrow_right" color="primary" @click="increment" class="stepper" v-if="!lastpage && !emptysteps" small round />
              <q-btn v-back-to-top="-1" color="secondary" class="stepper" icon="send" v-else @click="submit" native-type="submit" round small />
            </div>
          </div>
        </q-card-main>
      </q-card>
    </div>
  </q-layout>
</template>

<script>
import { QBtn, QProgress, QCard, QCardMain, QLayout, BackToTop } from 'quasar-framework';
import { SingleValued } from './mixins';

export default {
  name: 's-survey',
  mixins: [SingleValued],
  components: {
    QBtn,
    QProgress,
    QCard,
    QCardMain,
    QLayout,
  },
  directives: {
    BackToTop,
  },
  data() {
    return {
      steps: 0,
      submitted: false,
    };
  },
  props: {
    hidebar: {
      type: Boolean,
      default: false,
    },
    data_name: {
      type: String,
      default: 'survey',
    },
  },
  computed: {
    firstpage() {
      return this.value <= 0;
    },
    lastpage() {
      return this.value >= (this.steps - 1);
    },
    toolong() {
      return this.steps > 15;
    },
    emptysteps() {
      return this.steps === 0;
    },
    percentage() {
      return Math.round((this.value / this.steps) * 100) || 0;
    },
  },
  methods: {
    defaultValue() {
      return 0;
    },
    increment() {
      this.value = this.value + 1;
    },
    decrement() {
      this.value = this.value - 1;
    },
    submit() {
      this.increment();
      this.submitted = true;
    },
  },
  mounted() {
    let ind = 0;
    this.$slots.default.forEach((node) => {
      if (node.componentOptions && node.componentOptions.tag === 's-step') {
        this.steps += 1;
        /* eslint no-param-reassign: ["error", { "props": false }] */
        node.componentInstance.surveyname = this.data_name;
        node.componentInstance.step = ind;
        ind += 1;
      }
    });
  },
};
</script>

<style>
.footer {
  margin-bottom: 50px;
}

.reqmark {
  color: red;
}
</style>