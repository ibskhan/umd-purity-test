// Handle Test Submission
document.getElementById('purity-test').addEventListener('submit', function (e) {
  e.preventDefault();

  // Calculate score
  let score = 100;
  const questions = document.querySelectorAll('.question');
  questions.forEach((question, index) => {
    const selected = question.querySelector('input[type="radio"]:checked');
    if (selected && selected.value === 'yes') {
      score -= 1;
    }
  });

  // Save score to localStorage
  console.log('Score saved:', score); // Debugging
  localStorage.setItem('purityScore', score);

  // Redirect to results page
  window.location.href = 'results.html';
});

// Display score on results page
document.addEventListener('DOMContentLoaded', function () {
  const scoreElement = document.getElementById('score');
  const descriptionElement = document.getElementById('description');
  const score = localStorage.getItem('purityScore');

  console.log('Score retrieved:', score); // Debugging
  console.log('Score element:', scoreElement); // Debugging
  console.log('Description element:', descriptionElement); // Debugging

  if (score) {
    scoreElement.textContent = `Your score is ${score}/100.`;
    if (score >= 90) {
      descriptionElement.textContent = "You're as pure as Testudo's golden shell!";
    } else if (score >= 50) {
      descriptionElement.textContent = "You've had some fun, but you're still a Terp at heart.";
    } else {
      descriptionElement.textContent = "You're a true UMD legend!";
    }
  }
});
