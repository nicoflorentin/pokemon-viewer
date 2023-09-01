import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import * as actions from "../../redux/actions/index";
import upperCase from "../../helpers/upperCase";
import arrowLeft from "../../assets/images/arrow-left.svg";
import Loader from "../Loader/Loader";
import loaderGif from "../../assets/images/running.gif";

const Detail = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const {
		name,
		image,
		hit_points,
		attack,
		defense,
		speed,
		height,
		weight,
		Types: types,
	} = useSelector((state) => state.detail);

	useEffect(() => {
		dispatch(actions.getPokemonById(id)).then(() => setLoading(false));
		return dispatch(actions.cleanDetail());
	}, []);


	return (
		<div className={null}>
			<div className={null}>
				<Link to="/home">
					<img className={null} src={arrowLeft} alt="arrow" />
				</Link>
				<h3>{upperCase(name)}</h3>
			</div>
			{loading ? (
				<Loader image={loaderGif} />
			) : (
				<div className={null}>
					<img
						className={null}
						src={image && image}
						alt={name + id}
					/>
					<div className={null}>
						<p>Hit Points: {hit_points}</p>
						<p>Attack: {attack}</p>
						<p>Defense: {defense}</p>
						<p>Speed: {speed}</p>
						<p>Height: {height}</p>
						<p>Weight: {weight}</p>
						{types?.map((type) => (
							<span>{type.name}</span>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Detail;
