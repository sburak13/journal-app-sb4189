const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const entryRoutes = require('./routes/entry-routes');

const app = express();

mongoose.connect(process.env.MONGO_DB_URI);

app.use(cors());
app.use(express.json());

app.use('/entries', entryRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API works' });
});

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});
