[![Published on NPM](https://img.shields.io/npm/v/@polymer/iron-form.svg)](https://www.npmjs.com/package/@polymer/iron-form)
[![Build status](https://travis-ci.org/PolymerElements/iron-form.svg?branch=master)](https://travis-ci.org/PolymerElements/iron-form)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/@polymer/iron-form)


## &lt;iron-form&gt;
`<iron-form>` is a wrapper around the HTML `<form>` element, that can
validate and submit both custom and native HTML elements.

It has two modes: if `allow-redirect` is true, then after the form submission you
will be redirected to the server response. Otherwise, if it is false, it will
use an `iron-ajax` element to submit the form contents to the server.

See: [Documentation](https://www.webcomponents.org/element/@polymer/iron-form),
  [Demo](https://www.webcomponents.org/element/@polymer/iron-form/demo/demo/index.html).

## Usage

### Installation
```
npm install --save @polymer/iron-form
```

### In an html file
```html
<html>
  <head>
    <script type="module">
      import '@polymer/iron-form/iron-form.js';
      import '@polymer/paper-checkbox/paper-checkbox.js';
    </script>
  </head>
  <body>
    <iron-form>
      <form method="get" action="/form/handler">
        <input type="text" name="name" value="Batman">
        <input type="checkbox" name="donuts" checked> I like donuts<br>
        <paper-checkbox name="cheese" value="yes" checked></paper-checkbox>
      </form>
    </iron-form>
  </body>
</html>
```
By default, a native `<button>` element (or `input type="submit"`) will submit this form.
However, if you want to submit it from a custom element's click handler, you need to explicitly
call the `iron-form`'s `submit` method:

```html
  <paper-button raised onclick="submitForm()">Submit</paper-button>

  function submitForm() {
    document.getElementById('iron-form').submit();
  }
```

### In a Polymer 3 element
```js
import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-checkbox/paper-checkbox.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <iron-form>
      <form method="get" action="/form/handler">
        <input type="text" name="name" value="Batman">
        <input type="checkbox" name="donuts" checked> I like donuts<br>
        <paper-checkbox name="cheese" value="yes" checked></paper-checkbox>
      </form>
    </iron-form>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## Contributing
If you want to send a PR to this element, here are
the instructions for running the tests and demo locally:

### Installation
```sh
git clone https://github.com/PolymerElements/iron-form
cd iron-form
npm install
npm install -g polymer-cli
```

### Running the demo locally
```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```
