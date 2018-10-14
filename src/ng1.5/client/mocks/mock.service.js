let jsonIndex = require("json!./index.json");
let jsonCodeBooks = require("json!./codebooks.json");
let jsonPrivateTasks = require("json!./tasks.private.json");
let jsonPlannedTasks = require("json!./tasks.planned.json");

let jsonClientsDetail = require("json!./client.detail.json");
let jsonClientsHistory = require("json!./client.history.json");
let jsonClientsSignals = require("json!./client.signals.json");
let jsonClientsAddSignal = require("json!./client.addSignal.json");
let jsonClientsSearchPO = require("json!./client.search.po.json");
let jsonClientsSearchESSO = require("json!./client.search.esso.json");
let jsonClientsEssoGroup = require("json!./client.essoGroup.json");

let jsonSignalDetail = require("json!./signal.detail.json");
let jsonSignalSearch = require("json!./signal.search.json");

let jsonControls = require("json!./controls.json");


export default function mocks($httpBackend, appConf) {

  // switch off
  // $httpBackend.whenGET(/.*/).passThrough();
  // $httpBackend.whenPOST(/.*/).passThrough();

  // index
  $httpBackend.when('GET', /\.html$/).passThrough();
  $httpBackend.whenGET(`${appConf.apiPrefix}/index`).respond(jsonIndex);

  //codebooks
  $httpBackend.whenGET(`${appConf.apiPrefix}/codebooks?codebookName=CB_RiskClassification&codebookName=CB_EarlyWarningSignalType&codebookName=CB_EarlyWarningSignalSubType&codebookName=CB_EarlyWarningSignalStatus&codebookName=CB_FscsClientRating&codebookName=CB_D4Sector&codebookName=CB_EwsDetectionMethod&codebookName=CB_AccountReservationType&codebookName=CB_TaskType&codebookName=CB_TaskStatus&codebookName=CB_EwsProcessRole&codebookName=CB_CMTContractualTermType&codebookName=CB_AlertCategory&codebookName=CB_ClientAlertType`).respond(jsonCodeBooks);


  // TASKS
  const searchUrl = '/tasks/private/search/e705f32c-67c1-4329-babe-4cc2ae38929e?sort=CreatedDate&asc=false';
  $httpBackend.whenPOST(`${appConf.apiPrefix}/tasks/private/search`).respond(jsonPrivateTasks);
  $httpBackend.whenPOST(/tasks\/common\/search.*/g).respond(jsonPrivateTasks);
  $httpBackend.whenPOST(`${appConf.apiPrefix}/tasks/planned/search`).respond(jsonPlannedTasks);
  $httpBackend.whenGET(`${appConf.apiPrefix}${searchUrl}`).respond(jsonPrivateTasks);


  // CLIENTS
  $httpBackend.whenGET(/\/clients\/.*\/signals/i).respond(jsonClientsSignals);
  $httpBackend.whenGET(/\/clients\/.*\/signals\/\+.*/i).respond(jsonClientsAddSignal);
  $httpBackend.whenGET(/\/clients\/.*\/history/i).respond(jsonClientsHistory);
  let redirectAddNoteUrl = '/cmt-fe/api/clients/9009-05-05-02.52.40.630906/history?refresh=false';
  $httpBackend.when('POST', /.*\/clients\/.*\/history/i).respond(function () {
    return [201, '', {location: redirectAddNoteUrl}]
  });
  $httpBackend.whenGET(redirectAddNoteUrl).respond(jsonClientsHistory);
  //client seznam signalu
  $httpBackend.when('POST', /.*\/clients\/.*\/signals\/+/i).respond(function () {
    return [201, '', {location: redirectAddNoteUrl}]
  });
  //client vyhledavani PO
  const linkSearchPO = '/cmt-fe/api/clients/search/efbf5bfc-c16a-40fc-9561-1bcd7875c5f2';
  $httpBackend.when('POST', /.*\/clients\/search/i).respond(function () {
    return [201, '', {location: linkSearchPO}]
  });
  $httpBackend.whenGET(linkSearchPO).respond(jsonClientsSearchPO);
  //client vyhledavani ESSO
  const linkSearchESSO = '/cmt-fe/api/essogroups/search/9c1e19da-6a76-449a-acff-fffef0108e39';
  $httpBackend.when('POST', /.*\/essogroups\/search/i).respond(function () {
    return [201, '', {location: linkSearchESSO}]
  });
  $httpBackend.whenGET(linkSearchESSO).respond(jsonClientsSearchESSO);
  $httpBackend.whenGET(/.*\/essogroups\/\d.*/i).respond(jsonClientsEssoGroup);

  $httpBackend.whenGET(/\/clients\/.*/i).respond(jsonClientsDetail);


  // SIGNALS
  const linkSearchSignal = '/cmt-fe/api/signals/search/d568fc54-01d9-4b23-aefb-b169d547d8ee';
  $httpBackend.when('POST', /.*\/essogroups\/search/i).respond(function () {
    return [201, '', {location: linkSearchSignal}]
  });
  $httpBackend.whenGET(linkSearchSignal).respond(jsonSignalSearch);

  $httpBackend.whenGET(/\/signals\/.*/i).respond(jsonSignalDetail);


  //CONTROLS
  $httpBackend.whenPOST(/.*\/controls/i).respond(jsonControls);
}

mocks.$inject = ['$httpBackend', 'appConf'];
