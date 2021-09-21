import React, { useEffect, useState } from "react";
import axios from "axios";
import Note from "./Note";
import CreateArea from "./CreateArea";

function Notepad() {
	const [notes, setNotes] = useState([]);

	const getNotes = async () => {
		try {
			const getNotes = await axios.get("http://localhost:5000/notes");
			console.log(getNotes.data);
			setNotes(getNotes.data);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getNotes();
	}, []);

	return (
		<div className="notepad">
			<CreateArea />
			{notes.map((note) => {
				return (
					<Note
						key={note._id}
						id={note._id}
						title={note.title}
						note={note.note}
					/>
				);
			})}
		</div>
	);
}

export default Notepad;
