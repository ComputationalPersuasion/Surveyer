const FormItem = {
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  inject: {
    form_name: {
      default: null,
    },
  },
  computed: {
    reqlabel() {
      return this.req ? `${this.label}<span class="reqmark">*</span>` : this.label;
    },
    data_name() {
      if (this.form_name) {
        return `${this.form_name}.${this.base_name}`;
      }
      return this.base_name;
    },
  },
};

export default FormItem;
