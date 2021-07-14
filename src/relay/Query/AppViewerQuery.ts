import { graphql } from 'relay-runtime';

const AppViewerQuery = graphql`
  query AppViewerQuery {
    getViewer {
      _id
      id
      email
      isCandidate
      countVotedPosition
      positionVoted
    }
  }
`;

export default AppViewerQuery;
