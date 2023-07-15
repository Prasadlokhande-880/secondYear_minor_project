const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('prediction'));

app.post('/submit', (req, res) => {
  const { select1, select2, select3, select4, select5, select6 } = req.body;


  res.send('Symptoms submitted successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
