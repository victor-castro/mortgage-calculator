

Criar o model primeiro

Nome: MortgageModel
  Os dados deve ter um '_' para indicar que é privado

  dados:
  - Years of mortgage
  - Rate of interest (%)
  - Loan Amount
  - Annual Tax
  - Annual Insurance

  iniciar os valores no constructor com um valor inicial.

  Terá os getters dos dados e dos resultados
  - Principle & Interest
    fórmula: 
    ((interestRate / 100) / 12)* loanAmount / (1-Math.pow((1 + (interestRate / 100)/12)),-yearsOfMortgage*12))
  - Tax
    fórmula: annualTax / 12
  - Insurance
    fórmula: annualInsurance / 12
  - Monthly payment
    fórmula: principleAndInterests + Tax + Insurance

Criar Controller

  Nome: MortgageController

  constructor:
  Pegar os inputs no DOM

  Ações:
  - Calculate mortgage - publico
    - instancia um MortgageModel
  - Limpa formulário - privado

Criar MortgageCalculationResultModel

  Validar a necessidade desse model. Talvez resolva tudo no MortgageModel

Criar MortgageCalculationResultView 

  Metodos:
  - template
    html do resultado
    passando um model do resultado como paramentro
  - update




