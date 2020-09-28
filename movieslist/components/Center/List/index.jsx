import React from 'react'
import {
	Wrapper,
	CategoryDiv,
	CategoryItem,
	ListDiv,
	MovieCard,
} from './ListStyles'

const List = () => (
	<Wrapper>
		<CategoryDiv>
			<CategoryItem>NOW SHOWING</CategoryItem>
			<CategoryItem>COMING SOON</CategoryItem>
		</CategoryDiv>
		<ListDiv>
			<MovieCard />
			<MovieCard />
			<MovieCard />
			<MovieCard />
			<MovieCard />
			<MovieCard />
			<MovieCard />
		</ListDiv>
	</Wrapper>
)

export default List
