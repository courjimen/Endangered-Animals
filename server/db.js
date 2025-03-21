
const { Pool } = require('pg');

const pool = new Pool({
    user: 'tpl1122_12',
    host: '/tmp',
    database: "animals",
    port: 5432,
});

module.exports = pool;