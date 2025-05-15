// Array to store chat comments in memory (Note: data will be lost when server restarts)
let comments = []; 

/**
 * API handler for chat functionality
 * Supports GET and POST methods for retrieving and adding comments
 */
export default function handler(req, res) {
  // Handle GET requests - return all comments
  if (req.method === 'GET') {
    res.status(200).json(comments);
  } 
  // Handle POST requests - add a new comment
  else if (req.method === 'POST') {
    // Extract name and text from request body
    const { name, text } = req.body;
    // Create new comment object with timestamp
    const newComment = { name, text, timestamp: Date.now() };
    // Add new comment to the beginning of the array (most recent first)
    comments.unshift(newComment);
    // Return the newly created comment with 201 Created status
    res.status(201).json(newComment);
  } 
  // Handle unsupported HTTP methods
  else {
    res.status(405).end(); // Method Not Allowed
  }
}