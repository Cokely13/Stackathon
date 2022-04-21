const db = require('./db')

const User = require('./models/User')
const Car = require('./models/Car')
const Cart = require('./models/Cart')
const Order = require('./models/Order')

Order.belongsTo(User)
User.hasMany(Order)
Cart.belongsTo(User)
Cart.hasMany(Car)
Order.hasMany(Car)
// Cart.belongsToMany(Car, { through: Order });
// Car.belongsToMany(Cart, { through: Order });

module.exports = {
  db,
  models: {
    User,
    Car,
    Cart,
    Order,
  },
}
