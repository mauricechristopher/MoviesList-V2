import React, { useState } from 'react'
import {
	Wrapper,
	CategoryDiv,
	CategoryItem,
	ListDiv,
	MovieCard,
	MovieListWrapper,
} from './ListStyles'

const List = () => {
	const [isActive, setIsActive] = useState('True')
	return (
		<Wrapper>
			<CategoryDiv>
				<CategoryItem>NOW SHOWING</CategoryItem>
				<CategoryItem isActive>COMING SOON</CategoryItem>
			</CategoryDiv>
			<ListDiv>
				<MovieListWrapper>
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
				</MovieListWrapper>
			</ListDiv>
		</Wrapper>
	)
}

export default List
