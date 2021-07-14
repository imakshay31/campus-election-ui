/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SubmitVoteInput = {
    responses: Array<Candidate_Position>;
};
export type Candidate_Position = {
    candidateId: string;
    positionId: string;
};
export type SubmitVoteMutationVariables = {
    input: SubmitVoteInput;
};
export type SubmitVoteMutationResponse = {
    readonly submitVote: {
        readonly _id: string | null;
        readonly email: string;
        readonly isCandidate: boolean;
        readonly countVotedPosition: number;
        readonly positionVoted: string | null;
    };
};
export type SubmitVoteMutation = {
    readonly response: SubmitVoteMutationResponse;
    readonly variables: SubmitVoteMutationVariables;
};



/*
mutation SubmitVoteMutation(
  $input: SubmitVoteInput!
) {
  submitVote(submitVoteInput: $input) {
    _id
    email
    isCandidate
    countVotedPosition
    positionVoted
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "submitVoteInput",
        "variableName": "input"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "submitVote",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isCandidate",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "countVotedPosition",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "positionVoted",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SubmitVoteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SubmitVoteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "400d2bd4c8265a0a1ff132de4d2dc8fe",
    "id": null,
    "metadata": {},
    "name": "SubmitVoteMutation",
    "operationKind": "mutation",
    "text": "mutation SubmitVoteMutation(\n  $input: SubmitVoteInput!\n) {\n  submitVote(submitVoteInput: $input) {\n    _id\n    email\n    isCandidate\n    countVotedPosition\n    positionVoted\n  }\n}\n"
  }
};
})();
(node as any).hash = '062ff65a927aac305dc003915ff0dc17';
export default node;
