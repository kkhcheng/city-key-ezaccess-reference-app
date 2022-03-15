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
    define(['ApiClient', 'model/AssignCardEaid', 'model/CardProgram', 'model/EnrolledCard', 'model/Error', 'model/ReplaceCardEaid', 'model/UpdateCardStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AssignCardEaid'), require('../model/CardProgram'), require('../model/EnrolledCard'), require('../model/Error'), require('../model/ReplaceCardEaid'), require('../model/UpdateCardStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.MastercardEzaccessForIssuersApi) {
      root.MastercardEzaccessForIssuersApi = {};
    }
    root.MastercardEzaccessForIssuersApi.CardOperationsApi = factory(root.MastercardEzaccessForIssuersApi.ApiClient, root.MastercardEzaccessForIssuersApi.AssignCardEaid, root.MastercardEzaccessForIssuersApi.CardProgram, root.MastercardEzaccessForIssuersApi.EnrolledCard, root.MastercardEzaccessForIssuersApi.Error, root.MastercardEzaccessForIssuersApi.ReplaceCardEaid, root.MastercardEzaccessForIssuersApi.UpdateCardStatus);
  }
}(this, function(ApiClient, AssignCardEaid, CardProgram, EnrolledCard, Error, ReplaceCardEaid, UpdateCardStatus) {
  'use strict';

  /**
   * CardOperations service.
   * @module api/CardOperationsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new CardOperationsApi. 
   * @alias module:api/CardOperationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCardToProgram operation.
     * @callback module:api/CardOperationsApi~addCardToProgramCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnrolledCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Associate a card with a program.
     * Associate an existing card with the given Mastercard EzAccess program. The card will be allowed to access facilities participating in the associated Mastercard EzAccess program.
     * @param {String} programId Program code known to the issuer for enrolling specified cards for Mastercard EzAccess.
     * @param {module:model/AssignCardEaid} assignCardEaid 
     * @param {module:api/CardOperationsApi~addCardToProgramCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnrolledCard}
     */
    this.addCardToProgram = function(programId, assignCardEaid, callback) {
      var postBody = assignCardEaid;
      // verify the required parameter 'programId' is set
      if (programId === undefined || programId === null) {
        throw new Error("Missing the required parameter 'programId' when calling addCardToProgram");
      }
      // verify the required parameter 'assignCardEaid' is set
      if (assignCardEaid === undefined || assignCardEaid === null) {
        throw new Error("Missing the required parameter 'assignCardEaid' when calling addCardToProgram");
      }

      var pathParams = {
        'program_id': programId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EnrolledCard;
      return this.apiClient.callApi(
        '/programs/{program_id}/cards', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCards operation.
     * @callback module:api/CardOperationsApi~getCardsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch a paginated list of cards.
     * Fetch a paginated list of cards registered for Mastercard EzAccess for the given program code.
     * @param {Object} opts Optional parameters
     * @param {String} opts.programId Program code known to the issuer for enrolling specified cards for Mastercard EzAccess.
     * @param {Number} opts.offset The number of items you asked the start of the list to be offset from. (default to 0)
     * @param {Number} opts.limit The number of items you asked the list to be limited to. (default to 10)
     * @param {module:api/CardOperationsApi~getCardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getCards = function(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'program_id': opts['programId'],
        'offset': opts['offset'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi(
        '/cards', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPrograms operation.
     * @callback module:api/CardOperationsApi~getProgramsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch a paginated list of programs.
     * Fetch a paginated list of programs associated with issuer in Mastercard EzAccess
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset The number of items you asked the start of the list to be offset from. (default to 0)
     * @param {Number} opts.limit The number of items you asked the list to be limited to. (default to 10)
     * @param {module:api/CardOperationsApi~getProgramsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getPrograms = function(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi(
        '/programs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the registerCards operation.
     * @callback module:api/CardOperationsApi~registerCardsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register list of card EAIDs
     * Register multiple Mastercard EzAccess IDs (EAIDs) to be enabled for Mastercard EzAccess. Registered cards are allowed to access the selected facilities participating in Mastercard EzAccess.
     * @param {module:model/CardProgram} cardProgram 
     * @param {module:api/CardOperationsApi~registerCardsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.registerCards = function(cardProgram, callback) {
      var postBody = cardProgram;
      // verify the required parameter 'cardProgram' is set
      if (cardProgram === undefined || cardProgram === null) {
        throw new Error("Missing the required parameter 'cardProgram' when calling registerCards");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi(
        '/cards', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeCard operation.
     * @callback module:api/CardOperationsApi~removeCardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnrolledCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a card from a program.
     * Unassociate a card for a specific Mastercard EzAccess program.The card will not be allowed to access facilities participating in the Mastercard EzAccess program.
     * @param {String} programId Program code known to the issuer for enrolling specified cards for Mastercard EzAccess.
     * @param {String} cardEaid The Mastercard EzAccess ID (EAID) for the given card.
     * @param {module:api/CardOperationsApi~removeCardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnrolledCard}
     */
    this.removeCard = function(programId, cardEaid, callback) {
      var postBody = null;
      // verify the required parameter 'programId' is set
      if (programId === undefined || programId === null) {
        throw new Error("Missing the required parameter 'programId' when calling removeCard");
      }
      // verify the required parameter 'cardEaid' is set
      if (cardEaid === undefined || cardEaid === null) {
        throw new Error("Missing the required parameter 'cardEaid' when calling removeCard");
      }

      var pathParams = {
        'program_id': programId,
        'card_eaid': cardEaid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EnrolledCard;
      return this.apiClient.callApi(
        '/programs/{program_id}/cards/{card_eaid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the replaceCard operation.
     * @callback module:api/CardOperationsApi~replaceCardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnrolledCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replace a card EAID.
     * Transfer an existing card's associated programs to a new EAID for use in Mastercard EzAccess. The current card EAID will be disabled from being used in Mastercard EzAccess.
     * @param {String} cardEaid The Mastercard EzAccess ID (EAID) for the given card.
     * @param {module:model/ReplaceCardEaid} replaceCardEaid 
     * @param {module:api/CardOperationsApi~replaceCardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnrolledCard}
     */
    this.replaceCard = function(cardEaid, replaceCardEaid, callback) {
      var postBody = replaceCardEaid;
      // verify the required parameter 'cardEaid' is set
      if (cardEaid === undefined || cardEaid === null) {
        throw new Error("Missing the required parameter 'cardEaid' when calling replaceCard");
      }
      // verify the required parameter 'replaceCardEaid' is set
      if (replaceCardEaid === undefined || replaceCardEaid === null) {
        throw new Error("Missing the required parameter 'replaceCardEaid' when calling replaceCard");
      }

      var pathParams = {
        'card_eaid': cardEaid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EnrolledCard;
      return this.apiClient.callApi(
        '/cards/{card_eaid}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCard operation.
     * @callback module:api/CardOperationsApi~updateCardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnrolledCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Block or unblock a card.
     * Update a card's status in Mastercard EzAccess as Blocked or Active. Blocked cards are disabled from being used for Mastercard EzAaccess. Active cards are enabled for use in Mastercard EzAccess.
     * @param {String} cardEaid The Mastercard EzAccess ID (EAID) for the given card.
     * @param {module:model/UpdateCardStatus} updateCardStatus 
     * @param {module:api/CardOperationsApi~updateCardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnrolledCard}
     */
    this.updateCard = function(cardEaid, updateCardStatus, callback) {
      var postBody = updateCardStatus;
      // verify the required parameter 'cardEaid' is set
      if (cardEaid === undefined || cardEaid === null) {
        throw new Error("Missing the required parameter 'cardEaid' when calling updateCard");
      }
      // verify the required parameter 'updateCardStatus' is set
      if (updateCardStatus === undefined || updateCardStatus === null) {
        throw new Error("Missing the required parameter 'updateCardStatus' when calling updateCard");
      }

      var pathParams = {
        'card_eaid': cardEaid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EnrolledCard;
      return this.apiClient.callApi(
        '/cards/{card_eaid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
