import SingleValue from '../../store/modules/SingleValue';

const SingleValued = {
  props: {
    data_name: {
      type: String,
      required: true,
    },
  },
  methods: {
    defaultValue() {
      return null;
    },
  },
  computed: {
    value: {
      get() {
        return this.$store.getters[`${this.data_name.replace('.', '/')}/value`];
      },
      set(newValue) {
        this.$store.commit(`${this.data_name.replace('.', '/')}/update`, newValue);
      },
    },
  },
  created() {
    this.$store.registerModule(this.data_name.split('.'), SingleValue(this.defaultValue()));
  },
};

export default SingleValued;
