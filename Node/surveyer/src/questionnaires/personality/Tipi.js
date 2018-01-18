const TIPI = {
  name: 'TIPI',
  instruction: 'Here are a number of personality traits that may or may not apply to you. Please select a number in the scale next to each statement to indicate the extent to which you agree or disagree with that statement. You should rate the extent to which the pair of traits applies to you, even if one characteristic applies more strongly than the other.\n\nI see myself as:',
  items: [
    {
      text: 'Extraverted, enthusiastic',
      ocean: 'E',
      reversed: false,
      tag: 'E1',
    },
    {
      text: 'Critical, quarrelsome',
      ocean: 'A',
      reversed: true,
      tag: 'A1',
    },
    {
      text: 'Dependable, self-disciplined',
      ocean: 'C',
      reversed: false,
      tag: 'C1',
    },
    {
      text: 'Anxious, easily upset',
      ocean: 'N',
      reversed: true,
      tag: 'N1',
    },
    {
      text: 'Open to new experiences, complex',
      ocean: 'O',
      reversed: false,
      tag: 'O1',
    },
    {
      text: 'Reserved, quiet',
      ocean: 'E',
      reversed: true,
      tag: 'E2',
    },
    {
      text: 'Sympathetic, warm',
      ocean: 'A',
      reversed: false,
      tag: 'A2',
    },
    {
      text: 'Disorganized, careless',
      ocean: 'C',
      reversed: true,
      tag: 'C2',
    },
    {
      text: 'Calm, emotionally stable',
      ocean: 'N',
      reversed: false,
      tag: 'N2',
    },
    {
      text: 'Conventional, uncreative',
      ocean: 'O',
      reversed: true,
      tag: 'O2',
    },
  ],
};

const full = ['Disagree strongly', 'Disagree moderately', 'Disagree a little', 'Neither agree nor disagree', 'Agree a little', 'Agree moderately', 'Agree strongly'];
const compact = ['Disagree strongly', '', '', 'Neither agree nor disagree', '', '', 'Agree strongly'];

TIPI.items.forEach((item) => {
  const lbl = {
    labelsFull: full,
    labelsCompact: compact,
    minLabel: 'Disagree strongly',
    maxLabel: 'Agree strongly',
    size: 7,
  };
  Object.assign(item, lbl);
});

export default TIPI;
