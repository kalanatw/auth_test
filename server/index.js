// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors()); 

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB);

// Use Routes
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
