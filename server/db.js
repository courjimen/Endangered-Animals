
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    user: 'tpl1122_12',
    host: '/tmp',
    database: "animals",
    port: 5432,
});

export default pool;