const PANAS = {
  name: 'PANAS',
  instruction: 'This sample consists in a number of words that describe different feelings and emotions. Read each item and then select the appropriate answer in the scale next to that word. Indicate to what extent you feel this way right now.',
  items: [
    {
      text: 'Interested',
      panas: 'positive',
      tag: 'pos1',
    },
    {
      text: 'Distressed',
      panas: 'affraid',
      tag: 'aff1',
    },
    {
      text: 'Excited',
      panas: 'positive',
      tag: 'pos2',
    },
    {
      text: 'Upset',
      panas: 'upset',
      tag: 'ups1',
    },
    {
      text: 'Strong',
      panas: 'positive',
      tag: 'pos3',
    },
    {
      text: 'Guilty',
      panas: 'upset',
      tag: 'ups2',
    },
    {
      text: 'Scared',
      panas: 'affraid',
      tag: 'aff2',
    },
    {
      text: 'Hostile',
      panas: 'upset',
      tag: 'ups3',
    },
    {
      text: 'Enthusiastic',
      panas: 'positive',
      tag: 'pos4',
    },
    {
      text: 'Proud',
      panas: 'positive',
      tag: 'pos5',
    },
    {
      text: 'Irritable',
      panas: 'upset',
      tag: 'ups4',
    },
    {
      text: 'Alert',
      panas: 'positive',
      tag: 'pos6',
    },
    {
      text: 'Ashamed',
      panas: 'upset',
      tag: 'ups5',
    },
    {
      text: 'Inspired',
      panas: 'positive',
      tag: 'pos7',
    },
    {
      text: 'Nervous',
      panas: 'affraid',
      tag: 'aff3',
    },
    {
      text: 'Determined',
      panas: 'positive',
      tag: 'pos8',
    },
    {
      text: 'Attentive',
      panas: 'positive',
      tag: 'pos9',
    },
    {
      text: 'Jittery',
      panas: 'affraid',
      tag: 'aff4',
    },
    {
      text: 'Active',
      panas: 'positive',
      tag: 'pos10',
    },
    {
      text: 'Affraid',
      panas: 'affraid',
      tag: 'aff5',
    },
  ],
};

function panas() {
  const profile = {
    positive: 0,
    upset: 0,
    affraid: 0,
  };
  RegulatoryFocusQuestionnaire.items.forEach((item) => {
    profile[item.rf] += item.value;
  });
  profile.positive /= 10;
  profile.upset /= 5;
  profile.affraid /= 5;
  profile.negative = (profile.upset + profile.affraid) / 2;
  return profile;
}

PANAS.items.forEach((item) => {
  const lbl = {};
  lbl.size = 5;
  lbl.value = 0;
  lbl.minLabel = 'Very slightly or not at all',
  lbl.maxlabel = 'Extremely',
  Object.assign(item, lbl);
});
PANAS.panas = panas;

export default PANAS;
