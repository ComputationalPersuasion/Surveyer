import SingleValue from './SingleValue';

const RFQStore = function def(dataName) {
  return {
    module: {
      namespaced: true,
      getters: {
        pro: (state, getters) => [...Array(6).keys()].reduce((acc, val) => acc + getters[`pro${val + 1}/value`]) / 6,
        pre: (state, getters) => [...Array(5).keys()].reduce((acc, val) => acc + getters[`pre${val + 1}/value`]) / 5,
      },
    },
    submodulesRegister(store) {
      ['pro', 'pre'].forEach(item => store.registerModule(dataName.split('.').concat(item), SingleValue(0)));
    },
    watchersRegister(store) {
      ['pro', 'pre'].forEach(item => store.watch(() => store.getters[`${dataName.replace('.', '/')}/${item}`], newvalue => store.commit(`${dataName.replace('.', '/')}/${item}/update`, newvalue)));
    },
  };
};

export default RFQStore;
