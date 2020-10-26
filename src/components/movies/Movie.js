import React, { useEffect, useContext } from 'react';
import MovieContext from '../../context/movie/movieContext';
import Loading from '../layout/Loading';
import ProductionCompanies from './details/ProductionCompanies';
import RatingStatus from './details/RatingStatus';
import Homepage from './details/HomePage';

const Movie = ({ match: { params: { id } } }) => {
	const movieContext = useContext(MovieContext);

	const { movie, loading, setLoading, getMovie } = movieContext;

	console.log(movie);
	useEffect(
		() => {
			setLoading();
			console.log(id);
			getMovie(id);
		},
		//eslint-disable-next-line
		[ id ]
	);

	let content;

	const {
		original_title,
		poster_path,
		overview,
		production_companies,
		homepage,
		status,
		tagline,
		vote_average
	} = movie;

	if (loading) {
		content = <Loading />;
	} else {
		content = (
			<main style={{ backgroundColor: '#ecf5f9' }}>
				<div className="container flex pt-1 text-primary">
					<section className="mb-1" style={{ height: 'fit-content', width: '60%' }}>
						<article
							className="card mb-1 shadow-4 bg b-dotted-primary"
							style={{ backgroundColor: '#8FA6B0' }}
						>
							<p className="sub-heading pt-1 font-bold text-white mb-2" style={{ margin: '0' }}>
								{original_title}
							</p>
							{tagline !== '' ? (
								<p className="text-head text-secondary-dark font-bold mt-2 mb-1">"{tagline}"</p>
							) : (
								''
							)}
							<p className="text-head mt-2 mb-2">{overview}</p>
						</article>
						<article className="card shadow-4 bg b-dotted-primary" style={{ backgroundColor: '#8FA6B0' }}>
							<ProductionCompanies production_companies={production_companies} />
							<Homepage original_title={original_title} homepage={homepage} />
							<RatingStatus status={status} vote_average={vote_average} />
						</article>
					</section>
					<section className="pb-1 pl-2 ml-auto" style={{ width: '40%' }}>
						<img
							style={{ width: '100%' }}
							className={`d-block ml-auto poster-img poster-img-${id}`}
							src={`https://image.tmdb.org/t/p/original/${poster_path}`}
							alt={original_title}
						/>
					</section>
				</div>
			</main>
		);
	}

	return <div className="pt-4">{content}</div>;
};

export default Movie;
