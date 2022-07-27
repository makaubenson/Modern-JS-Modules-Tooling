//Importing Module
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';
// console.log('Importing module');
// addToCart('breads', '5');
// console.log(price, totalQuantity);

// console.log('Importing module');
// // Importing all the exports of a module
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);

//importing default export
// import add, { cart } from './shoppingCart.js';

// add('Breads', 5);
// add('Sugar', 3);
// add('Apples', 15);
// console.log(cart);

//Top Level await
// console.log('Start');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// // console.log(res);
// const data = await res.json();
// console.log(data);

// console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   //   console.log(res);
//   const data = await res.json();
//   //   console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// //Method 1: not very clean
// // const lastPost = getLastPost();
// // lastPost.then(last => console.log(last));
// // console.log(lastPost);

// //method 2
// const lastPost = await getLastPost();
// console.log(lastPost);

//The Module Pattern
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push(product, quantity);
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);

//common js modules
//export
// export.addToCart = function (product, quantity) {
//     cart.push(product, quantity);
//     console.log(`${quantity} ${product} added to cart`);
// };
// //import
// const {addToCart} = require('./shoppingCart.js')

//Importing node modules
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
    },
    {
      product: 'pizza',
      quantity: 5,
    },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);
