const quiz = [
  {
    question: "What is the result of '5' + 3 in JavaScript?",
    options: ["8", "'53'", "NaN", "Error"],
    answer: "'53'",
    explanation: "JavaScript uses type coercion here. '5' is a string, so 3 is also converted to string and concatenated."
  },
  {
    question: "Which operator checks both value and type?",
    options: ["==", "=", "===", "!="],
    answer: "===",
    explanation: "`===` is the strict equality operator, it does not allow type coercion unlike `==`."
  },
  {
    question: "What is the result of ++x when x = 2?",
    options: ["2", "3", "undefined", "NaN"],
    answer: "3",
    explanation: "`++x` increments x *before* using it, so it becomes 3."
  },
  {
    question: "Which of the following is a falsy value?",
    options: ["'false'", "[]", "0", "'0'"],
    answer: "0",
    explanation: "`0` is a falsy value in JS. The others are all truthy, even though they seem 'empty'."
  },
  {
    question: "How do you swap two values using ES6?",
    options: [
      "[a, b] = [b, a]",
      "swap(a, b)",
      "a = b; b = a;",
      "temp = a; a = b; b = temp;"
    ],
    answer: "[a, b] = [b, a]",
    explanation: "Destructuring allows swapping values without needing a temp variable."
  }
];
