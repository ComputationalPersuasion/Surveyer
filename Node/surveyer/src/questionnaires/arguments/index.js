const Arguments = {
  themes: [{
    name: 'abortion',
    tag: 'abortion',
    question: 'Should abortion be legal?',
    arguments: {
      pro: {
        emot: {
          gain: 'Why not abort if the child is to be born into a poverty stricken part of the world, and is not expected to survive past the age of 7 by either disease or lack of food?',
          loss: 'Why not abort if the child is to be born into a poverty stricken part of the world, and is expected to die by the age of 7 by either disease or lack of food?',
        },
        fact: {
          gain: 'There are some minimum requirements to say a foetus is alive and abortion can become controversial. The brain has to be able to receive stimuli and input. That happens during the 26th week of pregnancy, when the thalamocortical tract develops.',
          loss: 'There are some minimum requirements to say a foetus is alive and abortion can become controversial. The brain has to be able to receive stimuli and input. It does not happen until the 26th week of pregnancy, before which the thalamocortical tract is not yet developed.',
        },
      },
      con: {
        emot: {
          gain: 'As long as abortion is legal, men\'s right to procreate might not be respected! Men should have as many "rights" and responibilites as women.',
          loss: 'As long as abortion is legal, men might be denied the right to procreate! Men are left with fewer "rights" and additional responsibilities as women.',
        },
        fact: {
          gain: ' We already have great alternatives to having abortions. Scientifically-accurate sex-ed, contraception, support of pregnant women and new families.',
          loss: ' We already have great means to avoid undesired pregnancies. Scientifically-accurate sex-ed, contraception, support of pregnant women and new families.',
        },
      },
    },
  }, {
    name: 'marijuana',
    tag: 'marijuana',
    question: 'Should marijuana be legal?',
    arguments: {
      pro: {
        emot: {
          gain: 'The thing is, though, that marijuana does have a good effect (i.e. the high.) If it did not have any good effect, then people would not use it. Some people would rather get the high along with the bad effects. Some would not. It is nothing more than a personal preference.',
          loss: 'The thing is, though, that marijuana does have some bad effects (i.e. increased reaction time.) If it only had negative effects, then people would not use it. Some people would rather get the increased reaction time along with the good effects. Some would not. It is nothing more than a personal preference.',
        },
        fact: {
          gain: 'There are medical uses for the stuff, the drug can thus also be beneficial. Marijuana has its benefits and harms, and some of these benefits boil down to a matter of personal preference. Authorizing it, in effect, dictates a personal preference.',
          loss: 'There are medical uses for the stuff, the drug is thus not pure harm. Marijuana has its harms and benefits, and some of these benefits boil down to a matter of personal preference. Forbidding it, in effect, dictates a personal preference.',
        },
      },
      con: {
        emot: {
          gain: 'People in favor of legalization have never seen what drug abuse does to families and people\'s lives. They say alcohol is no better, but it is that way because of 3 reasons, volume and availability and social acceptance. Legalizing drugs would have catastrophic social impacts.',
          loss: 'People in favor of legalization have never seen what drug abuse does to families and people\'s lives. They say alcohol is worse, but it is because of 3 reasons, volume and availability and social acceptance. Not banning drugs would have catastrophic social impacts.',
        },
        fact: {
          gain: 'People not smoking marijuana are more healthy, breath better, and have safer pregnancy. They also have better motor coordination, reaction time. The brain chemistry is not changed and is less open for such other drugs as cocaine and heroin.',
          loss: 'People are smoking something that is 5 times more cancerous than cigarettes, causes lung damage, and pregnancy complications. It impairs motor coordination, reaction time. It can change the brain chemistry and makes the brain more open for such other drugs as cocaine and heroin.',
        },
      },
    },
  }, {
    name: 'man-made climate change',
    tag: 'climate',
    question: 'Is man-made climate change real?',
    arguments: {
      pro: {
        emot: {
          gain: 'Every year, many people do not survive natural disasters such as tornados, destructive floods, severe droughts and this has something to do with global warming.',
          loss: 'Every year, many people die from natural disasters such as tornados, destructive floods, severe droughts and this has something to do with global warming.',
        },
        fact: {
          gain: 'Around the world, thousands of scientists have devoted their professional lives to studying the climate. Not centrally organised, they sometimes build temporary affiliations but they remain scientists: that is, they are independent from corporations, they constantly challenge each other and are committed to searching for truth through objective, independently verifiable evidence. Overwhelmingly, this evidence has led to the conclusion that the world is warming.',
          loss: 'Around the world, thousands of scientists have devoted their professional lives to studying the climate. Not centrally organised, they sometimes build temporary affiliations but they have not given up being scientists: that is, they have not lost independence from corporations, they constantly challenge each other and are committed to searching for truth through evidence that is not subjective and is independently verifiable. Overwhelmingly, this evidence has led to the conclusion that the world is warming.',
        },
      },
      con: {
        emot: {
          gain: 'Al Gore tells us that sea levels could rise by 20 feet in the near future, a baseless claim that is designed to prevent the ignorant public from knowing the truth about global warming. In comparison, sea levels rose 6 - 8 inches during the 20th century. The world survived.',
          loss: 'Al Gore tells us that sea levels could rise by 20 feet in the near future, a baseless claim designed to make the ignorant public believe lies about global warming. In comparison, sea levels rose 6 - 8 inches during the 20th century. The world was not destroyed.',
        },
        fact: {
          gain: 'As far as the temperature 4000 years ago, it is generally accepted that it was higher. It is also generally accepted that CO2 levels were higher, which was the cause of the increased global temperatures. As far as the ice caps melting, they were much smaller than they are now. Much more of the world was under water at the time.',
          loss: 'As far as the temperature 4000 years ago, it is generally accepted that it was not lower. It is also generally accepted that CO2 levels were not lower, which was the cause of the increased global temperatures. As far as the ice caps melting, they were much smaller than they are now. Much less of the world was not under water at the time.',
        },
      },
    },
  }],
};

export default Arguments;
