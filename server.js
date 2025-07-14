const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Temporary reviews array
let reviews = [
  "Dr. Susheel Mohindru is undoubtedly the best doctor in Amritsar. His perfect diagnosis and years of experience gave me great confidence in my treatment.",
  "Truly the best cardiologist in Amritsar! Dr. Susheel Mohindru is incredibly experienced and his diagnosis was spot-on.",
  "As someone who struggled with diabetes and blood pressure for years, I found real relief only after meeting Dr. Susheel Mohindru. The best medicine specialist in Amritsar without a doubt.",
  "Dr. Susheel Mohindru’s understanding of heart-related issues is unmatched. He’s the most experienced and best cardiologist in Amritsar.",
  "One of the most experienced and trusted doctors in Amritsar. His perfect diagnosis helped control my long-standing hypertension.",
  "A big thank you to Dr. Susheel Mohindru, the best medicine specialist in Amritsar. He handled my complicated health issues with calm and expertise.",
  "I was referred to Dr. Susheel Mohindru for my heart palpitations, and I must say he’s the best cardiologist in Amritsar with a gift for accurate diagnosis.",
  "If you want the best doctor in Amritsar who actually listens, understands, and treats with precision, visit Dr. Susheel Mohindru.",
  "Dr. Susheel Mohindru’s perfect diagnosis and treatment plan brought my sugar levels under control. Truly the best diabetologist in Amritsar.",
  "Extremely grateful to Dr. Susheel Mohindru. His years of experience show in every consultation. He is the most reliable medicine doctor in Amritsar.",
  "Dr. Susheel Mohindru is one of the most respected and experienced doctors in Amritsar. His diagnosis for my blood pressure was precise and effective.",
  "Such a kind and experienced cardiologist. Dr. Susheel Mohindru truly stands out as the best in Amritsar.",
  "My family has been visiting Dr. Susheel Mohindru for years. He’s the most experienced and trustworthy physician in Amritsar.",
  "Thanks to the best doctor in Amritsar—Dr. Susheel Mohindru—for identifying my health issue when others couldn’t. His diagnosis was truly perfect.",
  "Dr. Susheel Mohindru’s guidance and treatment helped stabilize my father’s heart condition. A blessing to have the best cardiologist in Amritsar.",
  "Absolutely the best medicine specialist in Amritsar. Dr. Susheel Mohindru takes the time to explain every aspect and gives a perfect diagnosis.",
  "I was tired of wrong treatments until I met Dr. Susheel Mohindru. He diagnosed my issue perfectly and I started feeling better in days.",
  "One of the best decisions I made was visiting Dr. Susheel Mohindru. His experience as a cardiologist in Amritsar is evident from the first consultation.",
  "For blood pressure-related issues, Dr. Susheel Mohindru is the best doctor in Amritsar. I’ve never felt more confident in a diagnosis.",
  "His perfect diagnosis saved me from unnecessary treatments. Dr. Susheel Mohindru is not only experienced but very compassionate too.",
  "Dr. Susheel Mohindru is hands down the best medicine doctor in Amritsar. Extremely knowledgeable and accurate in treatment.",
  "I trust Dr. Susheel Mohindru with my entire family’s health. He is the best cardiologist in Amritsar and always provides a perfect diagnosis.",
  "Finally found the right doctor for my diabetic issues. Dr. Susheel Mohindru is the best medicine specialist in Amritsar with a sharp mind.",
  "Dr. Susheel Mohindru’s diagnosis for my chest pain was on point. He’s the most experienced heart specialist in Amritsar.",
  "He has an amazing understanding of chronic illnesses. Dr. Susheel Mohindru is the best doctor in Amritsar—patient, experienced, and wise.",
  "From the moment I walked into his clinic, I knew I was in safe hands. Best cardiologist in Amritsar with years of proven experience.",
  "Dr. Susheel Mohindru treated my mother's high blood pressure with precision. He is a true gem and the most trusted doctor in Amritsar.",
  "His treatment has changed my life. My sugar and BP are now in control thanks to Dr. Susheel Mohindru, the best medicine doctor in Amritsar.",
  "I can confidently say Dr. Susheel Mohindru is the most experienced and accurate doctor I’ve visited in Amritsar. Highly recommended.",
  "His approach is professional yet warm. He is without a doubt the best cardiologist in Amritsar and his diagnosis is always spot-on.",
  "I feel healthier and happier under the care of Dr. Susheel Mohindru. A very senior and well-respected medicine specialist in Amritsar.",
  "Dr. Susheel Mohindru’s clinic is where expertise meets empathy. He is the best doctor in Amritsar for heart and diabetic care.",
  "I thank Dr. Susheel Mohindru for giving me a new direction in my treatment. Most experienced and accurate physician I’ve come across.",
  "Perfect diagnosis, detailed explanation, and genuine care—Dr. Susheel Mohindru is clearly the best cardiologist in Amritsar.",
  "He has been our family physician for years. The best medicine doctor in Amritsar, known for his correct and early diagnoses.",
  "Dr. Susheel Mohindru is a senior expert with deep knowledge of cardiology and internal medicine. Truly the best doctor in Amritsar.",
  "I visited several doctors before, but Dr. Susheel Mohindru’s diagnosis was the first that worked. Best cardiologist in Amritsar, no doubt.",
  "Dr. Susheel Mohindru helped me overcome my long-standing BP and sugar issues. A highly experienced and respected doctor in Amritsar.",
  "It’s rare to find a doctor who is both knowledgeable and humble. Dr. Susheel Mohindru is the best medicine specialist in Amritsar for a reason.",
  "My heart condition is now completely under control thanks to Dr. Susheel Mohindru. A truly expert cardiologist in Amritsar.",
  "His perfect diagnosis avoided unnecessary tests and saved me time and stress. Most experienced and trusted doctor in Amritsar."
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
