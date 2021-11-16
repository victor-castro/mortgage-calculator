class MortgageCalculationResultView {

  /**
   * Creates an instance of MortgageCalculationResultView.
   * @memberof MortgageCalculationResultView
   */
  constructor() {
    const $ = document.querySelector.bind(document);

    this._principleAndInterestResultElement = $('#principle_interest_result');
    this._taxResultElement = $('#tax_result');
    this._insuranceResultElement = $('#insurance_result');
    this._monthlyPaymentResultElement = $('#monthly_payment_result');
  }

  /**
   * template
   * @param {MortgageModel} model
   * @memberof MortgageCalculationResultView
   */
  update(model) {
    this._principleAndInterestResultElement.innerHTML = model.principleAndInterest;
    this._taxResultElement.innerHTML = model.tax;
    this._insuranceResultElement.innerHTML = model.insurance;
    this._monthlyPaymentResultElement.innerHTML = model.monthlyPayment;
  }
}