<template>
  <q-card>
    <q-card-main>
      <h6 class="text-justify" v-if="question">{{question}} <span v-if="!optional" class="reqmark">*</span></h6>
      <slot>
        <span>No question asked.</span>
      </slot>
    </q-card-main>
  </q-card>
</template>

<script>
import { QCard, QCardMain } from 'quasar-framework';

export default {
  name: 's-question',
  components: {
    QCard,
    QCardMain,
  },
  props: {
    question: {
      type: String,
      default: null,
    },
    optional: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
h6 {
  white-space: pre-wrap;
  font-weight: normal;
}
</style>