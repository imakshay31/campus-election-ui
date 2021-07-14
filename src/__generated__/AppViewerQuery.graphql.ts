/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppViewerQueryVariables = {};
export type AppViewerQueryResponse = {
    readonly getViewer: {
        readonly _id: string | null;
        readonly id: string | null;
        readonly email: string;
        readonly isCandidate: boolean;
        readonly countVotedPosition: number;
        readonly positionVoted: string | null;
    };
};
export type AppViewerQuery = {
    readonly response: AppViewerQueryResponse;
    readonly variables: AppViewerQueryVariables;
};



/*
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "getViewer",
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
        "name": "id",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppViewerQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppViewerQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "aa9f5ccf6b0544601b316f16ad8315c1",
    "id": null,
    "metadata": {},
    "name": "AppViewerQuery",
    "operationKind": "query",
    "text": "query AppViewerQuery {\n  getViewer {\n    _id\n    id\n    email\n    isCandidate\n    countVotedPosition\n    positionVoted\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f26f73aa3e1cd93d055c29e590a81636';
export default node;
