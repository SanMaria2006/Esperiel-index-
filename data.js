const dimensions = [
  "Clarity", 
  "Confidence", 
  "Presence", 
  "Expression", 
  "Social Awareness", 
  "Influence"
];

const quizData = [
  {
    dimension: "Clarity",
    text: "When explaining a complex idea in a meeting, you notice people nodding before you finish. What is your typical response?",
    options: [
      { text: "Stop right there and ask if they genuinely follow your reasoning.", score: 5 },
      { text: "Keep moving forward assuming your summary was precise.", score: 3 },
      { text: "Simplify your wording further just to be safe.", score: 4 }
    ]
  },
  {
    dimension: "Confidence",
    text: "Someone interrupts you while you are making a key point. How do you handle the overlap?",
    options: [
      { text: "Pause, let them finish, then calmly resume your exact thought.", score: 5 },
      { text: "Yield the floor entirely and let them take over the discussion.", score: 2 },
      { text: "Speak slightly louder to talk over them and hold your ground.", score: 3 }
    ]
  }
];

const archetypes = {
  high: {
    name: "The Resonant Voice",
    desc: "You communicate with high intentionality, balancing strong clarity with deep awareness of your audience."
  },
  developing: {
    name: "The Emerging Speaker",
    desc: "Your core instincts are solid, though occasional hesitations prevent your full message from landing."
  }
};