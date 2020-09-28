import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import HomeWrapper from '../styles/HomeWrapper'
import Footer from '../components/Footer'
import Center from '../components/Center'

const Home = () => (
	<HomeWrapper>
		<Header />
		<Center />
		<Footer />
	</HomeWrapper>
)

export default Home
