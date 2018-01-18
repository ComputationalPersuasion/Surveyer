const randCond = n => () => Math.floor(Math.random() * n);
const otherCond = name => store => store.getters[`${name.replace('.', '/')}/value`];

export {
  randCond,
  otherCond,
};

export { default as SCond } from './SCond';
export { default as SCondBlock } from './SCondBlock';
