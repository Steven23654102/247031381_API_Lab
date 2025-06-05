import { run_query } from '../helpers/database';

export const getAll = async () => {
  const sql = 'SELECT * FROM articles';
  return await run_query(sql);
};

export const getById = async (id: number) => {
  const sql = 'SELECT * FROM articles WHERE id = ?';
  return await run_query(sql, [id]);
};
