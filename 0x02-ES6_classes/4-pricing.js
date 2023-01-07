import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._curency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof (val) !== 'number') {
      throw new TypeError('code must be a number');
    }
    this._amount = val;
  }

  get currency() {
    return this._curency;
  }

  set currency(val) {
    if (val instanceof Currency) {
      throw new TypeError('code must be a currency');
    }
    this._curency = val;
  }

  displayFullPrice() {
    return (`${this._amount} ${this._curency.name} ${this._curency.code}`);
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
