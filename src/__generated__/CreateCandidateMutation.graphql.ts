/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CandidateInput = {
    name: string;
    phone: string;
    description?: string | null;
    positionApplied: string;
};
export type CreateCandidateMutationVariables = {
    input: CandidateInput;
};
export type CreateCandidateMutationResponse = {
    readonly createCandidate: {
        readonly name: string;
        readonly email: string;
        readonly phone: string;
        readonly voteEarned: number;
        readonly positionApplied: string;
        readonly _id: string | null;
    };
};
export type CreateCandidateMutation = {
    readonly response: CreateCandidateMutationResponse;
    readonly variables: CreateCandidateMutationVariables;
};



/*
mutation CreateCandidateMutation(
  $input: CandidateInput!
) {
  createCandidate(candidateInfo: $input) {
    name
    email
    phone
    voteEarned
    positionApplied
    _id
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
        "name": "candidateInfo",
        "variableName": "input"
      }
    ],
    "concreteType": "Candidate",
    "kind": "LinkedField",
    "name": "createCandidate",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
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
        "name": "phone",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "voteEarned",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "positionApplied",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
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
    "name": "CreateCandidateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateCandidateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9b9c5d7ab268b8ab189a5c6a66c4eeee",
    "id": null,
    "metadata": {},
    "name": "CreateCandidateMutation",
    "operationKind": "mutation",
    "text": "mutation CreateCandidateMutation(\n  $input: CandidateInput!\n) {\n  createCandidate(candidateInfo: $input) {\n    name\n    email\n    phone\n    voteEarned\n    positionApplied\n    _id\n  }\n}\n"
  }
};
})();
(node as any).hash = '48532b78b56a9c2814ab5a3ead4eae66';
export default node;
