import { graphql } from 'relay-runtime';

const GetAllPositionQuery = graphql`
  query GetAllPositionQuery {
    getAllPosition {
      _id
      name
      totalVotes
      maxVotes
      countofCandidate
    }
  }
`;

export default GetAllPositionQuery;
