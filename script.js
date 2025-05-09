document.addEventListener('DOMContentLoaded', function () {
  const questions = [
    "Current student at UMD?", "Thought about dropping out of school?",
    "Applied to (or in) graduate school at UMD?", "Was in a living learning program?",
    "Stayed at a dorm freshman year?", "Slept on campus during finals week?",
    "Camped a study room (6+ hours)?", "Forgot to return a book from the library?",
    "Used the campus bathrooms and found them to be dirty?", "Complained about the smell in Iribe?",
    "Complained about campus construction?", "Ever lost your UID?", "Had to get a replacement UID?",
    "Smoked on campus?", "Drank on campus?", "Vaped in class?",
    "Went to the Stamp for a meal?", "Got food at Marathon Deli?", "Cheated on an exam?",
    "Used AI tools like GPT to complete homework?", "Been late to class?",
    "Been called out by the professor for being late?", "Skipped a class?",
    "Been caught skipping class by a professor?", "Skipped a whole class for the whole semester?",
    "Attended less than 5 lectures through a term?", "Turned in an assignment at 11:59?",
    "Pulled an all-nighter to finish a project or study for an exam?", "Dropped a class after the first week?",
    "Changed your major?", "Switched from CS to Infosys/Infosci?", "Had to carry a group project?",
    "Been the one that had to be carried at the group project?", "Placed a review on PlanetTerp?",
    "Failed a class?", "Retook a class?", "Went to class drunk/high?",
    "Studied at ESJ?", "Studied at McKeldin 4th floor quiet room?", "Studied in the study Carrel?",
    "Had a class later than 7pm?", "Had an 8am class?", "Joined a club or organization on campus?",
    "Attended a club meeting or event?", "Held a leadership position in a club?",
    "Participated in a campus-wide event like a concert or festival?",
    "Attended a guest lecture or speaker series?", "Been to a career fair on campus?",
    "Got a job/internship from a career fair or Handshake?", "Been part of a student government or council?",
    "Organized an event on campus?", "Received an award or recognition from a club or the university?",
    "Attended a UMD party?", "Been to a UMD frat party?", "Rushed for a fraternity or sorority?",
    "In a fraternity or sorority?", "Been to a sports game or match at UMD?",
    "Talked trash about UMD to another UMD student?", "Held hands with someone on campus?",
    "Kissed someone on campus?", "Hooked up on campus?", "Been in a relationship?",
    "Been in a relationship with a TA?", "Been in a relationship with a professor?",
    "Been to a Theta Chi party?", "Took the metro to DC?", "Commute to campus via car?",
    "Have a parking pass?", "Arrived late to class because of parking?",
    "Got a parking ticket?", "Got more than 5 parking tickets?", "Posted on the UMD Reddit?",
    "Follow @barstoolumd?", "Ate at the dining hall?", "Ate dining hall breakfast?",
    "Got sick from the dining hall?", "Worked out at Eppley?",
    "Participated in an intramural sports team?", "Listened to a concert at the Clarice?",
    "Performed at the Clarice?", "Called UMD a 'Public Ivy'?", "Touched Testudo’s nose?",
    "Gave Testudo offerings?", "Taken a picture with Testudo?", "Jumped in the fountain?",
    "Layed on the mall?", "Wondered who is under Testudo?", "Seen a furry on campus?",
    "Lived in Commons/Courtyards?", "Hosted a party in your Commons/Courtyards apartment?",
    "Waited 1+ week for Commons/Courtyards maintenance?", "Got in trouble with your RA?",
    "Lived in an off-campus apartment?", "Threw a party at your off-campus apartment?",
    "Been to RJ Bentley’s?", "Been to Turf’s?", "Been to Looney’s?", "Been to Cornerstone?",
    "Kicked out by your roommate because they were getting active ;) ?",
    "Kicked your roommate out because YOU were getting active ;) ?"
  ];

  // Generate the questions dynamically
  const container = document.getElementById("questions-container");
  questions.forEach((q, index) => {
    const label = document.createElement("label");
    label.innerHTML = `${index + 1}. <input type="checkbox" name="q${index}"> ${q}`;
    container.appendChild(label);
    container.appendChild(document.createElement("br"));
  });

  // Calculate My Score functionality (FIXED VERSION)
  const submitButton = document.getElementById("submit-btn");
  submitButton.addEventListener('click', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const checkedCount = checkboxes.length;
    const maxScore = questions.length;
    const score = maxScore - checkedCount;

    // Hide BOTH the test section AND the form
    document.getElementById("test-section").style.display = 'none';
    document.getElementById("purity-test").style.display = 'none';

    // Show results
    document.getElementById("results-section").style.display = 'block';
    document.getElementById("result-score").innerText = `${score}`;

    // Increment submissions in Google Sheets
    fetch('https://script.google.com/macros/s/AKfycbw_eVFUHJnY8M4Pz4ouAkLfge45waclJpBfW91cZXutzgnLDvVZSvRQ00BEkk9QalKJ6A/exec') // Use your web app URL
      .then(response => response.text())
      .then(data => {
        console.log(data); // Log the response from the script
        console.log("Submission counter updated.");
      })
      .catch(error => {
        console.error('Error incrementing submissions:', error);
        console.log("Submission counter failed to update.");
      });
  });

  // Clear Checkboxes functionality (unchanged)
  const clearButton = document.getElementById("clear-btn");
  clearButton.addEventListener('click', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
  });
});
