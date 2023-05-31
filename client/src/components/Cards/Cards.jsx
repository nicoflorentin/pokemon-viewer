import React, { useState } from "react";
import Card from "../Card/Card.jsx";
import style from "./Cards.module.css";
import Loader from "../Loader/Loader.jsx";
import pikachu from "../../assets/images/loading.gif";

const Cards = ({ pokemons, loading }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 12;

	const renderItems = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return pokemons
			.slice(startIndex, endIndex)
			.map((item) => <Card key={item.id} pokemon={item}></Card>);
	};

	const totalPages = Math.ceil(pokemons.length / itemsPerPage);

	const goToPage = (pageNumber) => {
		if (pageNumber < 1 || pageNumber > totalPages) return;
		setCurrentPage(pageNumber);
	};

	const currentPageStyleHandler = (index) => {
		if (currentPage === index) {
			return style.currentPage;
		}
	};

	const renderPageNumbers = (totalPages) => {
		const pageNumbers = [];
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<button
					className={`${style.pageButton} ${currentPageStyleHandler(
						i
					)}`}
					key={i}
					onClick={() => goToPage(i)}
				>
					{i}
				</button>
			);
		}
		return pageNumbers;
	};
	return (
		<div className={style.cardsContainer}>
			<div className={style.pagesContainer}>
				<button
					className={style.navButton}
					onClick={() => goToPage(currentPage - 1)}
				>
					Back
				</button>
				{!!pokemons.length
					? renderPageNumbers(totalPages)
					: renderPageNumbers(3)}
				<button
					className={style.navButton}
					onClick={() => goToPage(currentPage + 1)}
				>
					Next
				</button>
			</div>
			{loading ? (
				<div className={style.loader}>
					<Loader image={pikachu}></Loader>
				</div>
			) : (
				<div className={style.cardsRenderContainer}>
					{!!pokemons.length && renderItems()}
				</div>
			)}
		</div>
	);
};

export default Cards;
