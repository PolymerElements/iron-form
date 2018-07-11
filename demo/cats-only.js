/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '@polymer/polymer/polymer-legacy.js';

import {IronValidatableBehavior} from '@polymer/iron-validatable-behavior/iron-validatable-behavior.js';
import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style>
      :host {
        display: inline-block;
      }
      input {
        width: 250px;
      }
      :host([invalid]) input {
        border-color: red;
      }
    </style>
    <input value="{{value}}" id="input" placeholder="Type 'cats' to prove you like cats">
`,

  is: 'cats-only',

  properties: {
    value: {type: String},

    name: {type: String}
  },

  behaviors: [IronValidatableBehavior],
  listeners: {'input': '_onInput'},

  _onInput: function() {
    this.value = this.$.input.value;
  },

  // Overidden from Polymer.IronValidatableBehavior. Will set the `invalid`
  // attribute automatically, which should be used for styling.
  _getValidity: function() {
    return this.value === 'cats';
  }
});
