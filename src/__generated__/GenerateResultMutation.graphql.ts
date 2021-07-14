/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PositionIdInput = {
    positionId: string;
};
export type GenerateResultMutationVariables = {
    input: PositionIdInput;
};
export type GenerateResultMutationResponse = {
    readonly generateResult: {
        readonly name: string;
        readonly email: string;
        readonly voteEarned: number;
        readonly phone: string;
    };
};
export type GenerateResultMutation = {
    readonly response: GenerateResultMutationResponse;
    readonly variables: GenerateResultMutationVariables;
};



/*
mutation GenerateResultMutation(
  $input: PositionIdInput!
) {
  generateResult(posittionId: $input) {
    name
    email
    voteEarned
    phone
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
        "name": "posittionId",
        "variableName": "input"
      }
    ],
    "concreteType": "Candidate",
    "kind": "LinkedField",
    "name": "generateResult",
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
        "name": "voteEarned",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "phone",
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
    "name": "GenerateResultMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GenerateResultMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e3a7d73ae448829fcdbea3cfd7003ab5",
    "id": null,
    "metadata": {},
    "name": "GenerateResultMutation",
    "operationKind": "mutation",
    "text": "mutation GenerateResultMutation(\n  $input: PositionIdInput!\n) {\n  generateResult(posittionId: $input) {\n    name\n    email\n    voteEarned\n    phone\n  }\n}\n"
  }
};
})();
(node as any).hash = '22f035434a32aaf1c41b7dd4d320589f';
export default node;
