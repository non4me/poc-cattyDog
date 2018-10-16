'use strict';
/* global angular */

/**
 * @ngdoc directive
 * @name demoApp.directive:noteList
 * @description
 * # noteList
 */
angular.module('demoApp')
  .directive('noteList', function () {
    return {
      templateUrl: 'scripts/directives/note-list/note-list.html',
      restrict: 'E',
      replace: true,
      controller: function($scope, $rootScope, notesAPI) {
        $rootScope.$emit('startLoading');
        $scope.isAddNew = false;

        notesAPI.getList().then(function (result) {
          if(angular.isObject(result)) {
            $scope.notes = result.data;
          }
          $rootScope.$emit('stopLoading');
        }, function (error) {
          $rootScope.$emit('stopLoading');
          // error processing
          console.log(JSON.stringify(error));
        });

        $scope.addNewNote = function () {
          $scope.hideAddNewNote();
          if($scope.newNote) {
            $rootScope.$emit('startLoading');
            notesAPI.addNote({title: $scope.newNote.toString()}).then(function (result) {
              console.log(JSON.stringify(result));
              if(angular.isObject(result) && angular.isObject(result.data)) {
                $scope.notes.push(result.data);
              }
              $rootScope.$emit('stopLoading');
            }, function (error) {
              $rootScope.$emit('stopLoading');
              // error processing
              console.log(JSON.stringify(error));
            });
          }
        };

        $scope.showAddNewNote = function () {
          $scope.isAddNew = true;
        };

        $scope.hideAddNewNote = function () {
          $scope.isAddNew = false;
        };

        $scope.getNote = function (id) {
          if(angular.isNumber(id)) {
            notesAPI.getNote(id).then(function (result) {
              console.log(JSON.stringify(result));
            });
          }
        };
      }
    };
  });
