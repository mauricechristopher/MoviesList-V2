import '../globals.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client' // need this to inject any received data into react

const client = new ApolloClient({
	//  Create client to connect to your server endpoint
	uri: 'http://localhost:9000/graphql',
	cache: new InMemoryCache(),
})
function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	)
}

export default MyApp
