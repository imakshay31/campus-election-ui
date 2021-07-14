import { graphql, commitMutation } from 'react-relay';

import {
  GenerateResultMutationResponse,
  PositionIdInput,
} from '../../__generated__/GenerateResultMutation.graphql';
import RealyModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';

interface Callbacks {
  onError(err: Error): void;
  onCompleted(response: GenerateResultMutationResponse): void;
}

const mutation = graphql`
  mutation GenerateResultMutation($input: PositionIdInput!) {
    generateResult(posittionId: $input) {
      name
      email
      voteEarned
      phone
    }
  }
`;

const commit = (
  environment: RealyModernEnvironment,
  posittionId: PositionIdInput,
  { onCompleted, onError }: Callbacks
) => {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: posittionId,
    },
    onCompleted: (response, error) => {
      if (error) {
        console.log(error);
      }
      onCompleted(response as GenerateResultMutationResponse);
    },
    onError,
  });
};
export default commit;
