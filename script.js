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
console.log('Start');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log(res);
const data = await res.json();
console.log(data);

console.log('Something');
