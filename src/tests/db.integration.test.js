const pool = require('../database/connection').pool.promise();

describe('DB tests', () => {
  beforeAll(async () => {
  });
  afterAll(async () => {
    pool.end();
  });

  test('DB connection', async () => {
    const x = await pool.getConnection();
    expect(x).toHaveProperty('connection');
  });
});
