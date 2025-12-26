import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

const dbName = process.env.DB_NAME || 'codestorm_db';

connection.connect((err) => {
    if (err) {
        console.error('Initial Connection Error:', err);
        process.exit(1);
    }
    console.log('Connected to MySQL server.');

    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`, (err) => {
        if (err) throw err;
        console.log(`Database ${dbName} created or exists.`);

        connection.changeUser({ database: dbName }, (err) => {
            if (err) throw err;

            const createTableQuery = `
        CREATE TABLE IF NOT EXISTS teams (
            id INT AUTO_INCREMENT PRIMARY KEY,
            team_name VARCHAR(255) NOT NULL,
            leader_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(20) NOT NULL,
            college VARCHAR(255) NOT NULL,
            team_size INT NOT NULL,
            theme VARCHAR(100) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;

            connection.query(createTableQuery, (err) => {
                if (err) throw err;
                console.log('Teams table created or exists.');
                connection.end();
            });
        });
    });
});
