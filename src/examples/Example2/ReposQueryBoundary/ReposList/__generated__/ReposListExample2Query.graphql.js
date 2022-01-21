/**
 * @generated SignedSource<<af2eb2b2d7aa15c0aed0983e64c6c454>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type PaginatedRepos_user$fragmentType = any;
export type ReposListExample2Query$variables = {|
  login: string,
|};
export type ReposListExample2QueryVariables = ReposListExample2Query$variables;
export type ReposListExample2Query$data = {|
  +user: ?{|
    +id: string,
    +$fragmentSpreads: PaginatedRepos_user$fragmentType,
  |},
|};
export type ReposListExample2QueryResponse = ReposListExample2Query$data;
export type ReposListExample2Query = {|
  variables: ReposListExample2QueryVariables,
  response: ReposListExample2Query$data,
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
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ReposListExample2Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PaginatedRepos_user"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ReposListExample2Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
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
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
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
                    "name": "endCursor",
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
              }
            ],
            "storageKey": "repositories(first:10,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"},ownerAffiliations:[\"OWNER\"])"
          },
          {
            "alias": null,
            "args": (v3/*: any*/),
            "filters": [
              "orderBy",
              "ownerAffiliations"
            ],
            "handle": "connection",
            "key": "PaginatedRepos_user_repositories",
            "kind": "LinkedHandle",
            "name": "repositories"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7bff231a9a4de48192843c9f7dd26c5c",
    "id": null,
    "metadata": {},
    "name": "ReposListExample2Query",
    "operationKind": "query",
    "text": "query ReposListExample2Query(\n  $login: String!\n) {\n  user(login: $login) {\n    id\n    ...PaginatedRepos_user\n  }\n}\n\nfragment PaginatedRepos_user on User {\n  repositories(first: 10, orderBy: {field: CREATED_AT, direction: DESC}, ownerAffiliations: [OWNER]) {\n    edges {\n      node {\n        id\n        name\n        nameWithOwner\n        diskUsage\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();

(node/*: any*/).hash = "0b0e8a897d0089a53fd6f9d31a68fab2";

module.exports = ((node/*: any*/)/*: Query<
  ReposListExample2Query$variables,
  ReposListExample2Query$data,
>*/);
