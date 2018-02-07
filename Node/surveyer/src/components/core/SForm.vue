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
      children_valid_state: [],
    };
  },
  props: {
    base_name: {
      type: String,
      required: true,
    },
  },
  computed: {
    isValid() {
      return this.children_valid_state.every(p => p);
    },
  },
  provide() {
    return {
      form_name: this.base_name,
    };
  },
  created() {
    /* eslint no-underscore-dangle: "off" */
    if (!(`${this.base_name.replace('.', '/')}/` in this.$store._modulesNamespaceMap)) {
      this.$store.registerModule(this.base_name.split('.'), {
        namespaced: true,
      });
    }
  },
  mounted() {
    let ind = 0;
    this.$children.forEach((node) => {
      this.children_valid_state.push(node.isValid);
      node.$on('updateValidation', (function handler(form, index) {
        return function update(val) {
          form.$set(form.children_valid_state, index, val);
          form.$emit('updateValidation', form.isValid);
        };
      }(this, ind)));
      ind += 1;
    });
  },
};
</script>

<style>
.form {
  text-align: left;
}
</style>