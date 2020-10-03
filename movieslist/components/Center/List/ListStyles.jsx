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
	font-size: 12px;
	line-height: 12px;
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
	::-webkit-scrollbar {
		display: none;
	}
	/* gap: 1em; */
`
