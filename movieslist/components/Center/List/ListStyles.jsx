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
	color: #ff4f4f;
`

export const ListDiv = styled.div`
	height: 100%;
	width: 100vw;
	/* background: black; */
	overflow-y: auto;
	display: flex;
	flex-wrap: wrap;
	/* justify-content: center; */
	/* align-content: flex-start; */
	padding: 12px;
`

export const MovieCard = styled.div`
	height: 32vh;
	width: 26vh;
	margin: 6px;
	background: gray;
	border-radius: 7px;
`
