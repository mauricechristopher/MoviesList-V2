import styled from 'styled-components'
import { Heart } from '@styled-icons/feather/Heart'

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
	width: 100%;
	background: white;
	border-radius: 0 0 5px 5px;
	z-index: 4;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const RatingDiv = styled.div``

export const LikesDiv = styled.div``
