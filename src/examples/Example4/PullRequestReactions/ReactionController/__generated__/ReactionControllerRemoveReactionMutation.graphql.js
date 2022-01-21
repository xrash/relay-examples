/**
 * @generated SignedSource<<e43063551d726ee302eab3217e3435fb>>
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
export type ReactionControllerRemoveReactionMutation$variables = {|
  input: RemoveReactionInput,
|};
export type ReactionControllerRemoveReactionMutationVariables = ReactionControllerRemoveReactionMutation$variables;
export type ReactionControllerRemoveReactionMutation$data = {|
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
export type ReactionControllerRemoveReactionMutationResponse = ReactionControllerRemoveReactionMutation$data;
export type ReactionControllerRemoveReactionMutation = {|
  variables: ReactionControllerRemoveReactionMutationVariables,
  response: ReactionControllerRemoveReactionMutation$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
    "name": "ReactionControllerRemoveReactionMutation",
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
    "name": "ReactionControllerRemoveReactionMutation",
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
    "cacheID": "8da6944abd5608dd261aaf0f6c323dc2",
    "id": null,
    "metadata": {},
    "name": "ReactionControllerRemoveReactionMutation",
    "operationKind": "mutation",
    "text": "mutation ReactionControllerRemoveReactionMutation(\n  $input: RemoveReactionInput!\n) {\n  removeReaction(input: $input) {\n    reaction {\n      id\n      content\n      user {\n        login\n        id\n      }\n    }\n    subject {\n      __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "a36cbe7e34c45d48eb66cb1f8b669a16";

module.exports = ((node/*: any*/)/*: Mutation<
  ReactionControllerRemoveReactionMutation$variables,
  ReactionControllerRemoveReactionMutation$data,
>*/);
