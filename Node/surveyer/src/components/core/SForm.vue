<template>
  <div class="row form">
    <div class="col-4 offset-1">
      <slot>
        No question.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 's-form',
  data() {
    return {
      children_valid_state: new Map(),
    };
  },
  props: {
    base_name: {
      type: String,
      required: true,
    },
  },
  methods: {
    isValid() {
      return Array.from(this.children_valid_state.values()).every(p => p);
    },
  },
  provide() {
    return {
      form_name: this.base_name,
    };
  },
  created() {
    this.$store.registerModule(this.base_name.split('.'), {
      namespaced: true,
    });
    this.$on('updateVal', function updateVal(name, val) {
      this.children_valid_state.set(name, val);
      this.$parent.$emit('updateVal', this.base_name, this.isValid());
    });
  },
};
</script>

<style>
.form {
  text-align: left;
}
</style>