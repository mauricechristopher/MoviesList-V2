import React, { useState, useEffect } from 'react'
import { Wrapper, CardFooter, LikeButton } from './MovieCardStyles'
import { MOVIE_ID_QUERY } from '../../../../queries/movieIdQuery'
import { useQuery } from '@apollo/react-hooks'

const MovieCard = ({ backgroundUrl, movieId }) => {
	const [isLoading, setIsLoading] = useState('True')
	const [isError, setIsError] = useState('True')
	const [movieInfo, setMovieInfo] = useState([])
	const [isActive, setIsActive] = useState('True')
	const { loading, error, data } = useQuery(MOVIE_ID_QUERY, {
		variables: { id: movieId },
	})
	useEffect(() => {
		if (data) {
			setIsLoading(loading)
			setIsError(error)
			setMovieInfo(data.movie)
		}
	}, [loading, error, data])

	console.log(movieInfo)
	if (isLoading) return <p>Loading ...</p>
	return (
		<Wrapper backgroundUrl={backgroundUrl}>
			<LikeButton />
			<CardFooter />
		</Wrapper>
	)
}

export default MovieCard
