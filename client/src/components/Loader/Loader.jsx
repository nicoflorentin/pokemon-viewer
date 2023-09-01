import React from "react";
import style from "./Loader.module.css";

const Loader = ({ image }) => {
	return <img className={style.loader} src={image} alt="loader" />;
};

export default Loader;
