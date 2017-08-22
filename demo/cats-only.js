import '../../polymer/polymer.js';
import { IronValidatableBehavior } from '../../iron-validatable-behavior/iron-validatable-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `
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
    value: {
      type: String
    },

    name: {
      type: String
    }
  },

  behaviors: [
    IronValidatableBehavior
  ],

  listeners: {
    'input': '_onInput'
  },

  _onInput: function() {
    this.value = this.$.input.value;
  },

  // Overidden from Polymer.IronValidatableBehavior. Will set the `invalid`
  // attribute automatically, which should be used for styling.
  _getValidity: function() {
    return this.value === 'cats';
  }
});
