// citation for the following code
// Date: 1/8/2026
// Modified from: class template
// Source URL: https://canvas.oregonstate.edu/courses/2031764/assignments/10323319?module_item_id=26243357

// Database
import db from './database/db-connector.js';

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
        const query1 = `CALL sp_get_trainers();`;
        const [results] = await db.query(query1);
        const trainers = results[0]
    
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
        const query1 = `CALL sp_get_pokemon();`;
        const [pokemon] = await db.query(query1);
    
        res.status(200).json({ pokemon });  // Send the results to the frontend

    } catch (error) {
        console.error("Error executing queries:", error);
        // Send a generic error message to the browser
        res.status(500).send("An error occurred while executing the database queries.");
    }
});

app.get('/treatments', async (req, res) => {
    try {
        // Create and execute our queries
        const query1 = `CALL sp_get_treatments();`;
        const [treatments] = await db.query(query1);
    
        res.status(200).json({ treatments });  // Send the results to the frontend

    } catch (error) {
        console.error("Error executing queries:", error);
        // Send a generic error message to the browser
        res.status(500).send("An error occurred while executing the database queries.");
    }
});

app.get('/pokemonSpecies', async (req, res) => {
    try {
        // Create and execute our queries
        const query1 = `CALL sp_get_species();`;
        const columnResults = await db.query(query1);
        console.log(columnResults);
        const pokemonSpecies = columnResults[0][0].COLUMN_TYPE.slice(6, -2).split("','");
    
        res.status(200).json({ pokemonSpecies });  // Send the results to the frontend

    } catch (error) {
        console.error("Error executing queries:", error);
        // Send a generic error message to the browser
        res.status(500).send("An error occurred while executing the database queries.");
    }
});

app.get('/pokemonTypes', async (req, res) => {
    try {
        // Create and execute our queries
        const query1 = `CALL sp_get_pokemonTypes();`;
        const columnResults = await db.query(query1);
        const pokemonTypes = columnResults[0][0].COLUMN_TYPE.slice(6, -2).split("','");
    
        res.status(200).json({ pokemonTypes });  // Send the results to the frontend

    } catch (error) {
        console.error("Error executing queries:", error);
        // Send a generic error message to the browser
        res.status(500).send("An error occurred while executing the database queries.");
    }
});

app.get('/sessions', async (req, res) => {
    try {
        // Create and execute our queries
        const query1 = `CALL sp_get_sessions();`;
        const [sessions] = await db.query(query1);
    
        res.status(200).json({ sessions });  // Send the results to the frontend

    } catch (error) {
        console.error("Error executing queries:", error);
        // Send a generic error message to the browser
        res.status(500).send("An error occurred while executing the database queries.");
    }
});

app.get('/sessionsHasTreatments', async (req, res) => {
    try {
        // Create and execute our queries
        const query1 = `CALL sp_get_sessionsHasTreatments();`;
        const [sessionsHasTreatments] = await db.query(query1);
    
        res.status(200).json({ sessionsHasTreatments });  // Send the results to the frontend

    } catch (error) {
        console.error("Error executing queries:", error);
        // Send a generic error message to the browser
        res.status(500).send("An error occurred while executing the database queries.");
    }
});

app.delete('/sessions/:id', async (req, res) => {
    try {
        const query1 = `DELETE FROM Sessions WHERE sessionId = ${req.params.id};`;
        console.log(req.params.id);
        const result = await db.query(query1);

        res.status(204).json();
    } catch (error){
        res.type('application/json').status(404).json(error);
    }
})

app.get('/reset', async (req, res) => {
    try {
        const query1 = "CALL sp_load_shiningpearlspadb();";
        const result = await db.query(query1);
        res.status(200).json({ message: "Reset complete." });
    } catch (error) {
        console.error("Error executing reset:", error);
        res.status(500).send("An error occurred while trying to reset.");
    }
})

// ########################################
// ########## LISTENER

app.listen(PORT, function () {
    console.log('Express started on http://classwork.engr.oregonstate.edu:' + PORT + '; press Ctrl-C to terminate.');
});