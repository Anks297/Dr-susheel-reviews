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
  "If you want a trustworthy medicine doctor in Amritsar, Dr. Susheel Mohindru is the name to remember.",
  "He is the most experienced doctor in Amritsar for BP, diabetes, and heart care.",
  "I was suffering from chest discomfort for months. Dr. Susheel Mohindru’s expertise helped me get the right treatment. A true heart specialist in Amritsar.",
  "If you want a doctor who understands heart, sugar, and BP problems in depth, visit Dr. Susheel Mohindru. He is the most experienced medicine specialist in Amritsar.",
  "My diabetes is now under control thanks to Dr. Susheel Mohindru’s perfect treatment plan. Best diabetologist in Amritsar without any doubt.",
  "He is one of the few doctors who actually take time to explain everything. Best doctor in Amritsar for heart and BP care.",
  "My uncle’s angina problem was handled so well by Dr. Susheel Mohindru. Highly recommended cardiologist in Amritsar.",
  "The most experienced medicine doctor in Amritsar, Dr. Susheel Mohindru, treated my long-standing BP problem in just a few visits.",
  "Dr. Susheel Mohindru’s perfect diagnosis saved me from unnecessary surgeries. Truly the best heart specialist in Amritsar.",
  "I’ve met many doctors, but Dr. Susheel Mohindru’s experience and understanding are unmatched. The best medicine specialist in Amritsar.",
  "Dr. Susheel Mohindru is very humble, highly skilled, and gives the most accurate treatment. Best cardiologist in Amritsar.",
  "My father’s sugar level was fluctuating for years. After visiting Dr. Susheel Mohindru, it’s finally under control. Best diabetologist in Amritsar.",
  "His perfect diagnosis helped my mother’s heart condition improve drastically. Most experienced doctor in Amritsar for cardiology.",
  "Dr. Susheel Mohindru is a blessing for heart patients in Amritsar. His perfect diagnosis makes all the difference.",
  "If you are searching for the best medicine specialist in Amritsar, go to Dr. Susheel Mohindru without a second thought.",
  "I trust only Dr. Susheel Mohindru for my blood pressure treatment. The most experienced doctor in Amritsar.",
  "His guidance has helped me manage both diabetes and hypertension perfectly. Best doctor in Amritsar for lifestyle diseases.",
  "Dr. Susheel Mohindru’s calm nature and expertise make him the best cardiologist in Amritsar.",
  "He diagnosed my heart murmur perfectly and started timely treatment. Most experienced cardiologist in Amritsar.",
  "His perfect diagnosis prevented my condition from getting worse. Most experienced cardiologist in Amritsar.",
  "For heart and sugar problems, I recommend only Dr. Susheel Mohindru.",
  "Dr. Susheel Mohindru’s professionalism and kindness make him stand out as the best doctor in Amritsar.",
  "Dr. Susheel Mohindru has helped my whole family with heart and BP issues. Truly the most experienced medicine doctor in Amritsar.",
  "Dr. Susheel Mohindru’s diagnosis for my chest pain was on point. He’s the most experienced heart specialist in Amritsar.",
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
