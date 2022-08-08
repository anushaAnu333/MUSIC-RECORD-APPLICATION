import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getMusicRecords } from "../Redux/AppReducer/action";
import { Link } from "react-router-dom";
const SingleMusicRecord = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const musicRecords = useSelector((store) => store.AppReducer.musicRecords);
	const [currentMusicAlbum, setCurrentMusicAlbum] = useState({});

	useEffect(() => {
		if (musicRecords.length === 0) {
			dispatch(getMusicRecords());
		}
	});
	useEffect(() => {
		if (id) {
			const currentMusic = musicRecords.find((album) => album.id === id);
			currentMusic && setCurrentMusicAlbum(currentMusic);
		}
	}, [id, musicRecords]);

	return (
		<div>
			<h1>{currentMusicAlbum.name}</h1>

			<div>
				<Link to={`/music/${id}/edit`}>EDIT</Link>
			</div>
		</div>
	);
};

export default SingleMusicRecord;
