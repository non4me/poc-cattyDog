'use strict';
/* global angular */

/**
 * @ngdoc directive
 * @name demoApp.directive:noteElement
 * @description
 * # noteElement
 */
angular.module('demoApp')
  .directive('noteElement', function () {
    return {
      templateUrl: 'ng1/app/scripts/directives/note-list/note-element/note-element.html',
      restrict: 'E',
      replace: true,
      scope: {
        note: '=',
        notes: '='
      },
      controller: function ($scope, $filter, $rootScope, notesAPI) {

        var updateNote = function () {
          notesAPI.updateNote($scope.note.id, $scope.note.title).then(function (result) {
            console.log(JSON.stringify(result));
          });
        };

        $scope.isEdit = false;

        $scope.showEditor = function () {
          $scope.isEdit = true;
        };

        $scope.hideEditor = function () {
          $scope.isEdit = false;
          updateNote();
        };

        $scope.catchEnter = function (event) {
          if (event.keyCode === 13) {
            $scope.hideEditor();
          }
        };

        $scope.deleteNote = function () {
          if (window.confirm($filter('translate')('del_confirm'))) {
            $rootScope.$emit('startLoading');
            notesAPI.deleteNote($scope.note.id).then(function (result) {
              console.log(JSON.stringify(result));
              $rootScope.$emit('stopLoading');

              // pseudo delete for demo task only!
              if (angular.isArray($scope.notes)) {
                $scope.notes.map(function (el, index) {
                  if(el.id === $scope.note.id) {
                    $scope.notes.splice(index,1);
                  }
                })
              }
            }, function (error) {
              $rootScope.$emit('stopLoading');
              // error processing
            });
          }
        };
      }
    };
  });
