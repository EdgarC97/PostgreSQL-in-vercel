const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
});

pool.connect((err) => {
    if (err) {
        console.error('Error connecting to PostgreSQL:', err);
        process.exit(-1);
    }
    console.log("Connect to PostgreSQL succesfully!")
});

module.exports = pool;
