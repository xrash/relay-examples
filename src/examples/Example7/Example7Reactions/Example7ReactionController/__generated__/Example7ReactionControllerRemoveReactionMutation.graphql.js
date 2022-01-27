/**
 * @generated SignedSource<<976cca453f24beac6f487f67ec1843b5>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type ReactionContent = "CONFUSED" | "EYES" | "HEART" | "HOORAY" | "LAUGH" | "ROCKET" | "THUMBS_DOWN" | "THUMBS_UP" | "%future added value";
export type RemoveReactionInput = {|
  clientMutationId?: ?string,
  content: ReactionContent,
  subjectId: string,
|};
export type Example7ReactionControllerRemoveReactionMutation$variables = {|
  connections: $ReadOnlyArray<string>,
  input: RemoveReactionInput,
|};
export type Example7ReactionControllerRemoveReactionMutationVariables = Example7ReactionControllerRemoveReactionMutation$variables;
export type Example7ReactionControllerRemoveReactionMutation$data = {|
  +removeReaction: ?{|
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
export type Example7ReactionControllerRemoveReactionMutationResponse = Example7ReactionControllerRemoveReactionMutation$data;
export type Example7ReactionControllerRemoveReactionMutation = {|
  variables: Example7ReactionControllerRemoveReactionMutationVariables,
  response: Example7ReactionControllerRemoveReactionMutation$data,
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
    "name": "Example7ReactionControllerRemoveReactionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveReactionPayload",
        "kind": "LinkedField",
        "name": "removeReaction",
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
    "name": "Example7ReactionControllerRemoveReactionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveReactionPayload",
        "kind": "LinkedField",
        "name": "removeReaction",
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
              {
                "alias": null,
                "args": null,
                "filters": null,
                "handle": "deleteEdge",
                "key": "",
                "kind": "ScalarHandle",
                "name": "id",
                "handleArgs": [
                  {
                    "kind": "Variable",
                    "name": "connections",
                    "variableName": "connections"
                  }
                ]
              },
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
    "cacheID": "0c81580fe1d8d6b22020b09e5a821c8c",
    "id": null,
    "metadata": {},
    "name": "Example7ReactionControllerRemoveReactionMutation",
    "operationKind": "mutation",
    "text": "mutation Example7ReactionControllerRemoveReactionMutation(\n  $input: RemoveReactionInput!\n) {\n  removeReaction(input: $input) {\n    reaction {\n      id\n      content\n      user {\n        login\n        id\n      }\n    }\n    subject {\n      __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "ac8a057e4f9a36d2e60f8e0710a73767";

module.exports = ((node/*: any*/)/*: Mutation<
  Example7ReactionControllerRemoveReactionMutation$variables,
  Example7ReactionControllerRemoveReactionMutation$data,
>*/);
