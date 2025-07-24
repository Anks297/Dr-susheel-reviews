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
  "I was referred to Dr. Susheel Mohindru for my heart palpitations, and I must say he’s the best cardiologist in Amritsar with a gift for accurate diagnosis.",
  "Dr. Susheel Mohindru’s perfect diagnosis and treatment plan brought my sugar levels under control. Truly the best diabetologist in Amritsar.",
  "Extremely grateful to Dr. Susheel Mohindru. His years of experience show in every consultation. He is the most reliable medicine doctor in Amritsar.",
  "My family has been visiting Dr. Susheel Mohindru for years. He’s the most experienced and trustworthy physician in Amritsar.",
  "Dr. Susheel Mohindru’s guidance and treatment helped stabilize my father’s heart condition. A blessing to have the best cardiologist in Amritsar.",
  "One of the best decisions I made was visiting Dr. Susheel Mohindru. His experience as a cardiologist in Amritsar is evident from the first consultation.",
  "Dr. Susheel Mohindru is hands down the best medicine doctor in Amritsar. Extremely knowledgeable and accurate in treatment.",
  "I trust Dr. Susheel Mohindru with my entire family’s health. He is the best cardiologist in Amritsar and always provides a perfect diagnosis.",
  "Finally found the right doctor for my diabetic issues. Dr. Susheel Mohindru is the best medicine specialist in Amritsar with a sharp mind.",
  "Dr. Susheel Mohindru’s diagnosis for my chest pain was on point. He’s the most experienced heart specialist in Amritsar.",
  "His approach is professional yet warm. He is without a doubt the best cardiologist in Amritsar and his diagnosis is always spot-on.",
  "I feel healthier and happier under the care of Dr. Susheel Mohindru. A very senior and well-respected medicine specialist in Amritsar.",
  "He has been our family physician for years. The best medicine doctor in Amritsar, known for his correct and early diagnoses.",
  "Dr. Susheel Mohindru is a senior expert with deep knowledge of cardiology and internal medicine. Truly the best doctor in Amritsar.",
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
