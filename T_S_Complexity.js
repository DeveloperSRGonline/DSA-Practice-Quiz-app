const quiz = [
  {
    question: "What is the result of '5' + 2 in JavaScript?",
    options: ["7", "'52'", "NaN", "Error"],
    answer: "'52'",
    explanation: "Type coercion turns 2 into a string, so '5' + 2 becomes '52'."
  },
  {
    question: "What is the result of '10' - 4?",
    options: ["'6'", "6", "NaN", "'104'"],
    answer: "6",
    explanation: "The minus operator forces numeric conversion; '10' becomes 10."
  },
  {
    question: "Which operator checks both value and type?",
    options: ["==", "=", "===", "!="],
    answer: "===",
    explanation: "`===` checks for strict equality—both type and value."
  },
  {
    question: "Which of these is NOT a falsy value?",
    options: ["0", "''", "null", "'false'"],
    answer: "'false'",
    explanation: "'false' is a string, which is a truthy value."
  },
  {
    question: "What will `typeof NaN` return?",
    options: ["'number'", "'NaN'", "'undefined'", "'object'"],
    answer: "'number'",
    explanation: "Surprisingly, NaN is of type 'number' in JavaScript."
  },
  {
    question: "Which logical operator returns true if both operands are true?",
    options: ["&&", "||", "!", "&"],
    answer: "&&",
    explanation: "Logical AND (&&) requires both operands to be true."
  },
  {
    question: "What does `x++` do?",
    options: [
      "Increments x before using it",
      "Increments x after using it",
      "Decrements x after using it",
      "Does not change x"
    ],
    answer: "Increments x after using it",
    explanation: "Post-increment: value is used first, then incremented."
  },
  {
    question: "What is the output of `false || true`?",
    options: ["false", "true", "undefined", "NaN"],
    answer: "true",
    explanation: "Logical OR (||) returns true if either side is true."
  },
  {
    question: "Which of these swaps values using destructuring?",
    options: [
      "[a, b] = [b, a]",
      "temp = a; a = b; b = temp;",
      "a += b; b = a - b; a = a - b;",
      "All of the above"
    ],
    answer: "All of the above",
    explanation: "All three are valid swapping methods."
  },
  {
    question: "What is the result of 10 % 3?",
    options: ["3", "1", "0", "10"],
    answer: "1",
    explanation: "The remainder of 10 divided by 3 is 1."
  },
  {
    question: "What is the output of `!!0`?",
    options: ["true", "false", "0", "undefined"],
    answer: "false",
    explanation: "`!0` is true, so `!!0` is false. This is used to convert to boolean."
  },
  {
    question: "What will `5 == '5'` return?",
    options: ["true", "false", "NaN", "Error"],
    answer: "true",
    explanation: "`==` allows type coercion, so 5 == '5' is true."
  },
  {
    question: "What is the result of `typeof null`?",
    options: ["'null'", "'undefined'", "'object'", "'boolean'"],
    answer: "'object'",
    explanation: "This is a historical JavaScript bug that remains today."
  },
  {
    question: "What does the `!` operator do?",
    options: [
      "Negates a boolean",
      "Adds two values",
      "Multiplies two values",
      "Converts to number"
    ],
    answer: "Negates a boolean",
    explanation: "`!true` becomes false, `!false` becomes true."
  },
  {
    question: "Which of these returns true for `10 > 5`?",
    options: ["true", "false", "NaN", "null"],
    answer: "true",
    explanation: "10 is greater than 5, so the result is true."
  }
];
