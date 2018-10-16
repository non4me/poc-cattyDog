'use strict';
/* global angular */
/** @namespace gui.Window */

/**
 * @ngdoc service
 * @name demoApp.notesAPI
 * @description
 * # notesAPI
 *
 */
angular.module('demoApp')
  .factory('notesAPI', function ($http) {
    var baseUrl = 'http://private-9aad-note10.apiary-mock.com';

    //TODO: Add validation
    //TODO: return $q and resolve server errors here

    return {
      getList: function () {
        return $http.get(baseUrl +'/notes');
      },
      getNote: function (id) {
        return $http.get(baseUrl +'/notes/'+ id);
      },
      addNote: function (data) {
        return $http.post(baseUrl +'/notes', data);
      },
      updateNote: function (id, data) {
        return $http.put(baseUrl +'/notes/'+ id, data);
      },
      deleteNote: function (id) {
        return $http.delete(baseUrl +'/notes/'+ id);
      }
    };
  });
