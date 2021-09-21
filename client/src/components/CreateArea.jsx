import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import axios from "axios";

function CreateArea(props) {
	const [note, setNote] = useState({
		title: "",
		note: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;

		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}

	const submitNote = async (e) => {
		e.preventDefault();
		try {
			const postNote = await axios.post("http://localhost:5000/notes", {
				title: note.title,
				note: note.note,
			});
			console.log(postNote);
			window.location = "/";
		} catch (err) {
			console.error(err.message);
		}
	};

	const [popOut, setPopOut] = useState(false);

	function handlePopout() {
		setPopOut(!popOut);
	}

	return (
		<div>
			<form className="create-note">
				{popOut ? (
					<input
						name="title"
						onChange={handleChange}
						value={note.title}
						placeholder="Title"
					/>
				) : (
					""
				)}
				<textarea
					name="note"
					onChange={handleChange}
					onClick={handlePopout}
					value={note.note}
					placeholder="Take a note..."
					rows={popOut ? 3 : 1}
				/>

				<Zoom in={popOut}>
					<Fab onClick={submitNote}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
