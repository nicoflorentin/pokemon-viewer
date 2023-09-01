import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import upperCase from "../../helpers/upperCase";
import * as actions from "../../redux/actions/index";

const TypeFilter = () => {
	const [selectedType, setSelectedType] = useState("");
	const dispatch = useDispatch();
	const types = useSelector((state) => state.types);

	const handleTypeChange = (event) => {
		const type = event.target.value;
		setSelectedType(type);
		dispatch(actions.filterByType(type));
	};

	return (
		<div>
			<label>Filter by type</label>
			<select
				className={null}
				value={selectedType}
				onChange={handleTypeChange}
			>
				<option value="none" disabled>
					Select a type
				</option>
				<option value="all">Todos</option>
				{types.map((type) => (
					<option key={type.id} value={type.name}>
						{upperCase(type.name)}
					</option>
				))}
			</select>
		</div>
	);
};

export default TypeFilter