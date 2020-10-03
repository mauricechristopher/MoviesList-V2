import React, { useState, useEffect } from 'react'
import {
	Wrapper,
	CategoryDiv,
	CategoryItem,
	ListDiv,
	MovieListWrapper,
} from './ListStyles'
import { useQuery } from '@apollo/react-hooks'
import { BATMAN_QUERY } from '../../../queries/batmanQuery'
import MovieCard from './MovieCard/'

const List = () => {
	const [isLoading, setIsLoading] = useState('True')
	const [isError, setIsError] = useState('True')
	const [movies, setMovies] = useState([])
	const [isActive, setIsActive] = useState('True')
	const { loading, error, data } = useQuery(BATMAN_QUERY)
	useEffect(() => {
		if (data) {
			setIsLoading(loading)
			setIsError(error)
			setMovies(data.search.movies)
		}
	}, [data])

	console.log(movies)
	if (isLoading) return <p>Loading ...</p>
	return (
		<Wrapper>
			<CategoryDiv>
				<CategoryItem>NOW SHOWING</CategoryItem>
				<CategoryItem isActive>COMING SOON</CategoryItem>
			</CategoryDiv>
			<ListDiv>
				<MovieListWrapper>
					{movies.map((movieItem) => (
						<MovieCard
							backgroundUrl={movieItem.poster}
							movieId={movieItem.imdbId}
						/>
					))}
				</MovieListWrapper>
			</ListDiv>
		</Wrapper>
	)
}

export default List
