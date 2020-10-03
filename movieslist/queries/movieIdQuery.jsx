import gql from 'graphql-tag'

export const MOVIE_ID_QUERY = gql`
	query movieIdQuery($id: String) {
		movie(id: $id) {
			title
			year
			director
			actors
			plot
			ratings {
				source
				value
			}
			imdbVotes
			imdbRating
		}
	}
`
