class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price.toFixed(2); // Format price to two decimal places instead of one
  }
}

module.exports = Item;
