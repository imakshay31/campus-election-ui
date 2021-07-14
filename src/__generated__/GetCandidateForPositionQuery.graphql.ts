/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PositionIdInput = {
    positionId: string;
};
export type GetCandidateForPositionQueryVariables = {
    input: PositionIdInput;
};
export type GetCandidateForPositionQueryResponse = {
    readonly getCandidateForPosition: ReadonlyArray<{
        readonly _id: string | null;
        readonly email: string;
        readonly name: string;
        readonly description: string | null;
        readonly voteEarned: number;
        readonly positionApplied: string;
    }>;
};
export type GetCandidateForPositionQuery = {
    readonly response: GetCandidateForPositionQueryResponse;
    readonly variables: GetCandidateForPositionQueryVariables;
};



/*
query GetCandidateForPositionQuery(
  $input: PositionIdInput!
) {
  getCandidateForPosition(positionid: $input) {
    _id
    email
    name
    description
    voteEarned
    positionApplied
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
        "name": "positionid",
        "variableName": "input"
      }
    ],
    "concreteType": "Candidate",
    "kind": "LinkedField",
    "name": "getCandidateForPosition",
    "plural": true,
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
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
    "name": "GetCandidateForPositionQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetCandidateForPositionQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "35bc39a2bf2b2e3bdf05608a469a716c",
    "id": null,
    "metadata": {},
    "name": "GetCandidateForPositionQuery",
    "operationKind": "query",
    "text": "query GetCandidateForPositionQuery(\n  $input: PositionIdInput!\n) {\n  getCandidateForPosition(positionid: $input) {\n    _id\n    email\n    name\n    description\n    voteEarned\n    positionApplied\n  }\n}\n"
  }
};
})();
(node as any).hash = '99a3b39ec6d11897c109061667e43425';
export default node;
