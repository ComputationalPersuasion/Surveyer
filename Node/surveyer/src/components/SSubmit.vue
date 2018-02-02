<template>
  <s-question :question="message" v-show="can_show">
    <slot>
    </slot>
  </s-question>
</template>

<script>
import { SQuestion } from '.';

export default {
  name: 's-submit',
  components: {
    SQuestion,
  },
  data() {
    return {
      can_show: false,
    };
  },
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  methods: {
    show() {
      this.can_show = true;
    },
  },
};
</script>

<style>

</style>
