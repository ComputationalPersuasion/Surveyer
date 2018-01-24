const randCond = n => () => Math.floor(Math.random() * n);
const randItemsCond = (...arr) => () => arr[Math.floor(Math.random() * arr.length)];
const otherCond = name => store => () => store.getters[`${name.replace('.', '/')}/value`];
const otherFunCond = (name, func) => store => () => func(store.getters[`${name.replace('.', '/')}/value`]);

export {
  randCond,
  otherCond,
  randItemsCond,
  otherFunCond,
};

export { default as SWith } from './SWith';
