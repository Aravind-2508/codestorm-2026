import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

console.log('Testing MySQL Connection...');
console.log(`Host: ${process.env.DB_HOST || '127.0.0.1'}`);
console.log(`User: ${process.env.DB_USER || 'root'}`);
console.log('Database: codestorm_db');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'codestorm_db'
});

connection.connect((err) => {
    if (err) {
        console.error('❌ CONNECTION FAILED:', err.message);
        process.exit(1);
    }
    console.log('✅ SUCCESS: Connected to database');

    connection.query('SELECT 1 + 1 AS solution', (error, results) => {
        if (error) {
            console.error('❌ QUERY FAILED:', error.message);
            process.exit(1);
        }
        console.log('✅ SUCCESS: Database query executed.', results);
        connection.end();
        process.exit(0);
    });
});
