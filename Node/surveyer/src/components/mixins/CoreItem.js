import { requiredIf } from 'vuelidate/lib/validators';
import { SingleValued, FormItem, Validable } from '../mixins';

export default {
  mixins: [SingleValued, FormItem, Validable],
  methods: {
    addValidations() {
      return null;
    },
  },
  validations() {
    const newVal = this.addValidations();
    const v = {
      value: {
        requiredIf: requiredIf(function req() {
          return this.req;
        }),
      },
    };

    if (newVal !== null) {
      Object.assign(v.value, newVal);
    }
    return v;
  },
};
