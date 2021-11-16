class View {

  /**
   * Creates an instance of View.
   * @param {HTMLElement} element
   * @memberof View
   */
  constructor(element) {
    this._element = element;
  }

  template() {
    throw new Error('O método template deve ser implementado.');
  }

  update(model) {
    this._element.innerHTML = this.template(model);
  }
}