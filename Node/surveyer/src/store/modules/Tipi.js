import SingleValue from './SingleValue';

const TIPIStore = function def(dataName) {
  return {
    module: {
      namespaced: true,
      getters: {
        O: (state, getters) => (getters['O1/value'] + (8 - getters['O2/value'])) / 2,
        C: (state, getters) => (getters['C1/value'] + (8 - getters['C2/value'])) / 2,
        E: (state, getters) => (getters['E1/value'] + (8 - getters['E2/value'])) / 2,
        A: (state, getters) => ((8 - getters['A1/value']) + getters['A2/value']) / 2,
        N: (state, getters) => ((8 - getters['N1/value']) + getters['N2/value']) / 2,
      },
    },
    submodulesRegister(store) {
      ['O', 'C', 'E', 'A', 'N'].forEach(item => store.registerModule(dataName.split('.').concat(item), SingleValue(0)));
    },
    watchersRegister(store) {
      ['O', 'C', 'E', 'A', 'N'].forEach(item => store.watch(() => store.getters[`${dataName.replace('.', '/')}/${item}`], newvalue => store.commit(`${dataName.replace('.', '/')}/${item}/update`, newvalue)));
    },
  };
};

export default TIPIStore;
