/**
 * @generated SignedSource<<0584900b499ad310034ae283b76b30ff>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type PullRequestUpdateState = "CLOSED" | "OPEN" | "%future added value";
export type UpdatePullRequestInput = {|
  assigneeIds?: ?$ReadOnlyArray<string>,
  baseRefName?: ?string,
  body?: ?string,
  clientMutationId?: ?string,
  labelIds?: ?$ReadOnlyArray<string>,
  maintainerCanModify?: ?boolean,
  milestoneId?: ?string,
  projectIds?: ?$ReadOnlyArray<string>,
  pullRequestId: string,
  state?: ?PullRequestUpdateState,
  title?: ?string,
|};
export type PullRequestViewUpdatePullRequestMutation$variables = {|
  input: UpdatePullRequestInput,
|};
export type PullRequestViewUpdatePullRequestMutationVariables = PullRequestViewUpdatePullRequestMutation$variables;
export type PullRequestViewUpdatePullRequestMutation$data = {|
  +updatePullRequest: ?{|
    +pullRequest: ?{|
      +id: string,
      +title: string,
      +bodyText: string,
    |},
  |},
|};
export type PullRequestViewUpdatePullRequestMutationResponse = PullRequestViewUpdatePullRequestMutation$data;
export type PullRequestViewUpdatePullRequestMutation = {|
  variables: PullRequestViewUpdatePullRequestMutationVariables,
  response: PullRequestViewUpdatePullRequestMutation$data,
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdatePullRequestPayload",
    "kind": "LinkedField",
    "name": "updatePullRequest",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PullRequest",
        "kind": "LinkedField",
        "name": "pullRequest",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PullRequestViewUpdatePullRequestMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PullRequestViewUpdatePullRequestMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "63acca0d0dffd355fb8acdb7dbc2cad2",
    "id": null,
    "metadata": {},
    "name": "PullRequestViewUpdatePullRequestMutation",
    "operationKind": "mutation",
    "text": "mutation PullRequestViewUpdatePullRequestMutation(\n  $input: UpdatePullRequestInput!\n) {\n  updatePullRequest(input: $input) {\n    pullRequest {\n      id\n      title\n      bodyText\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "ecb2a6608130d3200c43c38cd3ce2820";

module.exports = ((node/*: any*/)/*: Mutation<
  PullRequestViewUpdatePullRequestMutation$variables,
  PullRequestViewUpdatePullRequestMutation$data,
>*/);
