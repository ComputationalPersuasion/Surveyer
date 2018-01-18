// import Validated from '../../store/modules/Validated';

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
    /* valid: {
      get() {
        return this.$store.getters[`${this.data_name.replace('.', '/')}/Validation/valid`];
      },
      set(newValue) {
        this.$store.commit(`${this.data_name.replace('.', '/')}/Validation/validate`, newValue);
      },
    }, */
  },
  /* created() {
    const dataNameArr = this.data_name.split('.');
    console.log(this.data_name);
    console.log(this.$store);
    this.$store.registerModule(dataNameArr, { namespace: true });
    this.$store.registerModule(dataNameArr.concat(['Validation']), Validated);
  }, */
};

export default Validable;
