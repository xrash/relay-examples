/**
 * @generated SignedSource<<265a933ff05747545bfa9dafc91e145b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type ReactionContent = "CONFUSED" | "EYES" | "HEART" | "HOORAY" | "LAUGH" | "ROCKET" | "THUMBS_DOWN" | "THUMBS_UP" | "%future added value";
export type Example7ReactionsQuery$variables = {|
  owner: string,
  repo: string,
  pullRequestNumber: number,
|};
export type Example7ReactionsQueryVariables = Example7ReactionsQuery$variables;
export type Example7ReactionsQuery$data = {|
  +user: ?{|
    +repository: ?{|
      +pullRequest: ?{|
        +id: string,
        +number: number,
        +title: string,
        +reactions: {|
          +__id: string,
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +id: string,
              +content: ReactionContent,
              +user: ?{|
                +login: string,
              |},
            |},
          |}>,
        |},
      |},
    |},
  |},
|};
export type Example7ReactionsQueryResponse = Example7ReactionsQuery$data;
export type Example7ReactionsQuery = {|
  variables: Example7ReactionsQueryVariables,
  response: Example7ReactionsQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "owner"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "pullRequestNumber"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "repo"
},
v3 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "owner"
  }
],
v4 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "repo"
  }
],
v5 = [
  {
    "kind": "Variable",
    "name": "number",
    "variableName": "pullRequestNumber"
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
  "args": null,
  "kind": "ScalarField",
  "name": "number",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v13 = {
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
},
v14 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__id",
      "storageKey": null
    }
  ]
},
v15 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 16
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "Example7ReactionsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Repository",
            "kind": "LinkedField",
            "name": "repository",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v5/*: any*/),
                "concreteType": "PullRequest",
                "kind": "LinkedField",
                "name": "pullRequest",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  {
                    "alias": "reactions",
                    "args": null,
                    "concreteType": "ReactionConnection",
                    "kind": "LinkedField",
                    "name": "__wachacha_reactions_connection",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ReactionEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Reaction",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v6/*: any*/),
                              (v9/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "User",
                                "kind": "LinkedField",
                                "name": "user",
                                "plural": false,
                                "selections": [
                                  (v10/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v11/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v12/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v13/*: any*/),
                      (v14/*: any*/)
                    ],
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
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "Example7ReactionsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Repository",
            "kind": "LinkedField",
            "name": "repository",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v5/*: any*/),
                "concreteType": "PullRequest",
                "kind": "LinkedField",
                "name": "pullRequest",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": (v15/*: any*/),
                    "concreteType": "ReactionConnection",
                    "kind": "LinkedField",
                    "name": "reactions",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ReactionEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Reaction",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v6/*: any*/),
                              (v9/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "User",
                                "kind": "LinkedField",
                                "name": "user",
                                "plural": false,
                                "selections": [
                                  (v10/*: any*/),
                                  (v6/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v11/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v12/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v13/*: any*/),
                      (v14/*: any*/)
                    ],
                    "storageKey": "reactions(first:16)"
                  },
                  {
                    "alias": null,
                    "args": (v15/*: any*/),
                    "filters": null,
                    "handle": "connection",
                    "key": "wachacha_reactions",
                    "kind": "LinkedHandle",
                    "name": "reactions"
                  }
                ],
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7e66fce667bf5c34825c78e6bd9e32e9",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "user",
            "repository",
            "pullRequest",
            "reactions"
          ]
        }
      ]
    },
    "name": "Example7ReactionsQuery",
    "operationKind": "query",
    "text": "query Example7ReactionsQuery(\n  $owner: String!\n  $repo: String!\n  $pullRequestNumber: Int!\n) {\n  user(login: $owner) {\n    repository(name: $repo) {\n      pullRequest(number: $pullRequestNumber) {\n        id\n        number\n        title\n        reactions(first: 16) {\n          edges {\n            node {\n              id\n              content\n              user {\n                login\n                id\n              }\n              __typename\n            }\n            cursor\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n      }\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "bc1de2cec3a2b8cbc88f48b8cb427348";

module.exports = ((node/*: any*/)/*: Query<
  Example7ReactionsQuery$variables,
  Example7ReactionsQuery$data,
>*/);
