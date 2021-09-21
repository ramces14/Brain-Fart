const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Create a note

app.post("/notes", async (req, res) => {
	try {
		const { title, note } = req.body;
		const postNote = await pool.query(
			"INSERT INTO notes (title, note) VALUES ($1, $2) RETURNING *",
			[title, note]
		);
		res.json(postNote.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

// Get all notes

app.get("/notes", async (req, res) => {
	try {
		const allNotes = await pool.query("SELECT * FROM notes");
		res.json(allNotes.rows);
	} catch (err) {
		console.error(err.message);
	}
});

// Get a note

app.get("/notes/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const oneNote = await pool.query("SELECT * FROM notes WHERE _id = $1", [
			id,
		]);
		res.json(oneNote.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

// Update a note

app.put("/notes/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { note, title } = req.body;
		const updateNote = await pool.query(
			"UPDATE notes SET note = $1, title = $2 WHERE _id = $3",
			[note, title, id]
		);
		res.json("Note updated!");
	} catch (err) {
		console.error(err.message);
	}
});

// Delete a note

app.delete("/notes/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deleteNote = await pool.query("DELETE FROM notes WHERE _id = $1", [
			id,
		]);
		res.json("Note deleted!");
	} catch (err) {
		console.error(err.message);
	}
});

app.listen(5000, () => {
	console.log("Server has started in port 5000");
});
