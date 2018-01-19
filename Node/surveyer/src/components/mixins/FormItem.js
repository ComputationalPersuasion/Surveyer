const FormItem = {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  computed: {
    reqlabel() {
      return this.req ? `${this.label}<span class="reqmark">*</span>` : this.label;
    },
  },
};

export default FormItem;
