import { graphql, commitMutation } from 'react-relay';

import {
  CreateCandidateMutationResponse,
  CandidateInput,
} from '../../__generated__/CreateCandidateMutation.graphql';

import RealyModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';

interface Callbacks {
  onError(err: Error): void;
  onCompleted(response: CreateCandidateMutationResponse): void;
}

const mutation = graphql`
  mutation CreateCandidateMutation($input: CandidateInput!) {
    createCandidate(candidateInfo: $input) {
      name
      email
      phone
      voteEarned
      positionApplied
      _id
    }
  }
`;

const commit = (
  environment: RealyModernEnvironment,
  candidateInfo: CandidateInput,
  { onCompleted, onError }: Callbacks
) => {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: candidateInfo,
    },
    onCompleted: (response, error) => {
      if (error) {
        console.log(error);
      }
      onCompleted(response as CreateCandidateMutationResponse);
    },
    onError,
  });
};
export default commit;
