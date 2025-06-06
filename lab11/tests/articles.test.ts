jest.mock('../models/articles.model'); 

import request from 'supertest';
import app from '../src/app';

describe('GET /api/v1/articles', () => {
  it('Should return 200 and contain JSON', async () => {
    const res = await request(app.callback()).get('/api/v1/articles');
    expect(res.status).toBe(200);
    expect(res.type).toMatch(/json/);
    expect(Array.isArray(res.body)).toBe(true); 
  });
});
