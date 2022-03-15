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
    root.MastercardEzaccessForIssuersApi.Card = factory(root.MastercardEzaccessForIssuersApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Card model module.
   * @module model/Card
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Card</code>.
   * Properties of card.
   * @alias module:model/Card
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Card</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Card} obj Optional instance to populate.
   * @return {module:model/Card} The populated <code>Card</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('last4Digits')) {
        obj['last4Digits'] = ApiClient.convertToType(data['last4Digits'], 'Number');
      }
      if (data.hasOwnProperty('eaid')) {
        obj['eaid'] = ApiClient.convertToType(data['eaid'], 'String');
      }
    }
    return obj;
  }

  /**
   * The last 4 digits of a card PAN.
   * @member {Number} last4Digits
   */
  exports.prototype['last4Digits'] = undefined;
  /**
   * The 16-digit Mastercard EzAccess ID (EAID) of the card.
   * @member {String} eaid
   */
  exports.prototype['eaid'] = undefined;



  return exports;
}));


