import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'

export const Wrapper = styled.div`
	height: 30vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	background: white;
	/* border-style: solid; */
	/* padding: 7px 25px; */
`

export const StyledCarousel = styled(Carousel)`
	height: 28vh !important;
	width: 90vw;
	border-radius: 5px;
	/* background: black; */
	overflow: hidden;
	&& dot selected {
		display: none !important;
	}
`

export const CarouselItem = styled.div`
	height: 28vh;
	width: 100%;
	/* background: black; */
	overflow: hidden;
`

export const StyledImg = styled.img`
	background-size: cover;
`
