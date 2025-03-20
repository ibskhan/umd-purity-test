document.getElementById('submit-btn').addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let score = 0;
    
    checkboxes.forEach((box) => {
        if (box.checked) score++;
    });

    const totalQuestions = checkboxes.length;
    const purityScore = ((totalQuestions - score) / totalQuestions) * 100;

    window.location.href = `results.html?score=${purityScore.toFixed(2)}`;
});
