/**
 * @generated SignedSource<<d9bc928d6ea9dfe702a440a953aa1f51>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type InfoDescription_repository$fragmentType: FragmentType;
export type InfoDescription_repository$ref = InfoDescription_repository$fragmentType;
export type InfoDescription_repository$data = {|
  +description: ?string,
  +$fragmentType: InfoDescription_repository$fragmentType,
|};
export type InfoDescription_repository = InfoDescription_repository$data;
export type InfoDescription_repository$key = {
  +$data?: InfoDescription_repository$data,
  +$fragmentSpreads: InfoDescription_repository$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InfoDescription_repository",
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

(node/*: any*/).hash = "8d9a923f7eb9c5afad5ab415a656b75e";

module.exports = ((node/*: any*/)/*: Fragment<
  InfoDescription_repository$fragmentType,
  InfoDescription_repository$data,
>*/);
