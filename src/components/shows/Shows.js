import React, { useEffect, useContext } from 'react';
import ShowContext from '../../context/show/showContext';
import Loading from '../layout/Loading';
import ShowItem from './ShowItem';

const Shows = () => {
	const showContext = useContext(ShowContext);

	const { shows, fetchPopularShows, setLoading, loading, setQuery, query, searchShow } = showContext;

	useEffect(() => {
		if (query !== '') {
			console.log(query);
		} else {
			setLoading();
			fetchPopularShows();
		}
		//eslint-disable-next-line
	}, []);

	const handleChange = (e) => {
		e.preventDefault();
		setQuery(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading();
		if (query === '') {
			fetchPopularShows();
		} else {
			searchShow(query);
			setQuery('');
		}
	};

	let content;

	if (loading) {
		content = <Loading />;
	}
	else if (shows.length === 0) {
		content = <div className="container pt-4">
			<h1 className='ta-center text-head text-primary'>No Results Found!</h1>
		</div>
	}
	else {
		content = (
			<div className="container grid grid-col-4 gap-1 py-2">
				{shows.map((show) => <ShowItem key={show.id} show={show} />)}
			</div>
		);
	}

	return (
		<main className="bgColor pt-2">
			<h1
				className="ta-center text-secondary pt-4 pb-2 sub-heading"
				style={{ borderBottom: '2px solid var(--secondary)' }}
			>
				Find TV Shows
			</h1>
			<form onSubmit={(e) => handleSubmit(e)} style={{ padding: '0 5%' }}>
				<input
					style={inputStyle}
					className="mt-2"
					type="text"
					placeholder="Search..."
					value={query}
					onChange={(e) => handleChange(e)}
				/>
				<button className="mt-2 btn btn-block btn-primary">
					Search
				</button>
			</form>
			{content}
		</main>
	);
};

const inputStyle = {
	display: 'block',
	width: '100%',
	padding: '0.5rem',
	borderRadius: '0.15rem',
	fontSize: '1rem',
	border: '2px solid #ccc'
};

export default Shows;
