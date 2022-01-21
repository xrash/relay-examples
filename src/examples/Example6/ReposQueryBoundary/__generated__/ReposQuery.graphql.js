/**
 * @generated SignedSource<<caff56da73b566701c18ae4869d0836b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type ReposQuery$variables = {|
  login: string,
  first?: ?number,
  last?: ?number,
  before?: ?string,
  after?: ?string,
|};
export type ReposQueryVariables = ReposQuery$variables;
export type ReposQuery$data = {|
  +user: ?{|
    +repositories: {|
      +totalCount: number,
      +totalDiskUsage: number,
      +pageInfo: {|
        +startCursor: ?string,
        +endCursor: ?string,
        +hasPreviousPage: boolean,
        +hasNextPage: boolean,
      |},
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
export type ReposQueryResponse = ReposQuery$data;
export type ReposQuery = {|
  variables: ReposQueryVariables,
  response: ReposQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "before"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "last"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "login"
},
v5 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "login"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "after",
      "variableName": "after"
    },
    {
      "kind": "Variable",
      "name": "before",
      "variableName": "before"
    },
    {
      "kind": "Variable",
      "name": "first",
      "variableName": "first"
    },
    {
      "kind": "Variable",
      "name": "last",
      "variableName": "last"
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
      "concreteType": "PageInfo",
      "kind": "LinkedField",
      "name": "pageInfo",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "startCursor",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "endCursor",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hasPreviousPage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hasNextPage",
          "storageKey": null
        }
      ],
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
            (v6/*: any*/),
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
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ReposQuery",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v7/*: any*/)
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
      (v4/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ReposQuery",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v7/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "162dcc7aa8d1d356e52948a078cfdb24",
    "id": null,
    "metadata": {},
    "name": "ReposQuery",
    "operationKind": "query",
    "text": "query ReposQuery(\n  $login: String!\n  $first: Int\n  $last: Int\n  $before: String\n  $after: String\n) {\n  user(login: $login) {\n    repositories(first: $first, last: $last, before: $before, after: $after) {\n      totalCount\n      totalDiskUsage\n      pageInfo {\n        startCursor\n        endCursor\n        hasPreviousPage\n        hasNextPage\n      }\n      edges {\n        cursor\n        node {\n          id\n          name\n          nameWithOwner\n          diskUsage\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "10494e690aa2a1549f6924aee5e852da";

module.exports = ((node/*: any*/)/*: Query<
  ReposQuery$variables,
  ReposQuery$data,
>*/);
