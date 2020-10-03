import React from 'react'
import {
	Wrapper,
	StyledCarousel,
	CarouselItem,
	StyledImg,
} from './SliderStyles'

const Slider = () => (
	<Wrapper>
		<StyledCarousel
			autoPlay={true}
			infiniteLoop={true}
			showStatus={false}
			showArrows={false}
			showThumbs={false}
		>
			<CarouselItem>
				<StyledImg src='https://images.squarespace-cdn.com/content/v1/54da5152e4b04e41c0eb77f1/1483026350470-QAONVX0CBJ07ETXPB83H/ke17ZwdGBToddI8pDm48kG87Sfbgg29A4BYEDq3OXvgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcwzM2vY4zcR8T4Jyx-ijnH3AX3fNmlFWTtLveLoXLwwuUl76mRIIOTkltMT5VW2q5/Pulp-Fiction---1000.png?format=1500w' />
			</CarouselItem>
			<CarouselItem>
				<StyledImg src='https://filmspell.com/wp-content/uploads/2017/10/Alien-Covenant.jpg' />
			</CarouselItem>
			<CarouselItem>
				<StyledImg src='https://assets.simpleview-europe.com/golakes/imageresizer/?image=%2Fdmsimgs%2Ftenet_2__2020784705.jpg&action=ProductDetailProFullWidth' />
			</CarouselItem>
			<CarouselItem>
				<StyledImg src='https://www.hometheaterforum.com/community/media/2014-interstellar-movie-poster.1964/full' />
			</CarouselItem>
		</StyledCarousel>
	</Wrapper>
)

export default Slider
