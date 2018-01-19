<template>
  <q-card>
    <q-card-main>
      <h6 class="text-justify canwrap" v-if="question">{{question}} <span v-if="req" class="reqmark">*</span></h6>
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
    req: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
