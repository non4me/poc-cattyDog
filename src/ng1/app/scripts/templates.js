angular.module('demoApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('scripts/directives/_loader/loader.html',
    "<div class=loader ng-if=isLoading><div class=backdrop></div><img src=/images/loader2.gif></div>"
  );


  $templateCache.put('scripts/directives/lang-switcher/lang-switcher.html',
    "<div class=lang-switcher><div class=btn-group role=group><button type=button class=\"btn btn-default\" ng-click=\"changeLanguage('en')\" ng-class=\"{ 'active' : defaultLanuage === 'en' }\">EN</button> <button type=button class=\"btn btn-default\" ng-click=\"changeLanguage('cz')\" ng-class=\"{ 'active' : defaultLanuage === 'cz' }\">CZ</button></div></div>"
  );


  $templateCache.put('scripts/directives/navigation/navigation.html',
    "<div class=header><div class=\"navbar navbar-default\" role=navigation><div class=container><div class=navbar-header><button type=button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#js-navbar-collapse><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=\"#/\">Demo</a></div><div class=\"collapse navbar-collapse\" id=js-navbar-collapse><lang-switcher></lang-switcher></div></div></div></div>"
  );


  $templateCache.put('scripts/directives/note-list/note-element/note-element.html',
    "<div class=note-element ng-dblclick=showEditor()><div class=\"del-btn pull-right\" title=\"{{ 'del' | translate }}\" ng-click=deleteNote() ng-show=!isEdit><span class=\"glyphicon glyphicon-remove\"></span></div><span class=title ng-show=!isEdit>{{ note.title }}</span><textarea class=editor ng-model=note.title ng-keypress=catchEnter($event) click-out=hideEditor() ng-if=isEdit></textarea></div>"
  );


  $templateCache.put('scripts/directives/note-list/note-list.html',
    "<div class=note-list><div class=\"btn btn-success add\" ng-click=showAddNewNote() ng-show=!isAddNew><span class=\"glyphicon glyphicon-plus-sign\" title=\"{{ 'add' | translate }}\"></span> {{ 'add' | translate }}</div><textarea class=new-note ng-model=newNote ng-show=isAddNew></textarea><div class=btn-group role=group ng-show=isAddNew><button type=button class=\"btn btn-warning left\" title=\"{{ 'cancel' | translate }}\" ng-click=hideAddNewNote()><span class=\"glyphicon glyphicon-remove\"></span></button> <button type=button class=\"btn btn-success right\" title=\"{{ 'add' | translate }}\" ng-click=addNewNote()><span class=\"glyphicon glyphicon-ok\"></span></button></div><note-element notes=notes note=note ng-repeat=\"note in notes | orderBy:'-id'\"></note-element><div class=dblclick><span class=\"glyphicon glyphicon-edit\"></span> {{ 'dblclick' | translate }}</div></div>"
  );


  $templateCache.put('views/main.html',
    "<div class=jumbotron><h1>{{ 'notes' | translate }}</h1><note-list></note-list></div>"
  );

}]);
