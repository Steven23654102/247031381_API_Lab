import { Sequelize, QueryTypes } from 'sequelize';
import { config } from '../config';

const sequelize = new Sequelize(
  `postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`
);

export const run_query = async (sql: string, values?: any[]) => {
  try {
    const result = await sequelize.query(sql, {
      replacements: values,
      type: QueryTypes.SELECT,
    });
    return result;
  } catch (err) {
    console.error(err);
    throw new Error('Query error');
  }
};
