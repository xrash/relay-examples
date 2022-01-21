/**
 * @generated SignedSource<<1cd563eabd12a2313c593388abec9780>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type RepoDetailsDescription_repository$fragmentType = any;
export type RepoDetailsQuery$variables = {|
  owner: string,
  name: string,
|};
export type RepoDetailsQueryVariables = RepoDetailsQuery$variables;
export type RepoDetailsQuery$data = {|
  +repository: ?{|
    +nameWithOwner: string,
    +$fragmentSpreads: RepoDetailsDescription_repository$fragmentType,
  |},
|};
export type RepoDetailsQueryResponse = RepoDetailsQuery$data;
export type RepoDetailsQuery = {|
  variables: RepoDetailsQueryVariables,
  response: RepoDetailsQuery$data,
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
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RepoDetailsQuery",
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RepoDetailsDescription_repository"
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
    "name": "RepoDetailsQuery",
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
    "cacheID": "b15699632e7be64f4ad8586ee22ac513",
    "id": null,
    "metadata": {},
    "name": "RepoDetailsQuery",
    "operationKind": "query",
    "text": "query RepoDetailsQuery(\n  $owner: String!\n  $name: String!\n) {\n  repository(owner: $owner, name: $name) {\n    nameWithOwner\n    ...RepoDetailsDescription_repository\n    id\n  }\n}\n\nfragment RepoDetailsDescription_repository on Repository {\n  description\n}\n"
  }
};
})();

(node/*: any*/).hash = "e8d9868a45eae60d5767c9248e6adb6c";

module.exports = ((node/*: any*/)/*: Query<
  RepoDetailsQuery$variables,
  RepoDetailsQuery$data,
>*/);
