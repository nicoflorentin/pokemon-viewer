import React from "react"
import style from "./Loader.module.css"

const Loader = ({ image }) => {
	return (
		<>
			<img className={style.img} src={image} alt="loader" />
			<p>Loading might take approximately a minute due to server limitations. Please be patient...</p>
		</>
	)
}

export default Loader
