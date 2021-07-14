/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PositionIdInput = {
    positionId: string;
};
export type GetWinnerQueryVariables = {
    input: PositionIdInput;
};
export type GetWinnerQueryResponse = {
    readonly getWinner: {
        readonly _id: string | null;
        readonly name: string;
        readonly voteEarned: number;
    };
};
export type GetWinnerQuery = {
    readonly response: GetWinnerQueryResponse;
    readonly variables: GetWinnerQueryVariables;
};



/*
query GetWinnerQuery(
  $input: PositionIdInput!
) {
  getWinner(positionid: $input) {
    _id
    name
    voteEarned
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
    "name": "getWinner",
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "voteEarned",
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
    "name": "GetWinnerQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetWinnerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "80723576bfe2135aa846091760e76a7b",
    "id": null,
    "metadata": {},
    "name": "GetWinnerQuery",
    "operationKind": "query",
    "text": "query GetWinnerQuery(\n  $input: PositionIdInput!\n) {\n  getWinner(positionid: $input) {\n    _id\n    name\n    voteEarned\n  }\n}\n"
  }
};
})();
(node as any).hash = 'eadde3b0085c9762dfb9e2eecf991989';
export default node;
