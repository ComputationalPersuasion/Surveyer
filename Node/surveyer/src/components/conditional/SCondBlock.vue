<template>
  <div v-if="show">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: 's-cond-block',
  inject: ['cond'],
  props: {
    condition_value: {
      required: true,
    },
  },
  computed: {
    show() {
      return this.cond === this.condition_value;
    },
  },
};
</script>