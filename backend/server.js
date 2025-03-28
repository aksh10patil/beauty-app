const express = require("express");
const cors = require("cors");
const router = require("./routes/payments.routes");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Enhanced CORS configuration
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:5173',
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/', (req, res) => {
  res.status(200).json({ 
    status: 'running', 
    message: 'Server is up and running' 
  });
});

app.use('/api', router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!'
  });
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
}

// For Vercel deployment
module.exports = app;