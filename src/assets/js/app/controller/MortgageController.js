class MorgageController {
  
  /**
   * Creates an instance of MorgageController.
   * @memberof MorgageController
   */
  constructor() {
    const $ = document.querySelector.bind(document);

    this._yearsOfMortgageField = $('#years_of_mortagage_field');
    this._rateOfInterestField = $('#rate_of_interest_field');
    this._loanAmountField = $('#load_amount_field');
    this._amountField = $('#load_amount_field');
    this._annualTaxField = $('#annual_tax_field');
    this._annualInsuranceField = $('annual_insurance_field');
  }

  /**
   * calculateMortgage
   * @param {Event} event
   * @return {MortgageModel} 
   * @memberof MorgageController
   */
  calculateMortgage(event) {
    event.preventDefault();

    return new MortgageModel(
      this._yearsOfMortgageField.value,
      this._rateOfInterestField.value,
      this._loanAmountField.value,
      this._annualTaxField.value,
      this._annualInsuranceField.value
    );
  }
}