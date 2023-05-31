import React, { useEffect } from "react";
import style from "./NavBar.module.css";
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
		<div className={style.navBarContainer}>
			<div className={style.logo}></div>
			<div className={style.links}>
				<Link to="/home">
					<button className={style.button}>HOME</button>
				</Link>
				<Link to="/form">
					<button className={style.button}>CREATE</button>
				</Link>
			</div>
			<SearchBar />
			<OrderFilters />
			<TypeFilter />
		</div>
	);
};

export default NavBar;
