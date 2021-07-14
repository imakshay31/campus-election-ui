import { graphql, commitMutation } from 'react-relay';

import {
  SubmitVoteMutationResponse,
  SubmitVoteInput,
} from '../../__generated__/SubmitVoteMutation.graphql';
import RealyModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';

interface Callbacks {
  onError(err: Error): void;
  onCompleted(response: SubmitVoteMutationResponse): void;
}

const mutation = graphql`
  mutation SubmitVoteMutation($input: SubmitVoteInput!) {
    submitVote(submitVoteInput: $input) {
      _id
      email
      isCandidate
      countVotedPosition
      positionVoted
    }
  }
`;

const commit = (
  environment: RealyModernEnvironment,
  submitVoteInput: SubmitVoteInput,
  { onCompleted, onError }: Callbacks
) => {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: submitVoteInput,
    },
    onCompleted: (response, error) => {
      if (error) {
        console.log(error);
      }
      onCompleted(response as SubmitVoteMutationResponse);
    },
    onError,
  });
};
export default commit;
