class MortgageModel {

  /**
   * Creates an instance of MortgageModel.
   * @param {number} yearsOfMortgage
   * @param {number} rateOfInterest
   * @param {number} loanAmount
   * @param {number} annualTax
   * @param {number} annualInsurance
   * @memberof MortgageModel
   */
  constructor(yearsOfMortgage, rateOfInterest, loanAmount, annualTax, annualInsurance) {
    this._yearsOfMortgage = yearsOfMortgage;
    this._rateOfInterest = rateOfInterest;
    this._loanAmount = loanAmount;
    this._annualTax = annualTax;
    this._annualInsurance = annualInsurance;
  }


  /**
   * principleAndInterest
   * @readonly
   * @memberof MortgageModel
   */
  get principleAndInterest() {
    return ((this._rateOfInterest / 100) / 12) * this._loanAmount / (1 - Math.pow((1 + (this._rateOfInterest / 100) / 12)), -yearsOfMortgage * 12);
  }

  /**
   * tax
   * @readonly
   * @memberof MortgageModel
   */
  get tax() {
    return this._annualTax / 12;
  }

  /**
   * insurance
   * @readonly
   * @memberof MortgageModel
   */
  get insurance() {
    return this._annualInsurance / 12;
  }

  /**
   * monthlyPayment
   * @readonly
   * @memberof MortgageModel
   */
  get monthlyPayment() {
    return this.principleAndInterest + this.tax + this.insurance;
  }
}