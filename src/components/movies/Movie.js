import React, { useEffect, useContext, Fragment } from 'react';
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
			<main style={{ backgroundColor: '#ecf5f9' }}>
				<div className="container flex pt-1 text-primary">
					<section className="mb-1" style={{ height: 'fit-content' }}>
						<article
							className="card mb-1 shadow-4 bg"
							style={{ border: '0.5px dotted var(--primary)', backgroundColor: '#8FA6B0' }}
						>
							<p className="sub-heading font-bold text-white mb-2" style={{ margin: '0' }}>
								{original_title}
							</p>
							{tagline !== '' ? (
								<p className="text-head text-secondary-dark font-bold mt-2 mb-1">"{tagline}"</p>
							) : (
								''
							)}
							<p className="text-head mt-2 mb-4">{overview}</p>
						</article>
						<article
							className="card shadow-4 bg"
							style={{ border: '0.5px dotted var(--primary)', backgroundColor: '#8FA6B0' }}
						>
							<div className="flex ta-center mb-2">
								<div className="w-50 mr-1 bg" style={{ border: '1px dotted var(--primary)' }}>
									<p className="text-head text-primary font-bold my-1">Rating</p>
									<p className="font-l btn bg-primary text-white mb-1">{vote_average}/10</p>
								</div>
								<div className="w-50 bg" style={{ border: '1px dotted var(--primary)' }}>
									<p className="text-head text-primary font-bold my-1">Status</p>
									<p className="font-l btn bg-primary text-white mb-1">{status}</p>
								</div>
							</div>
							<ul>
								{production_companies && (
									<p className="text-head font-bold text-white mb-2">Production Companies</p>
								)}
								{production_companies &&
									production_companies.map((p) => {
										return (
											<li className="mb-1 btn text-white font-l bg-secondary mr-1" key={p.id}>
												{p.name}
											</li>
										);
									})}
							</ul>
							{homepage !== '' ? (
								<Fragment>
									<p className="text-head text-white font-bold my-2">Visit Home Page</p>
									<a className="btn btn-secondary" href={homepage}>
										{original_title} Homepage
									</a>
								</Fragment>
							) : (
								''
							)}
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
			</main>
		);
	}

	return <div className="pt-4">{content}</div>;
};

export default Movie;
