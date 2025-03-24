import express from 'express';
const app = express();
import db from './db.js';
const port = 3000;
import cors from 'cors';

app.use(cors());
//3 animal species
// app.get('/animals', async (req, res) => {
//     try {
//         const result = await pool.query('SELECT * FROM species');
//         res.json(result.rows);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//     }
// });

// //grabbing indivd animals 
// app.get('/individuals', async (req, res) => {
//     try {
//         const result = await pool.query('SELECT * FROM individuals');
//         res.json(result.rows);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//     }
// });

//sightings of individuals
app.get('/sightings', async (req, res) => {
    try {
        const result = await db.query('SELECT sightings.*, individuals.nickname FROM sightings JOIN individuals ON sightings.animal_nickname = individuals.nickname');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching sightings: ', err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/sightings', async (req, res) => {
    const { sighting_datetime, animal_nickname, location, healthy, sighter_email } = req.body;
    try {
      const result = await db.query(
        'INSERT INTO sightings (sighting_datetime, animal_nickname, location, healthy, sighter_email) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [sighting_datetime, animal_nickname, location, healthy, sighter_email]
      );
      res.json(result.rows[0]);
    } catch (err) {
        console.error('Error adding sighting: ', err);
        res.status(500).send('Internal Server Error');
    }
});
  

app.listen(port, () => {
    console.log(`Server started on 3000`);
  });
  