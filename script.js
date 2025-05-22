let current = 0;
let score = 0;

function showQuestion() {
  let quiz;
  const q = quiz[current];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  document.getElementById("explanation").innerText = "";
  document.getElementById("result").innerText = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quiz[current].answer;
  const explanation = quiz[current].explanation;

  if (selected === correct) {
    score++;
    document.getElementById("result").innerText = "✅ Correct!";
    document.getElementById("result").style.color = "lightgreen";
  } else {
    document.getElementById("result").innerText = `❌ Wrong! Correct: ${correct}`;
    document.getElementById("result").style.color = "tomato";
  }

  document.getElementById("explanation").innerText = `💡 ${explanation}`;

  // Disable all options
  Array.from(document.getElementById("options").children).forEach(btn => {
    btn.disabled = true;
  });
}

function nextQuestion() {
  current++;
  if (current < quiz.length) {
    showQuestion();
  } else {
    document.getElementById("question").innerText = "🎉 Quiz Finished!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("result").innerText = `Score: ${score}/${quiz.length}`;
    document.getElementById("explanation").innerText = "";
    document.getElementById("next-btn").style.display = "none";
  }
}

showQuestion();
