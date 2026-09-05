/** S1 IS · Ch 1 · Quiz 1.2 — Distinguish variables */
export const QUIZ_SECTIONS = [
  { id: "1.2", label: "1.2", labelZh: "1.2" },
];

export const QUIZ_ITEMS = [
  {
    id: "12-1",
    section: "1.2",
    difficulty: "Foundation",
    stem: "Research question: “Does the amount of screen time affect eye strain?” What is the independent variable?",
    options: [
      { key: "A", text: "Level of eye strain" },
      { key: "B", text: "Duration of screen time" },
      { key: "C", text: "Type of phone used" },
      { key: "D", text: "Age of the student" },
    ],
    answer: "B",
    hint: "The independent variable is the factor you change on purpose.",
  },
  {
    id: "12-2",
    section: "1.2",
    difficulty: "Foundation",
    stem: "Research question: “Does the amount of screen time affect eye strain?” What is the dependent variable?",
    options: [
      { key: "A", text: "Duration of screen time" },
      { key: "B", text: "Brightness of the screen" },
      { key: "C", text: "Level of eye strain" },
      { key: "D", text: "Time of day" },
    ],
    answer: "C",
    hint: "The dependent variable is what you measure to see the effect.",
  },
  {
    id: "12-3",
    section: "1.2",
    difficulty: "Standard",
    stem: "In the plant growth and light experiment, one plant is placed near the window and one inside the room. What is the independent variable?",
    options: [
      { key: "A", text: "Amount of light / plant location" },
      { key: "B", text: "Plant height" },
      { key: "C", text: "Amount of water" },
      { key: "D", text: "Amount of fertilizer" },
    ],
    answer: "A",
    hint: "Location changes how much light each plant receives — that is what is deliberately varied.",
  },
  {
    id: "12-4",
    section: "1.2",
    difficulty: "Foundation",
    stem: "In the same plant experiment, the student records plant heights each week. What is the dependent variable?",
    options: [
      { key: "A", text: "Amount of fertilizer" },
      { key: "B", text: "Type of pot" },
      { key: "C", text: "Amount of light / plant location" },
      { key: "D", text: "Plant height" },
    ],
    answer: "D",
    hint: "Height is the measured outcome that may change because of light.",
  },
  {
    id: "12-5",
    section: "1.2",
    difficulty: "Standard",
    stem: "In the plant growth and light experiment, which of the following is a controlled variable?",
    options: [
      { key: "A", text: "Amount of light / plant location" },
      { key: "B", text: "Amount of water given to each plant" },
      { key: "C", text: "Plant height after one week" },
      { key: "D", text: "How fast the plant grows" },
    ],
    answer: "B",
    hint: "Controlled variables are kept the same so the test is fair (e.g. same water and fertilizer).",
  },
];
