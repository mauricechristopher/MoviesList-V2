import styled from 'styled-components'
import { Heart } from '@styled-icons/feather/Heart'
import { Imdb } from '@styled-icons/simple-icons/Imdb'
import { Thumbsup } from '@styled-icons/octicons/Thumbsup'

export const Wrapper = styled.div`
	height: 198px;
	width: 160px;
	background: ${({ backgroundUrl }) => `url(${backgroundUrl})`};
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 5px;
	margin-top: 2vw;
	z-index: 2;
	box-shadow: 0 4px 8px 0 #dcdcdc;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const LikeButton = styled(Heart)`
	height: 30px;
	width: 30px;
	color: white;
	align-self: flex-end;
	margin: 10px 10px 0 0;
`

export const CardFooter = styled.div`
	height: 17%;
	width: 160px;
	overflow: hidden;
	background: white;
	border-radius: 0 0 5px 5px;
	z-index: 4;
	display: flex;
	align-items: middle;
	justify-content: space-around;
`

export const RatingDiv = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const RatingIcon = styled(Imdb)`
	height: 50%;
	width: auto;
	color: gray;
`

export const RatingText = styled.h2`
	font-size: 12px;
	margin: 0;
	margin-left: 5px;
`

export const VotesDiv = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const VotesIcon = styled(Thumbsup)`
	height: 50%;
	width: auto;
	color: gray;
`

export const VotesText = styled.h2`
	font-size: 12px;
	margin: 0;
	margin-left: 5px;
`
