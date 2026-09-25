let currentQuestion = 0;
let userAnswers = [];

function startQuiz() {
  document.getElementById('intro').classList.remove('active');
  document.getElementById('quiz').classList.add('active');
  loadQuestion();
}

function loadQuestion() {
  if (currentQuestion >= quizData.length) {
    showResults();
    return;
  }

  const q = quizData[currentQuestion];
  document.getElementById('qDimensionText').textContent = q.dimension;
  document.getElementById('qText').textContent = q.text;
  document.getElementById('progressLabel').textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
  
  const progressPercent = ((currentQuestion + 1) / quizData.length) * 100;
  document.getElementById('progressFill').style.width = `${progressPercent}%`;

  const optionsContainer = document.getElementById('qOptions');
  optionsContainer.innerHTML = '';

  q.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.text;
    btn.onclick = () => selectOption(opt.score);
    optionsContainer.appendChild(btn);
  });
}

function selectOption(score) {
  userAnswers.push(score);
  currentQuestion++;
  loadQuestion();
}

function showResults() {
  document.getElementById('quiz').classList.remove('active');
  document.getElementById('results').classList.add('active');

  const totalScore = userAnswers.reduce((a, b) => a + b, 0) * 10;
  document.getElementById('overallScore').textContent = totalScore;
  document.getElementById('archetypeName').textContent = archetypes.high.name;
  document.getElementById('archetypeDesc').textContent = archetypes.high.desc;
}

function restartQuiz() {
  currentQuestion = 0;
  userAnswers = [];
  document.getElementById('results').classList.remove('active');
  document.getElementById('intro').classList.add('active');
}