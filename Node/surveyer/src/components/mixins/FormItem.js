const FormItem = {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  inject: ['form_name'],
  computed: {
    reqlabel() {
      return this.req ? `${this.label}<span class="reqmark">*</span>` : this.label;
    },
    data_name() {
      return `${this.form_name}.${this.base_name}`;
    },
  },
};

export default FormItem;
