import { throttle } from 'quasar-framework';
import SingleValue from '../../store/modules/SingleValue';

const SingleValued = {
  data() {
    return {
      throttled_value: null,
    };
  },
  props: {
    base_name: {
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
    data_name() {
      return this.base_name;
    },
    value: {
      get() {
        return this.$store.getters[`${this.data_name.replace('.', '/')}/value`];
      },
      set(newValue) {
        this.throttled_value(`${this.data_name.replace('.', '/')}/update`, newValue);
      },
    },
  },
  created() {
    this.$store.registerModule(this.data_name.split('.'), SingleValue(this.defaultValue()));
    this.throttled_value = throttle((n, v) => this.$store.commit(n, v), 100);
  },
};

export default SingleValued;
