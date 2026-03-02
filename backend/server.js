// citation for the following code
// Date: 1/8/2026
// Modified from: class template
// Source URL: https://canvas.oregonstate.edu/courses/2031764/assignments/10323319?module_item_id=26243357

// Database
import db from '../database/db-connector';

// Express
import express from 'express';
const app = express();

// Middleware
import cors from 'cors';
app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json()); // this is needed for post requests


const PORT = 13139;

// ########################################
// ########## ROUTE HANDLERS

// READ ROUTES
app.get('/trainers', async (req, res) => {
    try {
        // Create and execute our queries
        const query1 = `SELECT * FROM Trainers;`;
        const [trainers] = await db.query(query1);
    
        res.status(200).json({ trainers });  // Send the results to the frontend

    } catch (error) {
        console.error("Error executing queries:", error);
        // Send a generic error message to the browser
        res.status(500).send("An error occurred while executing the database queries.");
    }
});

app.get('/pokemon', async (req, res) => {
    try {
        // Create and execute our queries
        const query1 = `SELECT PokemonId, Pokemon.nickname, Pokemon.pokemonType, Pokemon.species, Pokemon.notes, Trainers.firstName, Trainers.lastName FROM Pokemon
JOIN Trainers ON Pokemon.trainerId = Trainers.trainerId;`;
        const [pokemon] = await db.query(query1);
    
        res.status(200).json({ pokemon });  // Send the results to the frontend

    } catch (error) {
        console.error("Error executing queries:", error);
        // Send a generic error message to the browser
        res.status(500).send("An error occurred while executing the database queries.");
    }
});

// ########################################
// ########## LISTENER

app.listen(PORT, function () {
    console.log('Express started on http://classwork.engr.oregonstate.edu:' + PORT + '; press Ctrl-C to terminate.');
});