const quiz = [
  {
    "question": "What is the time complexity of the following code?\n\nfunction printNumbers(n) {\n  for (let i = 0; i < n; i++) {\n    console.log(i);\n  }\n}",
    "options": ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
    "answer": "O(n)",
    "explanation": "The loop runs 'n' times, making the time complexity O(n). It grows linearly with input size."
  },
  {
    "question": "What is the space complexity of the same function?",
    "options": ["O(n)", "O(n^2)", "O(1)", "O(log n)"],
    "answer": "O(1)",
    "explanation": "No extra space is used, so the space complexity is constant."
  },
  {
    "question": "What is the time complexity of a nested loop like this?\n\nfunction nestedLoop(n) {\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < n; j++) {\n      console.log(i, j);\n    }\n  }\n}",
    "options": ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    "answer": "O(n^2)",
    "explanation": "There are two nested loops, each running 'n' times, resulting in O(n * n) = O(n²)."
  },
  {
    "question": "What is the time complexity of binary search in a sorted array?",
    "options": ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
    "answer": "O(log n)",
    "explanation": "Binary search cuts the array in half each iteration, resulting in logarithmic complexity."
  },
  {
    "question": "What is the space complexity of binary search?",
    "options": ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    "answer": "O(1)",
    "explanation": "It uses only a few variables, so the space complexity is constant."
  },
  {
    "question": "What is the time complexity of reversing a string like this?\n\nfunction reverseString(str) {\n  return str.split('').reverse().join('');\n}",
    "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    "answer": "O(n)",
    "explanation": "Each operation – split, reverse, join – takes O(n) time, so the overall complexity is O(n)."
  },
  {
    "question": "Which of the following time complexities is most efficient?",
    "options": ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"],
    "answer": "O(log n)",
    "explanation": "O(log n) grows the slowest as the input increases, making it the most efficient."
  },
  {
    "question": "What is the time complexity of this code?\n\nfunction logFunction(n) {\n  let i = 1;\n  while (i < n) {\n    console.log(i);\n    i *= 2;\n  }\n}",
    "options": ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    "answer": "O(log n)",
    "explanation": "Each iteration multiplies i by 2, so the number of iterations is log base 2 of n."
  }
]
