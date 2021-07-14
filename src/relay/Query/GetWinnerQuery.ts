import { graphql } from 'relay-runtime';

const GetWinnerQuery = graphql`
  query GetWinnerQuery($input: PositionIdInput!) {
    getWinner(positionid: $input) {
      _id
      name
      voteEarned
    }
  }
`;

export default GetWinnerQuery;
