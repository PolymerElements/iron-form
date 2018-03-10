/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-form.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="../iron-ajax/iron-ajax.d.ts" />

/**
 * `<iron-form>` is a wrapper around the HTML `<form>` element, that can
 * validate and submit both custom and native HTML elements. Note that this
 * is a breaking change from iron-form 1.0, which was a type extension.
 *
 * It has two modes: if `allow-redirect` is true, then after the form submission you
 * will be redirected to the server response. Otherwise, if it is false, it will
 * use an `iron-ajax` element to submit the form contents to the server.
 *
 *   Example:
 *
 *     <iron-form>
 *       <form method="get" action="/form/handler">
 *         <input type="text" name="name" value="Batman">
 *         <input type="checkbox" name="donuts" checked> I like donuts<br>
 *         <paper-checkbox name="cheese" value="yes" checked></paper-checkbox>
 *       </form>
 *     </iron-form>
 *
 * By default, a native `<button>` element will submit this form. However, if you
 * want to submit it from a custom element's click handler, you need to explicitly
 * call the `iron-form`'s `submit` method.
 *
 *   Example (using `<paper-button>` for the form `<iron-form id="myForm">`):
 *
    <paper-button raised on-tap="submitForm">Submit</paper-button>
 *
 *     function submitForm() {
 *       this.$.myForm.submit();
 *     }
 *
 *   or (using `<button>` for the same form):
 *
 *     <button raised onclick="submitForm()">Submit</button>
 *
 *     function submitForm() {
 *       // `this.$.myForm.submit();`  or
 *       document.getElementById('myForm').submit();
 *     }
 *
 * If you are not using the `allow-redirect` mode, then you also have the option of
 * customizing the request sent to the server. To do so, you can listen to the `iron-form-presubmit`
 * event, and modify the form's [`iron-ajax`](https://elements.polymer-project.org/elements/iron-ajax)
 * object. However, If you want to not use `iron-ajax` at all, you can cancel the
 * event and do your own custom submission:
 *
 *   Example of modifying the request, but still using the build-in form submission:
 *
 *     form.addEventListener('iron-form-presubmit', function() {
 *       this.request.method = 'put';
 *       this.request.params['extraParam'] = 'someValue';
 *     });
 *
 *   Example of bypassing the build-in form submission:
 *
 *     form.addEventListener('iron-form-presubmit', function(event) {
 *       event.preventDefault();
 *       var firebase = new Firebase(form.getAttribute('action'));
 *       firebase.set(form.serializeForm());
 *     });
 *
 * Note that if you're dynamically creating this element, it's mandatory that you
 * first create the contained `<form>` element and all its children, and only then
 * attach it to the `<iron-form>`:
 *
 *   var wrapper = document.createElement('iron-form');
 *   var form = document.createElement('form');
 *   var input = document.createElement('input');
 *   form.appendChild(input);
 *   document.body.appendChild(wrapper);
 *   wrapper.appendChild(form);
 */
interface IronFormElement extends Polymer.Element {

  /**
   * Set this to true if you don't want the form to be submitted through an
   * ajax request, and you want the page to redirect to the action URL
   * after the form has been submitted.
   */
  allowRedirect: boolean|null|undefined;

  /**
   * HTTP request headers to send. See PolymerElements/iron-ajax for
   * more details. Only works when `allowRedirect` is false.
   */
  headers: object|null|undefined;

  /**
   * Set the `withCredentials` flag on the request. See PolymerElements/iron-ajax for
   * more details. Only works when `allowRedirect` is false.
   */
  withCredentials: boolean|null|undefined;
  attached(): void;
  detached(): void;
  _init(): void;
  _saveInitialValues(): void;

  /**
   * Validates all the required elements (custom and native) in the form.
   *
   * @returns True if all the elements are valid.
   */
  validate(): boolean;

  /**
   * Submits the form.
   */
  submit(event?: Event|null): void;

  /**
   * Resets the form to the default values.
   */
  reset(event?: Event|null): void;

  /**
   * Serializes the form as will be used in submission. Note that `serialize`
   * is a Polymer reserved keyword, so calling `someIronForm`.serialize()`
   * will give you unexpected results.
   *
   * @returns An object containing name-value pairs for elements that
   *                  would be submitted.
   */
  serializeForm(): {[key: string]: any};
  _handleFormResponse(event: any): void;
  _handleFormError(event: any): void;
  _makeAjaxRequest(json: any): void;
  _getValidatableElements(): any;
  _getSubmittableElements(): any;
  _serializeElementValues(element: any): any;
  _serializeSelectValues(element: any): any;
  _serializeInputValues(element: any): any;
  _createHiddenElement(name: any, value: any): any;
  _addSerializedElement(json: any, name: any, value: any): void;
}

interface HTMLElementTagNameMap {
  "iron-form": IronFormElement;
}
