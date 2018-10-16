'use strict';

describe('Service: notesAPI', function () {
  var notesAPI,
      httpBackend;

  // load the controller's module
  beforeEach(module('demoApp'));

  beforeEach(inject(function (_notesAPI_, $httpBackend) {
    notesAPI = _notesAPI_;
    httpBackend = $httpBackend;
    httpBackend.whenGET("i18/en.json").respond();
  }));


  it("getList", function () {
    var serverResponse = [{
      "id": 1, "title": "Jogging in park"
    }, {
      "id": 2, "title": "Pick-up posters from post-office"
    }];
    httpBackend.whenGET("http://private-9aad-note10.apiary-mock.com/notes").respond({
      data: serverResponse
    });

    notesAPI.getList().then(function (responce) {
      expect(responce.data.data).toEqual(serverResponse);
    });
    httpBackend.flush();
  });


  it("getNote", function () {
    var serverResponse = {
      "id": 2,
      "title": "Pick-up posters from post-office"
    };

    httpBackend.whenGET("http://private-9aad-note10.apiary-mock.com/notes/2").respond({
      data: serverResponse
    });

    notesAPI.getNote(2).then(function (responce) {
      expect(responce.data.data).toEqual(serverResponse);
    });
    httpBackend.flush();
  });


  it("addNote", function () {
    var serverResponse = {
      "id": 3,
      "title": "new note text"
    };

    httpBackend.whenPOST("http://private-9aad-note10.apiary-mock.com/notes").respond({
      data: serverResponse
    });

    notesAPI.addNote({title: 'new note text'}).then(function (responce) {
      expect(responce.data.data).toEqual(serverResponse);
    });
    httpBackend.flush();
  });

  it("updateNote", function () {
    var serverResponse = {
      "id": 2,
      "title": "Buy cheese and bread for breakfast."
    };

    httpBackend.whenPUT("http://private-9aad-note10.apiary-mock.com/notes/2").respond({
      data: serverResponse
    });

    notesAPI.updateNote(2, {title: 'Buy cheese and bread for breakfast.'}).then(function (responce) {
      expect(responce.data.data).toEqual(serverResponse);
    });
    httpBackend.flush();
  });

  it("deleteNote", function () {
    httpBackend.whenDELETE("http://private-9aad-note10.apiary-mock.com/notes/2").respond(204);

    notesAPI.deleteNote(2).then(function (responce) {
      expect(responce.status).toEqual(204);
    });
    httpBackend.flush();
  });

});
