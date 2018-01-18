const RegulatoryFocusQuestionnaire = {
  name: 'RegulatoryFocusQuestionnaire',
  instruction: 'This set of questions asks you about specific events in your life. Please indicate your answer to each question by selecting the appropriate number in the scale next to it.',
  items: [
    {
      text: 'Compared to most people, are you typically unable to get what you want out of life?',
      minLabel: 'Never or seldom',
      maxLabel: 'Very often',
      rf: 'promotion',
      tag: 'pro1',
    },
    {
      text: 'Growing up, would you ever "cross the line" by doing things that your parents would not tolerate?',
      minLabel: 'Never or seldom',
      maxLabel: 'Very often',
      rf: 'prevention',
      tag: 'pre1',
    },
    {
      text: 'How often have you accomplished things that got you "psyched" to work even harder?',
      minLabel: 'Never or seldom',
      maxLabel: 'Many times',
      rf: 'promotion',
      tag: 'pro2',
    },
    {
      text: 'Did you get on your parents\' nerves often when you were growing up?',
      minLabel: 'Never or seldom',
      maxLabel: 'Very often',
      rf: 'prevention',
      tag: 'pre2',
    },
    {
      text: 'How often did you obey rules and regulations that were established by your parents?',
      minLabel: 'Never or seldom',
      maxLabel: 'Always',
      rf: 'prevention',
      tag: 'pre3',
    },
    {
      text: 'Growing up, did you ever act in ways that your parents thought were objectionable?',
      minLabel: 'Never or seldom',
      maxLabel: 'Very often',
      rf: 'prevention',
      tag: 'pre4',
    },
    {
      text: 'Do you often do well at different things that you try?',
      minLabel: 'Never or seldom',
      maxLabel: 'Very often',
      rf: 'promotion',
      tag: 'pro3',
    },
    {
      text: 'Not being careful enough has gotten me into trouble at times.',
      minLabel: 'Never or seldom',
      maxLabel: 'Very often',
      rf: 'prevention',
      tag: 'pre5',
    },
    {
      text: 'When it comes to achieving things that are important to me, I find that I don\'t perform as well as I ideally would like to do.',
      minLabel: 'Never true',
      maxLabel: 'Very often true',
      rf: 'promotion',
      tag: 'pro4',
    },
    {
      text: 'I feel like I have made progress toward being successful in my life.',
      minLabel: 'Certainly false',
      maxLabel: 'Certainly true',
      rf: 'promotion',
      tag: 'pro5',
    },
    {
      text: 'I have found very few hobbies or activities in my life that capture my interest or motivate me to put effort into them.',
      minLabel: 'Certainly false',
      maxLabel: 'Certainly true',
      rf: 'promotion',
      tag: 'pro6',
    },
  ],
};

RegulatoryFocusQuestionnaire.items.forEach((item) => {
  const lbl = {
    size: 5,
  };
  Object.assign(item, lbl);
});

export default RegulatoryFocusQuestionnaire;
