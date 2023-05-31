import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import style from "./OrderFilters.module.css";

const OrderFilters = () => {
	const dispatch = useDispatch();
	const orderHandler = (action, sort) => {
		dispatch(actions.orderPokemons({ action, sort }));
	};

	return (
		<div className={style.componentContainer}>
			<div>
				<span>Order by name </span>
				<button
					className={style.button}
					onClick={() => orderHandler("ASCENDANT", "name")}
				>
					Ascendant
				</button>
				<button
					className={style.button}
					onClick={() => orderHandler("DESCENDANT", "name")}
				>
					Descendant
				</button>
			</div>
			<div>
				<span>Order by attack </span>
				<button
					className={style.button}
					onClick={() => orderHandler("ASCENDANT", "attack")}
				>
					Ascendant
				</button>
				<button
					className={style.button}
					onClick={() => orderHandler("DESCENDANT", "attack")}
				>
					Descendant
				</button>
			</div>
		</div>
	);
};

export default OrderFilters;
