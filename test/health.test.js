const request = require('supertest');
const app = require('../index'); // adjust path if needed

test('GET /health should return 200', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
});
