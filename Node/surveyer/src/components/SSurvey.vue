<template>
  <q-layout @updateStep="updateStepVal">
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
              <q-btn v-if="!emptysteps && !firstpage"
                     class="stepper" round small
                     icon="keyboard_arrow_left" color="primary"
                     v-back-to-top.animate="{offset: -1, duration: 200}"
                     @click="decrement"/>
            </div>
            <div class="col">
              <q-progress :percentage="percentage" color="primary" style="height: 20px;top: 10px" />
            </div>
            <div class="col-1">
              <q-btn v-if="!lastpage && !emptysteps"
                     :disabled="!isCurrentStepValid"
                     class="stepper" small round
                     icon="keyboard_arrow_right" color="primary"
                     v-back-to-top.animate="{offset: -1, duration: 200}"
                     @click="increment"/>
              <q-btn v-else
                     :disabled="!isValid"
                     class="stepper" round small
                     color="secondary"  icon="send"
                     native-type="submit"
                     v-back-to-top.animate="{offset: -1, duration: 200}"
                     @click="submit"/>
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
      step_valid_state: [],
    };
  },
  props: {
    hidebar: {
      type: Boolean,
      default: false,
    },
    base_name: {
      type: String,
      default: 'survey',
    },
    submit_function: {
      type: Function,
      required: true,
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
      return this.steps === 1;
    },
    percentage() {
      return Math.round((this.value / this.steps) * 100) || 0;
    },
    isCurrentStepValid() {
      return this.step_valid_state[this.value];
    },
    isValid() {
      return this.step_valid_state.every(v => v);
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
      this.submit_function();
    },
    updateStepVal(id, val) {
      this.$set(this.step_valid_state, id, val);
    },
  },
  mounted() {
    let ind = 0;
    this.$slots.default.forEach((node) => {
      if (node.componentOptions && node.componentOptions.tag === 's-step') {
        this.steps += 1;
        this.step_valid_state.push(node.componentInstance.isValid);
        this.$set(node.componentInstance, 'surveyname', this.data_name);
        this.$set(node.componentInstance, 'step', ind);
        node.componentInstance.$on('updateValidation', (function handler(s, index) {
          return function update(val) {
            s.$set(s.step_valid_state, index, val);
          };
        }(this, ind)));
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

.canwrap {
  white-space: pre-line;
  margin-left: 4%;
  margin-right: 4%;
}

h6 {
  font-size: 15px;
  font-weight: normal;
}

h1 {
  font-weight: 200;
}
</style>