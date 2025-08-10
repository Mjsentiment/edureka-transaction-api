const express = require('express');
const app = express();

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Only start server if not in test mode
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}

module.exports = app;
