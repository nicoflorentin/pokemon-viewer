import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import OrderFilters from "../OrderFilters/OrderFilters";
import TypeFilter from "../TypeFilter/TypeFilter";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";

const NavBar = () => {
	const dispatch = useDispatch();
	const types = useSelector((state) => state.types);
	useEffect(() => {
		!types.length && dispatch(actions.getTypes());
	}, []);

	return (
		<div className={null}>
			<div className={null}></div>
			<div className={null}>
				<Link to="/home">
					<button className={null}>HOME</button>
				</Link>
				<Link to="/form">
					<button className={null}>CREATE</button>
				</Link>
			</div>
			<SearchBar />
			<OrderFilters />
			<TypeFilter />
		</div>
	);
};

export default NavBar;
