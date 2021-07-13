import { graphql } from 'relay-runtime';

const GetCandidateForPositionQuery = graphql`
  query GetCandidateForPositionQuery($input: PositionIdInput!) {
    getCandidateForPosition(positionid: $input) {
      _id
      email
      name
      description
      voteEarned
      positionApplied
    }
  }
`;

export default GetCandidateForPositionQuery;
