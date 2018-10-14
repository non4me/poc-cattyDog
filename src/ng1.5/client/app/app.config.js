export default {
  apiPrefix: '/cmt-fe/api',
  formats: {
    date: 'dd.MM.yyyy',
    dateSeparator: '.',
    systemDate: 'yyyy-MM-ddTHH:mm:ssZ',
    datetime: 'dd.MM.yyyy HH:mm:ss',
    currency: {
      symbol: '',
      format: '%v %s', // %s = symbol, %v = value/number
      decimal: ',',  // decimal point separator
      thousand: '\u00A0',  // thousands separator
      precision: 2   // decimal places
    },
    number: {
      thousand: ' ',
      precision: 0
    },
    float: {
      thousand: ' ',
      decimal: ',',
      precision: 2
    },
    percentage: {
      symbol: '%',
      thousand: ' ',
      decimal: ',',
      precision: 2
    }
  },
  MIN_CLIENT_NOTE_LENGTH: 3,
  MAX_CLIENT_NOTE_LENGTH: 1000,
  MAX_ACTION_PLAN_LENGTH: 3000,
  MIN_SIGNAL_NOTE_LENGTH: 3,
  MAX_SIGNAL_NOTE_LENGTH: 1000,
  MAX_SIGNAL_DESCRIPTION_LENGTH: 1500,
  DEFAULT_PAGE_SIZE: 10
};

