import express from 'express';
const app = express();
import { default as pool } from './db.js';
const port = 3000;

app.get('/animals', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM species');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

//grabbing indivd animals 
app.get('/individuals', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM individuals');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server started on 3000`);
  });
  