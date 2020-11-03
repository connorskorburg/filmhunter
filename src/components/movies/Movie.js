import React, { useEffect, useContext } from 'react';
import MovieContext from '../../context/movie/movieContext';
import Loading from '../layout/Loading';
import ProductionCompanies from './details/ProductionCompanies';
import RatingStatus from '../layout/RatingStatus';
import MovieHomepage from './details/MovieHomepage';
import notFound from '../layout/images/notFound.jpg'
import { Link } from 'react-router-dom';

const Movie = ({ match: { params: { id } } }) => {
	const movieContext = useContext(MovieContext);

	const { movie, loading, setLoading, getMovie } = movieContext;

	useEffect(
		() => {
			setLoading();
			getMovie(id);
		},
		//eslint-disable-next-line
		[ id ]
	);

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

	let content;

	if (loading) {
		content = <Loading />;
	} else if (movie === false) {
		content = <div className="container pt-1">
			<h1 className="ta-center text-head text-primary">404 Movie Not Found, return to
				<Link className='btn btn-secondary text-white ml-1' to='/movies'>Movies</Link>
			</h1>
		</div>
	} else {
		content = (
			<div className="container flex pt-1 text-primary movie-card">
				<section className="mb-1 w-60" style={{ height: 'fit-content' }}>
					<article className="card mb-1 shadow-4 bg-primary-light b-dotted-primary">
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
					<article className="card shadow-4 bg-primary-light b-dotted-primary">
						<ProductionCompanies production_companies={production_companies} />
						<MovieHomepage original_title={original_title} homepage={homepage} />
						<RatingStatus status={status} vote_average={vote_average} />
					</article>
				</section>
				<section className="pb-1 img-section ml-auto w-40">
					<img
						className={`w-100 d-block ml-auto poster-img poster-img-${id}`}
						src={poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : notFound}
						alt={original_title}
					/>
				</section>
			</div>
		);
	}
	return <div className="pt-4">{content}</div>;
};

export default Movie;
