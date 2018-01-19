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
  props: {
    base_name: {
      type: String,
      required: true,
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
  },
};
</script>

<style>
.form {
  text-align: left;
}
</style>