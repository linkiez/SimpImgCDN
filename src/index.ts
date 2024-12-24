import express from 'express';
import path from 'path';

// Create a new express application instance
const app = express();

// Define the port to run the server on
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a simple route to check if the server is running
app.get('/health', (req, res) => {
    res.status(200).send('Server is healthy');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
