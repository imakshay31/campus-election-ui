/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PositionInput = {
    name: string;
    description: string;
    slotIndex: number;
};
export type CreatePositionMutationVariables = {
    input: PositionInput;
};
export type CreatePositionMutationResponse = {
    readonly createPosition: {
        readonly name: string;
        readonly _id: string | null;
        readonly description: string;
    };
};
export type CreatePositionMutation = {
    readonly response: CreatePositionMutationResponse;
    readonly variables: CreatePositionMutationVariables;
};



/*
mutation CreatePositionMutation(
  $input: PositionInput!
) {
  createPosition(positionInfo: $input) {
    name
    _id
    description
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
        "name": "positionInfo",
        "variableName": "input"
      }
    ],
    "concreteType": "Position",
    "kind": "LinkedField",
    "name": "createPosition",
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
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
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
    "name": "CreatePositionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreatePositionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "413009994c91c8cbc03b3ae2f9b9ba3f",
    "id": null,
    "metadata": {},
    "name": "CreatePositionMutation",
    "operationKind": "mutation",
    "text": "mutation CreatePositionMutation(\n  $input: PositionInput!\n) {\n  createPosition(positionInfo: $input) {\n    name\n    _id\n    description\n  }\n}\n"
  }
};
})();
(node as any).hash = '4341c000e9234d4a7351821df0a79955';
export default node;
