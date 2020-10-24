import React, { useEffect, useContext } from 'react';
import MovieContext from '../../context/movie/movieContext';
import Loading from '../layout/Loading';

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

	console.log(production_companies);

	if (loading) {
		content = <Loading />;
	} else {
		content = (
			<div className="container flex pt-1 text-white">
				<section className="pt-4 card bg-primary mb-1" style={{ height: 'fit-content' }}>
					<p className="sub-heading font-bold text-secondary mb-2" style={{ margin: '0' }}>
						{original_title}
					</p>
					{tagline !== '' ? <p className="info mt-2 mb-1">"{tagline}"</p> : ''}
					<p className="info mt-2 mb-4">{overview}</p>
					<article>
						<p className="info font-bold text-secondary mb-2">Production Companies</p>
						<ul>
							{production_companies &&
								production_companies.map((p) => {
									return (
										<li className="mb-1 btn font-l bg-secondary mr-1" key={p.id}>
											{p.name}
										</li>
									);
								})}
						</ul>
						{homepage !== '' ? (
              <>
                <p className="text-xl font-bold mb-2">Visit Home Page</p>
                <a className="btn btn-secondary" href={homepage}>
                  {original_title} Homepage
                </a>
              </>
						) : (
							''
						)}
						<div className="flex ta-center mt-2">
							<div className="w-50 card bg-white mr-1">
								<p className="info text-primary font-bold mb-1">Rating</p>
								<p className="font-l btn bg-white text-secondary">{vote_average}/10</p>
							</div>
							<div className="w-50 card bg-white">
								<p className="info text-primary font-bold mb-1">Status</p>
								<p className="font-l btn bg-white text-secondary">{status}</p>
							</div>
						</div>
					</article>
				</section>
				<section className="pb-1 pl-2 ml-auto" style={{ width: 'auto' }}>
					<img
						style={{ width: 'auto', maxHeight: 'calc(95vh - 5rem)' }}
						className={`d-block ml-auto poster-img poster-img-${id}`}
						src={`https://image.tmdb.org/t/p/original/${poster_path}`}
						alt={original_title}
					/>
				</section>
			</div>
		);
	}

	return <div className="pt-4">{content}</div>;
};

export default Movie;
