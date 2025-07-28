const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Temporary reviews array
let reviews = [
  "Dr. Susheel Mohindru is undoubtedly the best doctor in Amritsar. His perfect diagnosis and years of experience gave me great confidence in my treatment.",
  "Truly the best cardiologist in Amritsar! Dr. Susheel Mohindru is incredibly experienced and his diagnosis was spot-on.",
  "Dr. Susheel Mohindru’s understanding of heart-related issues is unmatched. He’s the most experienced and best cardiologist in Amritsar.",
  "One of the most experienced and trusted doctors in Amritsar. His perfect diagnosis helped control my long-standing hypertension.",
  "Dr. Susheel Mohindru’s perfect diagnosis and treatment plan brought my sugar levels under control. Truly the best diabetologist in Amritsar.",
  "Extremely grateful to Dr. Susheel Mohindru. His years of experience show in every consultation. He is the most reliable medicine doctor in Amritsar.",
  "Dr. Susheel Mohindru’s guidance and treatment helped stabilize my father’s heart condition. A blessing to have the best cardiologist in Amritsar.",
  "Dr. Susheel Mohindru is hands down the best medicine doctor in Amritsar. Extremely knowledgeable and accurate in treatment.",
  "I trust Dr. Susheel Mohindru with my entire family’s health. He is the best cardiologist in Amritsar and always provides a perfect diagnosis.",
  "Finally found the right doctor for my diabetic issues. Dr. Susheel Mohindru is the best medicine specialist in Amritsar with a sharp mind.",
  "Dr. Susheel Mohindru’s diagnosis for my chest pain was on point. He’s the most experienced heart specialist in Amritsar.",
  "I feel healthier and happier under the care of Dr. Susheel Mohindru. A very senior and well-respected medicine specialist in Amritsar.",
  "I had been suffering from high blood pressure for years until I consulted Dr. Susheel Mohindru. His accurate diagnosis and clear explanation of lifestyle changes helped me bring it under control. Truly the best doctor in Amritsar!",
  "My father had chest pain and we were worried. Dr. Susheel Mohindru’s timely diagnosis saved him from a major heart issue. He is indeed the best cardiologist in Amritsar.",
  "After years of uncontrolled diabetes, I finally found relief with Dr. Susheel Mohindru’s treatment. His approach is holistic and effective. Highly recommend him as the best medicine specialist in Amritsar.",
  "I visited many doctors for my mother’s heart palpitations, but only Dr. Susheel Mohindru gave a proper diagnosis and effective treatment. He is the most experienced cardiologist in Amritsar.",
  "When my grandfather had high BP and dizziness, Dr. Susheel Mohindru treated him with utmost care. His years of experience show in every consultation. Best doctor in Amritsar!",
  "My diabetic condition was getting worse until I met Dr. Susheel Mohindru. His accurate diagnosis and medication plan changed my life. The best medicine doctor in Amritsar.",
  "My father had a severe heart condition, and Dr. Susheel Mohindru’s expertise saved his life. His perfect diagnosis and care make him the top cardiologist in Amritsar.",
  "For months I suffered from fatigue and palpitations. After meeting Dr. Susheel Mohindru, I finally got the right treatment. He is the best doctor in Amritsar without doubt.",
  "My grandmother had uncontrolled sugar for years. Dr. Susheel Mohindru helped stabilize her condition in just a few months. Best diabetologist in Amritsar.",
  "I had chest discomfort and visited Dr. Susheel Mohindru. His diagnosis was quick and accurate. Now I feel much better. Best cardiologist in Amritsar!",
  "He has been our family physician for years. The best medicine doctor in Amritsar, known for his correct and early diagnoses.",
  "It’s rare to find a doctor who is both knowledgeable and humble. Dr. Susheel Mohindru is the best medicine specialist in Amritsar for a reason.",
  "My heart condition is now completely under control thanks to Dr. Susheel Mohindru. A truly expert cardiologist in Amritsar.",
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
