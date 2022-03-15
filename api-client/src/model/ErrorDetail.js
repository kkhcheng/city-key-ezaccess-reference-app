/**
 * Mastercard Ezaccess For Issuers API
 * [![](https://mstr.cd/320oUJL)](https://developer.mastercard.com)  This is the Mastercard EzAccess for Issuers API.  This API uses OAuth 1.0a for authenticating client applications. For that, please refer to [Using OAuth 1.0a to Access Mastercard APIs](https://mstr.cd/31YcrTi).  The transport between client applications and Mastercard EzAccess service is secured using [TLS/SSL](https://w.wiki/PoA).
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: apisupport@mastercard.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.4.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MastercardEzaccessForIssuersApi) {
      root.MastercardEzaccessForIssuersApi = {};
    }
    root.MastercardEzaccessForIssuersApi.ErrorDetail = factory(root.MastercardEzaccessForIssuersApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ErrorDetail model module.
   * @module model/ErrorDetail
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ErrorDetail</code>.
   * @alias module:model/ErrorDetail
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ErrorDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorDetail} obj Optional instance to populate.
   * @return {module:model/ErrorDetail} The populated <code>ErrorDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Source')) {
        obj['Source'] = ApiClient.convertToType(data['Source'], 'String');
      }
      if (data.hasOwnProperty('ReasonCode')) {
        obj['ReasonCode'] = ApiClient.convertToType(data['ReasonCode'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('Recoverable')) {
        obj['Recoverable'] = ApiClient.convertToType(data['Recoverable'], 'Boolean');
      }
      if (data.hasOwnProperty('Details')) {
        obj['Details'] = ApiClient.convertToType(data['Details'], 'String');
      }
    }
    return obj;
  }

  /**
   * Source of the error
   * @member {String} Source
   */
  exports.prototype['Source'] = undefined;
  /**
   * 0001
   * @member {String} ReasonCode
   */
  exports.prototype['ReasonCode'] = undefined;
  /**
   * Describe the invalid input
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * Whether the error is recoverable
   * @member {Boolean} Recoverable
   */
  exports.prototype['Recoverable'] = undefined;
  /**
   * name
   * @member {String} Details
   */
  exports.prototype['Details'] = undefined;



  return exports;
}));


