import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'codestorm_db'
});

console.log('Fetching registered teams...\n');

connection.query('SELECT * FROM teams ORDER BY created_at DESC', (err, results) => {
    if (err) {
        console.error('Error fetching data:', err);
        process.exit(1);
    }

    if (results.length === 0) {
        console.log('No teams registered yet.');
    } else {
        console.table(results);
    }

    connection.end();
});
