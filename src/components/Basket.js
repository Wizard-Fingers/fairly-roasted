class Basket {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0).toFixed(2);
  }
}

module.exports = Basket;
