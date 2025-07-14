const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const counterRoutes = require('./routes/counter');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use('/counter', counterRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
