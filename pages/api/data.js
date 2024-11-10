// pages/api/data.js

export default function handler(req, res) {
    // Handle different HTTP methods (GET, POST, etc.)
    if (req.method === 'GET') {
      // Respond with JSON
      res.status(200).json({ message: 'Hello from the API!', success: true });
    } else {
      // Handle any other HTTP methods
      res.status(405).json({ message: 'Method not allowed' });
    }
  }