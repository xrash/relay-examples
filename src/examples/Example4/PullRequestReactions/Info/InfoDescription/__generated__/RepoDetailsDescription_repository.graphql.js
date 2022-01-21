/**
 * @generated SignedSource<<7e7334547022885334f488542acafc54>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RepoDetailsDescription_repository$fragmentType: FragmentType;
export type RepoDetailsDescription_repository$ref = RepoDetailsDescription_repository$fragmentType;
export type RepoDetailsDescription_repository$data = {|
  +description: ?string,
  +$fragmentType: RepoDetailsDescription_repository$fragmentType,
|};
export type RepoDetailsDescription_repository = RepoDetailsDescription_repository$data;
export type RepoDetailsDescription_repository$key = {
  +$data?: RepoDetailsDescription_repository$data,
  +$fragmentSpreads: RepoDetailsDescription_repository$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepoDetailsDescription_repository",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node/*: any*/).hash = "444b2e3f45d10e400c803444928e601c";

module.exports = ((node/*: any*/)/*: Fragment<
  RepoDetailsDescription_repository$fragmentType,
  RepoDetailsDescription_repository$data,
>*/);
