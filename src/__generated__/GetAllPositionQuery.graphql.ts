/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type GetAllPositionQueryVariables = {};
export type GetAllPositionQueryResponse = {
    readonly getAllPosition: ReadonlyArray<{
        readonly _id: string | null;
        readonly name: string;
        readonly totalVotes: number;
        readonly maxVotes: number;
        readonly countofCandidate: number;
    }>;
};
export type GetAllPositionQuery = {
    readonly response: GetAllPositionQueryResponse;
    readonly variables: GetAllPositionQueryVariables;
};



/*
query GetAllPositionQuery {
  getAllPosition {
    _id
    name
    totalVotes
    maxVotes
    countofCandidate
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Position",
    "kind": "LinkedField",
    "name": "getAllPosition",
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalVotes",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "maxVotes",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "countofCandidate",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetAllPositionQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetAllPositionQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6f2103a5bdf630c07d5a3946c1487dbb",
    "id": null,
    "metadata": {},
    "name": "GetAllPositionQuery",
    "operationKind": "query",
    "text": "query GetAllPositionQuery {\n  getAllPosition {\n    _id\n    name\n    totalVotes\n    maxVotes\n    countofCandidate\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ceb4ff84cf0d130cd25f7487c773c8b0';
export default node;
