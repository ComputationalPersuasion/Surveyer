const SingleValue = function def(defaultValue) {
  return {
    namespaced: true,
    state() {
      return {
        value: defaultValue,
      };
    },
    getters: {
      value: state => state.value,
    },
    mutations: {
      update(state, payload) {
        state.value = payload;
      },
    },
  };
};

export default SingleValue;
