const Validable = {
  props: {
    req: {
      type: Boolean,
      default: false,
    },
    error_message: {
      type: String,
      default: '',
    },
  },
  computed: {
    isValid() {
      return !this.req || !this.$v.value.$invalid;
    },
  },
  methods: {
    notify() {
      this.$emit('updateValidation', this.isValid);
    },
  },
};

export default Validable;
