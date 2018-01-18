const FormItem = {
  props: {
    label: {
      type: String,
      required: true,
    },
    in_form: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    reqlabel() {
      return this.req ? `${this.label}<span class="reqmark">*</span>` : this.label;
    },
  },
};

export default FormItem;
