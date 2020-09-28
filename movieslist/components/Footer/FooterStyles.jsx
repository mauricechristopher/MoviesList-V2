import styled from 'styled-components'
import { Heart } from '@styled-icons/boxicons-solid/Heart'
import { Search } from '@styled-icons/boxicons-regular/Search'
import { PersonFill } from '@styled-icons/bootstrap/PersonFill'

export const Wrapper = styled.div`
	width: 100vw;
	height: 11vh;
	/* border-style: solid; */
	background: white;
	z-index: 1;
	align-self: flex-end;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 7vh;
`

export const LeftIcon = styled(Search)`
	height: 5vh;
	width: 5vh;
	color: red;
`

export const CenterIcon = styled(Heart)`
	height: 5vh;
	width: 5vh;
	color: lightgray;
`

export const RightIcon = styled(PersonFill)`
	height: 5vh;
	width: 5vh;
	color: lightgray;
`
