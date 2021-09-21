import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

function Note({ id, title, note }) {
	const handleClick = async () => {
		try {
			const deleteNote = await axios.delete(
				`http://localhost:5000/notes/${id}`
			);
			console.log(deleteNote);
			window.location = "/";
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<div className="note">
			<h1>{title}</h1>
			<p>{note}</p>
			<button onClick={handleClick}>
				<DeleteIcon />
			</button>
		</div>
	);
}

export default Note;
