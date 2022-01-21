/**
 * @generated SignedSource<<e47fdfe1e5bd6b6cd3135ce6b4357795>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type InfoDescription_repository$fragmentType = any;
export type InfoQuery$variables = {|
  owner: string,
  name: string,
|};
export type InfoQueryVariables = InfoQuery$variables;
export type InfoQuery$data = {|
  +repository: ?{|
    +nameWithOwner: string,
    +createdAt: any,
    +updatedAt: any,
    +stargazerCount: number,
    +$fragmentSpreads: InfoDescription_repository$fragmentType,
  |},
|};
export type InfoQueryResponse = InfoQuery$data;
export type InfoQuery = {|
  variables: InfoQueryVariables,
  response: InfoQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "owner"
},
v2 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  },
  {
    "kind": "Variable",
    "name": "owner",
    "variableName": "owner"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nameWithOwner",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "stargazerCount",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "InfoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "InfoDescription_repository"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "InfoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "870ba5df07d8ecf59734a272bfa41a10",
    "id": null,
    "metadata": {},
    "name": "InfoQuery",
    "operationKind": "query",
    "text": "query InfoQuery(\n  $owner: String!\n  $name: String!\n) {\n  repository(owner: $owner, name: $name) {\n    nameWithOwner\n    createdAt\n    updatedAt\n    stargazerCount\n    ...InfoDescription_repository\n    id\n  }\n}\n\nfragment InfoDescription_repository on Repository {\n  description\n}\n"
  }
};
})();

(node/*: any*/).hash = "135b46f62e0e7eb64a7e9a10a345ab22";

module.exports = ((node/*: any*/)/*: Query<
  InfoQuery$variables,
  InfoQuery$data,
>*/);
