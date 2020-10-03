import gql from 'graphql-tag'

export const BATMAN_QUERY = gql`
	query batmanQuery {
		search(searchTerm: "batman") {
			movies {
				title
				poster
				imdbId
			}
		}
	}
`
