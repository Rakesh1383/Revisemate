<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReviseMate - Smart Revision</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>ReviseMate</h1>
        <p>Enter the topic you want to revise:</p>
        <input type="text" id="topicInput" placeholder="Enter topic name...">
        <button onclick="showRevision()">Revise</button>
        <div id="revisionOutput"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f4f4f4;
    padding: 20px;
}

.container {
    max-width: 500px;
    margin: auto;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}

input, button {
    margin-top: 10px;
    padding: 10px;
    width: 80%;
    font-size: 16px;
}

button {
    background: #28a745;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background: #218838;
}
function showRevision() {
    let topic = document.getElementById("topicInput").value;
    let outputDiv = document.getElementById("revisionOutput");

    if (topic.trim() === "") {
        outputDiv.innerHTML = "<p>Please enter a topic to revise.</p>";
        return;
    }

    // Dummy revision content (Isse aap database se connect bhi kar sakte hain)
    let revisions = {
        "math": "Math is all about numbers and logic. Focus on formulas and practice problems.",
        "science": "Science explains the world! Study concepts and do experiments.",
        "history": "History is full of lessons. Remember key dates and events.",
        "english": "Grammar, vocabulary, and reading comprehension are key."
    };

    let revisionText = revisions[topic.toLowerCase()] || "No revision found for this topic. Try another one!";

    outputDiv.innerHTML = `<p><strong>${topic}:</strong> ${revisionText}</p>`;
}
