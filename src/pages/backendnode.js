const express = require('express');
const app = express();

// Serve static files from the frontend directory
app.use(express.static('./Prediction.jsx'));

// Endpoint to trigger the Python script for prediction
app.get('./Prediction.jsx', (req, res) => {
  // Create the dictionary for the input data
  const input = {
    sore_throat: [],
    fever: [],
    swollen_glands: [],
    congestion: [],
    headache: []
  };

  // Spawn a new child process for the Python script
  const pythonProcess = spawn('python', ['path/to/python_script.py']);

  // Handle output from the Python script
  pythonProcess.stdout.on('data', (data) => {
    // Process the data from the Python script
    const prediction = data.toString().trim();

    // Send the prediction back to the frontend
    res.send(prediction);
  });

  // Handle errors from the Python script
  pythonProcess.on('error', (error) => {
    // Send the error message back to the frontend
    res.status(500).send(error.message);
  });
  console.log(input);
}

);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
