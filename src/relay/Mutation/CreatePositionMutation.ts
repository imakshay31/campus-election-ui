import { graphql, commitMutation } from 'react-relay';

import {
  CreatePositionMutationResponse,
  PositionInput,
} from '../../__generated__/CreatePositionMutation.graphql';
import RealyModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';

interface Callbacks {
  onError(err: Error): void;
  onCompleted(response: CreatePositionMutationResponse): void;
}

const mutation = graphql`
  mutation CreatePositionMutation($input: PositionInput!) {
    createPosition(positionInfo: $input) {
      name
      _id
      description
    }
  }
`;

const commit = (
  environment: RealyModernEnvironment,
  positionInfo: PositionInput,
  { onCompleted, onError }: Callbacks
) => {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: positionInfo,
    },
    onCompleted: (response, error) => {
      if (error) {
        console.log(error);
      }
      onCompleted(response as CreatePositionMutationResponse);
    },
    onError,
  });
};
export default commit;
