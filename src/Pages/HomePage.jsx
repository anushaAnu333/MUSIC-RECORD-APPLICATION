import React from "react";
import FilterSort from "../Components/FilterSort";
import MusicRecords from "./MusicRecords";
import styled from "styled-components";

const HomePage = () => {
	return (
		<div>
			<h3>MUSIC RECORDES</h3>
			<HomePageWrapper>
				<FilterSortWrapper>
					<FilterSort />
				</FilterSortWrapper>
				<MusicRecordsWrapper>
					<MusicRecords />
				</MusicRecordsWrapper>
			</HomePageWrapper>
		</div>
	);
};

export default HomePage;

const HomePageWrapper = styled.div`
	display: flex;
	height: 100vh;
`;

const FilterSortWrapper = styled.div`
	width: 400px;
	border: 1px solid blue;
`;

const MusicRecordsWrapper = styled.div`
	width: 100%;
	border: 1px solid blue;
	display: grid;
	grid-template-columns: reapeat(auto-fit, minimax(300px, max-content));
	justify-content: center;
	grid-gap: 10px;
`;
