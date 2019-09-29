/**
 * Citibank Authenticator
 * Citibank Hackathon 2019 Authenticator
 *
 * OpenAPI spec version: 0.0.1
 * Contact: EMAIL
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CitibankAuthenticator);
  }
}(this, function(expect, CitibankAuthenticator) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CitibankAuthenticator.Principal();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Principal', function() {
    it('should create an instance of Principal', function() {
      // uncomment below and update the code to test Principal
      //var instance = new CitibankAuthenticator.Principal();
      //expect(instance).to.be.a(CitibankAuthenticator.Principal);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CitibankAuthenticator.Principal();
      //expect(instance).to.be();
    });

  });

}));
