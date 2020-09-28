import styled from 'styled-components'
import { Angellist } from '@styled-icons/fa-brands/Angellist'
import { Filter } from '@styled-icons/feather/Filter'

export const Wrapper = styled.nav`
	width: 100vw;
	height: 8vh;
	/* border-style: solid; */
	background: white;
	top: 0;
	z-index: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2vh 0 2vh;
`

export const LeftIcon = styled(Angellist)`
	height: 4vh;
	width: 4vh;
	color: #444444;
`

export const Title = styled.h1`
	font-size: 1.1em;
	font-weight: 300;
	color: #444444;
`

export const RightIcon = styled(Filter)`
	height: 4vh;
	width: 4vh;
	color: #444444;
`
