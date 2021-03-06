/**
 * @generated SignedSource<<3648e5eb28d89abc5f075c3b5f0c7852>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type MyReposQuery$variables = {|
  login: string,
|};
export type MyReposQueryVariables = MyReposQuery$variables;
export type MyReposQuery$data = {|
  +user: ?{|
    +repositories: {|
      +totalCount: number,
      +totalDiskUsage: number,
      +edges: ?$ReadOnlyArray<?{|
        +cursor: string,
        +node: ?{|
          +id: string,
          +name: string,
          +nameWithOwner: string,
          +diskUsage: ?number,
        |},
      |}>,
    |},
  |},
|};
export type MyReposQueryResponse = MyReposQuery$data;
export type MyReposQuery = {|
  variables: MyReposQueryVariables,
  response: MyReposQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "login"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "login"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 16
    },
    {
      "kind": "Literal",
      "name": "orderBy",
      "value": {
        "direction": "DESC",
        "field": "CREATED_AT"
      }
    },
    {
      "kind": "Literal",
      "name": "ownerAffiliations",
      "value": [
        "OWNER"
      ]
    }
  ],
  "concreteType": "RepositoryConnection",
  "kind": "LinkedField",
  "name": "repositories",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalDiskUsage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "RepositoryEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cursor",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Repository",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v2/*: any*/),
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
              "name": "nameWithOwner",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "diskUsage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "repositories(first:16,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"},ownerAffiliations:[\"OWNER\"])"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MyReposQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MyReposQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bb8263cf21c7871dc4633f280302dac4",
    "id": null,
    "metadata": {},
    "name": "MyReposQuery",
    "operationKind": "query",
    "text": "query MyReposQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    repositories(first: 16, orderBy: {field: CREATED_AT, direction: DESC}, ownerAffiliations: [OWNER]) {\n      totalCount\n      totalDiskUsage\n      edges {\n        cursor\n        node {\n          id\n          name\n          nameWithOwner\n          diskUsage\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "87726c5d5e66c466aedbec013e2a768a";

module.exports = ((node/*: any*/)/*: Query<
  MyReposQuery$variables,
  MyReposQuery$data,
>*/);
