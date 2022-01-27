/**
 * @generated SignedSource<<b42c0e70ba6e2c74fa232d58ff5ab01c>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type ReactionContent = "CONFUSED" | "EYES" | "HEART" | "HOORAY" | "LAUGH" | "ROCKET" | "THUMBS_DOWN" | "THUMBS_UP" | "%future added value";
export type AddReactionInput = {|
  clientMutationId?: ?string,
  content: ReactionContent,
  subjectId: string,
|};
export type Example7ReactionControllerAddReactionMutation$variables = {|
  connections: $ReadOnlyArray<string>,
  input: AddReactionInput,
|};
export type Example7ReactionControllerAddReactionMutationVariables = Example7ReactionControllerAddReactionMutation$variables;
export type Example7ReactionControllerAddReactionMutation$data = {|
  +addReaction: ?{|
    +reaction: ?{|
      +id: string,
      +content: ReactionContent,
      +user: ?{|
        +login: string,
      |},
    |},
    +subject: ?{|
      +id: string,
    |},
  |},
|};
export type Example7ReactionControllerAddReactionMutationResponse = Example7ReactionControllerAddReactionMutation$data;
export type Example7ReactionControllerAddReactionMutation = {|
  variables: Example7ReactionControllerAddReactionMutationVariables,
  response: Example7ReactionControllerAddReactionMutation$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
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
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Example7ReactionControllerAddReactionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddReactionPayload",
        "kind": "LinkedField",
        "name": "addReaction",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Reaction",
            "kind": "LinkedField",
            "name": "reaction",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "subject",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Example7ReactionControllerAddReactionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddReactionPayload",
        "kind": "LinkedField",
        "name": "addReaction",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Reaction",
            "kind": "LinkedField",
            "name": "reaction",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "reaction",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "ReactionEdge"
              }
            ]
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "subject",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bb8fb7316efdde85f8880d0240d83ee9",
    "id": null,
    "metadata": {},
    "name": "Example7ReactionControllerAddReactionMutation",
    "operationKind": "mutation",
    "text": "mutation Example7ReactionControllerAddReactionMutation(\n  $input: AddReactionInput!\n) {\n  addReaction(input: $input) {\n    reaction {\n      id\n      content\n      user {\n        login\n        id\n      }\n    }\n    subject {\n      __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "7f7bd53e33651abd709bd9feb32c38b9";

module.exports = ((node/*: any*/)/*: Mutation<
  Example7ReactionControllerAddReactionMutation$variables,
  Example7ReactionControllerAddReactionMutation$data,
>*/);
