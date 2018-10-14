export default class FinancialReportController {
  constructor() {
    this.name = 'financialReport';

    this.fixedRows = [
      {key: 'totalTurnover', formatFilter: 'ewsCurrencyMillions', label: 'Total Turnover (mil. Kč)'},
      {key: 'ebit', formatFilter: 'ewsCurrencyMillions', label: 'EBIT (mil. Kč)'},
      {key: 'ebitda', formatFilter: 'ewsCurrencyMillions', label: 'EBITDA (mil. Kč)'},
      {key: 'netProfitOrLoss', formatFilter: 'ewsCurrencyMillions', label: 'Net Profit or Loss (mil. Kč)'},
      {key: 'totalAssets', formatFilter: 'ewsCurrencyMillions', label: 'Total Assets (mil. Kč)'},
      {key: 'equity', formatFilter: 'ewsCurrencyMillions', label: 'Equity (mil. Kč)'},
      {key: 'equityRatio', formatFilter: 'ewsPercentage', label: 'Equity Ratio (%)'},
      {key: 'netDebt', formatFilter: 'ewsCurrencyMillions', label: 'Net Debt (mil. Kč)'},
      {key: 'netDebtDivisionEbitda', formatFilter: 'ewsPercentage', label: 'Net Debt / EBITDA'},
      {key: 'interestCoverageRatio', formatFilter: 'ewsPercentage', label: 'Interest Coverage Ratio (%)'},
      {key: 'grossMargin', formatFilter: 'ewsPercentage', label: 'Gross Margin (%)'},
      {key: 'daysReceivable', formatFilter: 'ewsNumber', label: 'Days Receivable'},
      {key: 'daysPayable', formatFilter: 'ewsNumber', label: 'Days Payable'},
      {key: 'capex', formatFilter: 'ewsCurrencyMillions', label: 'Capex (mil. Kč)'},
      {key: 'freeCashflow', formatFilter: 'ewsCurrencyMillions', label: 'Free Cash Flow (mil. Kč)'}
    ];
  }
}

