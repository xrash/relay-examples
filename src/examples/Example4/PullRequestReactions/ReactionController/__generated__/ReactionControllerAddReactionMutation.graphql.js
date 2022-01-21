/**
 * @generated SignedSource<<8c5bef6579ed16cfda37804b1f7da86d>>
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
export type ReactionControllerAddReactionMutation$variables = {|
  input: AddReactionInput,
|};
export type ReactionControllerAddReactionMutationVariables = ReactionControllerAddReactionMutation$variables;
export type ReactionControllerAddReactionMutation$data = {|
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
export type ReactionControllerAddReactionMutationResponse = ReactionControllerAddReactionMutation$data;
export type ReactionControllerAddReactionMutation = {|
  variables: ReactionControllerAddReactionMutationVariables,
  response: ReactionControllerAddReactionMutation$data,
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
    "name": "ReactionControllerAddReactionMutation",
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
    "name": "ReactionControllerAddReactionMutation",
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
    "cacheID": "df9e7906dd48f5cc7098e26e02c4620c",
    "id": null,
    "metadata": {},
    "name": "ReactionControllerAddReactionMutation",
    "operationKind": "mutation",
    "text": "mutation ReactionControllerAddReactionMutation(\n  $input: AddReactionInput!\n) {\n  addReaction(input: $input) {\n    reaction {\n      id\n      content\n      user {\n        login\n        id\n      }\n    }\n    subject {\n      __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "5b421b7aa7d2f46a7d72f4f482cb0761";

module.exports = ((node/*: any*/)/*: Mutation<
  ReactionControllerAddReactionMutation$variables,
  ReactionControllerAddReactionMutation$data,
>*/);
