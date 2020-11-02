import React, { useEffect, useContext } from 'react';
import ShowContext from '../../context/show/showContext';
import Loading from '../layout/Loading';
import RatingStatus from '../layout/RatingStatus';
import Networks from './details/Networks';
import ShowHomepage from './details/ShowHomepage';
import Seasons from './details/Seasons';
import { Link } from 'react-router-dom';
import notFound from '../layout/images/notFound.jpg';

const Show = ({ match: { params: { id } } }) => {
	const showContext = useContext(ShowContext);
	console.log({ id })

	const { show, loading, setLoading, getShow } = showContext;

	console.log({ show })

	useEffect(
		() => {
			setLoading();
			getShow(id);
		},
		//eslint-disable-next-line
		[id]
	);

	const { original_name, poster_path, networks, overview, seasons, status, vote_average, homepage } = show;

	let content;

	if (loading) {
		content = <Loading />;
	} else if (show === false) {
		content = <div className="container pt-1">
			<h1 className="ta-center text-head text-primary">404 Show Not Found, return to
				<Link className='btn btn-secondary text-white ml-1' to='/shows'>TV Shows</Link>
			</h1>
		</div>
	}
	else {
		content = (
			<div className="container flex pt-1 text-primary movie-card">
				<section className="mb-1 w-60">
					<article className="card mb-1 shadow-4 bg-primary-light b-dotted-primary">
						<p className="sub-heading pt-1 font-bold text-white" style={{ margin: '0' }}>
							{original_name}
						</p>
						<p className="text-head mt-2 mb-2">{overview}</p>
					</article>
					<article className="card shadow-4 bg-primary-light mb-2">
						<Networks networks={networks} />
						<ShowHomepage original_name={original_name} homepage={homepage} />
						<RatingStatus status={status} vote_average={vote_average} />
					</article>
					<Seasons seasons={seasons} />
				</section>
				<section className="pb-1 img-section ml-auto w-40">
					<img
						className={`w-100 d-block ml-auto poster-img poster-img-${id}`}
						src={poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : notFound}
						alt={original_name}
					/>
				</section>
			</div>
		);
	}

	return <div className="pt-4"> {content} </div>;
};

export default Show;
