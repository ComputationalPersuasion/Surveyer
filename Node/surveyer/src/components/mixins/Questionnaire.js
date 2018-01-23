const Questionnaire = {
  props: {
    base_name: {
      type: String,
      required: true,
    },
    questionnaire: {
      type: Object,
      required: true,
    },
    module: {
      type: Function,
      required: true,
    },
    req: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isValid() {
      return this.$children[0].isValid;
    },
  },
  methods: {
    updateValidation(val) {
      this.$emit('updateValidation', val);
    },
  },
};

export default Questionnaire;
