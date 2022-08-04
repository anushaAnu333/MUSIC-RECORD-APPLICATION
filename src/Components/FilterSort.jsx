import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSort = () => {
	const [searchParams, setSearchPrams] = useSearchParams();
	const initialGenreParams = searchParams.getAll("genre");
	const [category, setCategory] = useState(initialGenreParams || []);
	const initialSortParams=searchParams.getAll("sortBy")
	const [sortBy,setSortBy]=useState(initialSortParams[0] || "")
	
	
	const handleSort=(e)=>{
setSortBy(e.target.value)
	}

	const handleGenreChange = (e) => {
		const option = e.target.value;
		let newCategory = [...category];
		if (category.includes(option)) {
			newCategory.splice(newCategory.indexOf(option), 1);
		} else {
			newCategory.push(option);
		}
		setCategory(newCategory);
	};
	// console.log(category)
	useEffect(() => {
		setSearchPrams({ genre: category,sortBy:sortBy });
	}, [category, setSearchPrams,sortBy]);
	// console.log(searchParams.getAll("genre"));

	console.log(initialSortParams)
	return (
		<div>
			<h3>Filter</h3>
			<div>
				<input
					type="checkbox"
					defaultChecked={category.includes("K-Pop")}
					value="K-Pop"
					onChange={handleGenreChange}
				/>
				<label>K-Pop</label>
			</div>
			<div>
				<input
					type="checkbox"
					defaultChecked={category.includes("Country")}
					value="Country"
					onChange={handleGenreChange}
				/>
				<label>Country</label>
			</div>
			<div>
				<input
					type="checkbox"
					defaultChecked={category.includes("Pop")}
					value="Pop"
					onChange={handleGenreChange}
				/>
				<label>Pop</label>
			</div>
			<div>
				<input
					type="checkbox"
					defaultChecked={category.includes("Hard Rock")}
					value="Hard Rock"
					onChange={handleGenreChange}
				/>
				<label>Hard Rock</label>
			</div>
			<div>
				<input
					type="checkbox"
					defaultChecked={category.includes("Classical Crossover")}
					value="Classical Crossover"
					onChange={handleGenreChange}
				/>
				<label>Classical Crossover</label>
			</div>
			<div>
				<input
					type="checkbox"
					defaultChecked={category.includes("Singer/Songwriter")}
					value="Singer/Songwriter"
					onChange={handleGenreChange}
				/>
				<label>Singer/Songwriter</label>
			</div>
			<div>
				<input
					type="checkbox"
					defaultChecked={category.includes("Heavy Metal")}
					value="Heavy Metal"
					onChange={handleGenreChange}
				/>
				<label>Heavy Metal</label>
			</div>
			<div>
				<input
					type="checkbox"
					defaultChecked={category.includes("Rock")}
					value="Rock"
					onChange={handleGenreChange}
				/>
				<label>Rock</label>
			</div>
			<div>
				<input
					type="checkbox"
					defaultChecked={category.includes("Christmas")}
					value="Christmas"
					onChange={handleGenreChange}
				/>
				<label>Christmas</label>
			</div>
			<h3>Sort</h3>
			<div onChange={handleSort}>
				<div>
					<input
						type="radio"
						name="sortBy"
						value="asc"
						defaultChecked={sortBy === "asc"}
					/>
					<label> Ascending</label>
				</div>
				<div>
					<input
						type="radio"
						name="sortBy"
						value="desc"
						defaultChecked={sortBy === "desc"}
					/>
					<label>Descending</label>
				</div>
			</div>
		</div>
	);
};

export default FilterSort;
