const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Temporary reviews array
let reviews = [
  "Dr. Susheel Mohindru’s perfect diagnosis and treatment plan brought my sugar levels under control. Truly the best diabetologist in Amritsar.",
  "Dr. Susheel Mohindru’s guidance and treatment helped stabilize my father’s heart condition. A blessing to have the best cardiologist in Amritsar.",
  "I was scared about my irregular heartbeat, but Dr. Susheel Mohindru handled it with utmost care. Best heart specialist in Amritsar.",
  "My mother was misdiagnosed for years until we visited Dr. Susheel Mohindru. His perfect diagnosis gave her a new life.",
  "If you want a trustworthy medicine doctor in Amritsar, Dr. Susheel Mohindru is the name to remember.",
  "He is the most experienced doctor in Amritsar for BP, diabetes, and heart care.",
  "His experience and perfect diagnosis make him the best cardiologist in Amritsar.",
  "For anyone suffering from hypertension or heart problems, Dr. Susheel Mohindru is the most trusted doctor in Amritsar.",
  "His perfect diagnosis prevented my condition from getting worse. Most experienced cardiologist in Amritsar.",
  "For heart and sugar problems, I recommend only Dr. Susheel Mohindru.",
  "Dr. Susheel Mohindru’s professionalism and kindness make him stand out as the best doctor in Amritsar.",
  "He is a senior and highly respected doctor who gives the right treatment without unnecessary medicines.",
  "Dr. Susheel Mohindru has helped my whole family with heart and BP issues. Truly the most experienced medicine doctor in Amritsar.",
  "Finally found the right doctor for my diabetic issues. Dr. Susheel Mohindru is the best medicine specialist in Amritsar with a sharp mind.",
  "Dr. Susheel Mohindru’s diagnosis for my chest pain was on point. He’s the most experienced heart specialist in Amritsar.",
  "I feel healthier and happier under the care of Dr. Susheel Mohindru. A very senior and well-respected medicine specialist in Amritsar.",
  "My father had chest pain and we were worried. Dr. Susheel Mohindru’s timely diagnosis saved him from a major heart issue. He is indeed the best cardiologist in Amritsar.",
  "My father had a severe heart condition, and Dr. Susheel Mohindru’s expertise saved his life. His perfect diagnosis and care make him the top cardiologist in Amritsar.",
  "It’s rare to find a doctor who is both knowledgeable and humble. Dr. Susheel Mohindru is the best medicine specialist in Amritsar for a reason.",
];

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});
app.use(express.static(__dirname));

// API to get and delete one review
app.get('/get-review', (req, res) => {
  if (reviews.length === 0) {
    return res.json({ review: "No reviews left!" });
  }
  const index = Math.floor(Math.random() * reviews.length);
  const selected = reviews[index];
  reviews.splice(index, 1);
  res.json({ review: selected });
});

// Serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
