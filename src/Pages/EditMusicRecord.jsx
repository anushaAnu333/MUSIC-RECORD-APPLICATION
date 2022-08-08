import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {
	getMusicRecords,
	getMusicRecordsRequest,
	updateMusicRecord,
} from "../Redux/AppReducer/action";
const EditMusicRecord = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const musicRecords = useSelector((store) => store.AppReducer.musicRecords);
	const [currentMusicAlbum, setCurrentMusicAlbum] = useState({});

	const [musicName, setMusicName] = useState("");
	const [artistName, setArtistName] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (musicName && artistName) {
			const payload = {
				name: musicName,
				artist: artistName,
			};
			dispatch(updateMusicRecord(id, payload)).then(() => {
				dispatch(getMusicRecords());
			});
		}
	};
	useEffect(() => {
		if (id) {
			const currentMusic = musicRecords.find((album) => album.id === id);
			if (currentMusic) {
				setMusicName(currentMusic.name);
				setArtistName(currentMusic.artist);
			}
		}
	}, [id, musicRecords]);

	return (
		<div>
			<h1>EditMusicRecord</h1>

			<form onSubmit={handleSubmit}>
				<div>
					<label>EDIT MUSIC NAME</label>
					<input
						value={musicName}
						onChange={(e) => setMusicName(e.target.value)}
					></input>
				</div>
				<div>
					<label>EDIT ARTIST NAME</label>
					<input
						value={artistName}
						onChange={(e) => setArtistName(e.target.value)}
					></input>
				</div>
				<button type="submit">Update</button>
			</form>
		</div>
	);
};

export default EditMusicRecord;
