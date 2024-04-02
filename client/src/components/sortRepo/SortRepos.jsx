const SortRepos = ({ sortHandler, sortType }) => {
	return (
		<div className='mb-2 flex justify-center lg:justify-center'>
			<button
				type='button' onClick={() => sortHandler('recent')}
				className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${sortType === "recent" ? "border-green-500" : ""}`}
			>
				Most Recent
			</button>
			<button
				type='button' onClick={() => sortHandler("stars")}
				className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${sortType === "stars" ? "border-green-500" : ""}`}
			>
				Most Stars
			</button>
			<button
				type='button' onClick={() => sortHandler("forks")}
				className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${sortType === "forks" ? "border-green-500" : ""}`}
			>
				Most Forks
			</button>

			{/* <button
				type='button' onClick={() => sortHandler("forks")}
				className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass`}
			>
				Most Commit Message
			</button> */}
		</div>
	);
};

export default SortRepos;