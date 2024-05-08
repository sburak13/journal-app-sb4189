const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const entryRoutes = require('./routes/entry-routes');

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_DB_URI);

app.use(cors());
app.use(express.json());

app.use('/entries', entryRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API works' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is listening on port ${PORT}`);
});