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
    notifyParent() {
      this.$parent.$emit('updateVal', this.data_name, this.isValid);
    },
  },
  mounted() {
    this.notifyParent();
  },
};

export default Validable;
