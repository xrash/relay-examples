/**
 * @generated SignedSource<<ff4b0c981a417a01402a7250a0fd91ae>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type PRDetailsQuery$variables = {|
  owner: string,
  repo: string,
  pullRequestNumber: number,
|};
export type PRDetailsQueryVariables = PRDetailsQuery$variables;
export type PRDetailsQuery$data = {|
  +repository: ?{|
    +pullRequest: ?{|
      +id: string,
      +title: string,
      +bodyText: string,
    |},
  |},
|};
export type PRDetailsQueryResponse = PRDetailsQuery$data;
export type PRDetailsQuery = {|
  variables: PRDetailsQueryVariables,
  response: PRDetailsQuery$data,
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
    "name": "name",
    "variableName": "repo"
  },
  {
    "kind": "Variable",
    "name": "owner",
    "variableName": "owner"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "number",
      "variableName": "pullRequestNumber"
    }
  ],
  "concreteType": "PullRequest",
  "kind": "LinkedField",
  "name": "pullRequest",
  "plural": false,
  "selections": [
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bodyText",
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
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PRDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v5/*: any*/)
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
    "name": "PRDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9bc94bd8b2df9c6a95b54e1e7b390595",
    "id": null,
    "metadata": {},
    "name": "PRDetailsQuery",
    "operationKind": "query",
    "text": "query PRDetailsQuery(\n  $owner: String!\n  $repo: String!\n  $pullRequestNumber: Int!\n) {\n  repository(owner: $owner, name: $repo) {\n    pullRequest(number: $pullRequestNumber) {\n      id\n      title\n      bodyText\n    }\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "1604874e723c2d6315bf5b25448899e7";

module.exports = ((node/*: any*/)/*: Query<
  PRDetailsQuery$variables,
  PRDetailsQuery$data,
>*/);
