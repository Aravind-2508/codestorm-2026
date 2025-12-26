import express from 'express';
import cors from 'cors';
import db from './db.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('CodeStorm 2024 API is running');
});

// Registration Endpoint
app.post('/api/register', (req, res) => {
    console.log('Received registration request:', req.body);

    const { teamName, leaderName, email, phone, college, teamSize, theme } = req.body;

    if (!teamName || !leaderName || !email || !phone || !college || !teamSize || !theme) {
        console.log('Validation failed: Missing fields');
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = `INSERT INTO teams (team_name, leader_name, email, phone, college, team_size, theme) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [teamName, leaderName, email, phone, college, teamSize, theme];

    console.log('Executing database query...');
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Database Error details:', err);
            return res.status(500).json({ error: 'Database error: ' + err.message });
        }
        console.log('Registration successful, ID:', result.insertId);
        res.status(201).json({ message: 'Registration successful', teamId: result.insertId });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
