import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100vw;
	height: 54vh;
	display: flex;
	flex-direction: column;
	/* border: solid green; */
	/* justify-content: center; */
	/* padding: 7px 25px; */
`

export const CategoryDiv = styled.div`
	width: 100vw;
	height: 10%;
	padding: 0 10vw;
	background: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	justify-self: flex-start;
`

export const CategoryItem = styled.h1`
	font-size: 14px;
	line-height: 14px;
	letter-spacing: 2px;
	color: ${({ isActive }) => (isActive ? '#ff4f4f' : 'lightgray')};
`

export const ListDiv = styled.div`
	height: 90%;
	width: 100vw;
	/* background: black; */
	display: flex;
	justify-content: center;
`

export const MovieListWrapper = styled.div`
	overflow-y: scroll;
	height: 100%;
	width: 90vw;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-bottom: 16px;

	/* gap: 1em; */
`
export const MovieCard = styled.div`
	height: 220px;
	width: 177px;
	background: gray;
	border-radius: 5px;
	margin-top: 2vw;
	z-index: 2;
	box-shadow: 0 4px 8px 0 #dcdcdc;
`
