import angular from 'angular';

import fetch from './_fetch/fetch';
import indexService from './index/index';
import codebooksService from './codebooks/codeBooks';

import tasksPrivateService from './tasks/private';
import tasksCommonService from './tasks/common';
import tasksPlannedService from './tasks/planned';

import clientDetailsService from './clients/details';
import clientSignalsService from './clients/signals';
import clientHistoryService from './clients/history';
import clientSearchService from './clients/search';
import clientEssoService from './clients/esso';

import signalsDetailService from './signals/detail';
import signalsSearchService from './signals/search';

import controlsDetailService from './controls/detail';

import MOCKS from '../../../../mocks/mocks'

export default angular
  .module('app.services', [MOCKS.name])
  .service({
    fetch
    ,indexService
    ,codebooksService
    ,tasksPrivateService
    ,tasksCommonService
    ,tasksPlannedService
    ,clientDetailsService
    ,clientSignalsService
    ,clientHistoryService
    ,clientSearchService
    ,clientEssoService
    ,signalsDetailService
    ,signalsSearchService
    ,controlsDetailService
  });

