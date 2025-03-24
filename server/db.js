
import pg from 'pg';
const { Pool } = pg;

//need to update with your postgresql credentials
const pool = new Pool({
    user: 'tpl1122_12',
    host: '/tmp',
    database: "animals",
    port: 5432,
});

async function query(text, params) {
    const client = await pool.connect();
    try {
      const res = await client.query(text, params);
      return res;
    } finally {
      client.release();
    }
  }
  
export default { query, pool };