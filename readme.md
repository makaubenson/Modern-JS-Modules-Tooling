# MODERN JS DEVELOPMENT

- We ussually divide our code into modules for easy management.
- There even 3rd party modules existing in the internet (found in the npm repo)
- Once development is done, the code should then be converted into one javascript bundle(through a build process) which is then taken to production.
- To create the javascript bundle, there are a few processes entailed:

## Bundling

- Joining all our modules into one big file.
- It eliminates unused code and compress our code as well.
- `This process is important since:`
- Browsers dont support modules at all, and thus if not bundled, browsers may find it hard to execute the code in the modules.
- It better for perfomance to sell less code to the server for execution.

## Transpilling / Polyfilling

- This is basically converting all modern js back to ES5 for older browsers to understand code without breaking.
- This is ussualy done using a tool called `babel`.

- To do the build process, we dont do it ourselves, instead, we use a special tool which does it for us.
- The most common build tools are `webpack` and `parcel`. These tools take our raw code and convert it to a js bundle.
- `webpack` is the most popular but difficult to configure.
- `parcel` - zero config bundler that works out of the box. We dont write any setup code.
- These tools are also on npm.

## Modules

- A module is a reusable piece of code that encapuslates implimentation details of a certain part of a our project.
- Its a standalone file, but not always the case.
- We can import of export some values in a module.
- The exported values are referred to as a public API.
- Dependancies are those imported.
- Modules are important building blocks which can be put together to build complex apps.
- Modules can be developed in complete isolation.
- They make it easy to abstract our code.
- Lead to a more organized code.
- Allows us to reuse same code across multiple projects.

## Native Js ES6 Modules

- These are modules stored in files, exactly one module per file.
- ![js modules](https://user-images.githubusercontent.com/59168713/181179516-53454a35-9f20-4e1e-897f-2f0cab13b108.png)

### Imports and Exports

![import](https://user-images.githubusercontent.com/59168713/181179593-34ef160a-a89a-434c-b6d5-69de0e87ca16.png)

- No need to use `strict` mode since all modules are executed in strict mode by default.

## Exports

- In ES6 modules there are 2 types of exports:

### named exports

- Simplest way of exporting smth from a module by just putting `export` infront of anything we many need to export.

```
export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
};
```

- Importing the above export
- `import { addToCart } from './shoppingCart.js';`

#### Exporting multiple variables

```
const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };
```

- Importing multiple exports
- `import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';`

- Change name of import variable

```
import {
  addToCart,
  totalPrice as price,
  totalQuantity,
} from './shoppingCart.js';
```

- Change name of export variable
- `export { totalPrice, totalQuantity as tq };`
- On the import now, `tq` will be used.

#### Importing all the exports of a module

```
import \* as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);
```

### default exports

- we use default exports when we want to export just one thing per module.

```
export default function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
}
```

- No names for exported things.

#### importing default export

- we can give it any name we want.

```
import add, { cart } from './shoppingCart.js';

add('Breads', 5);
add('Sugar', 3);
add('Apples', 15);
console.log(cart);
```

### Note: Imports are not copies of exports, instead they are like a live connection. i.e, they point to the same place in memory.

## Top Level Await

- We can now use `await` keyword outside `async` function in `modules`.

```
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log(res);

const data = await res.json();
console.log(data);
```

```
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   console.log(res);
  const data = await res.json();
  //   console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};
//Method 1: not very clean
// const lastPost = getLastPost();
// lastPost.then(last => console.log(last));
// console.log(lastPost);

//method 2
const lastPost = await getLastPost();
console.log(lastPost);
```

- `It however blocks the entire execution of the module now.`

## Node Package Manager (NPM)

- To use NPM we need to initialize it first.(npm init)
- This creates `package.json`. This files is the one that stores the entire configuration of the project.

- To install package write `npm install <package>`
- For this case, we will use `parcel` as our module bundler.

### Using parcel

- `npm i parcel --save-dev`- Installing parcel as a devDependancy.

- To use parcel when locally installed, we either use `npx` or `npm scripts`

#### npx

- To run parcel `npx parcel index.html`

#### npm scripts

- `"start": "parcel index.html"`
- `"build": "parcel build index.html"`
- writing a script like the line above in package.json.

## Transpilling and Polyfilling

- Basically we would have to configure barbel but parcel already supports it so no need to configure.

## Transpilling

- Transpiling is the process of interpreting certain programming languages and translating it to a specific target language. In this context, transpiling will take compile-to-JS languages and translate them into the target language of Javascript.
- The features available in common JavaScript applications (Chrome, Firefox, NodeJS, etc.) often lag behind the latest ECMAScript specifications (ES6/ES2015, ES7/ES2016, etc.). Once a specification has been approved, it will most certainly be available natively in future versions of JavaScript applications.
- Rather than waiting for new JavaScript releases, engineers can start writing code that will run natively in the future (future-proofing) by using a compiler to convert code written for newer specifications into code compatible with existing applications. Common transpilers include Babel and Google Traceur.

### Note: Newer features are not able to be transpilled as of today, thus we have to polyfile them

## Polyfilling (use libraries such as)

- A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

```
import 'core-js/stable';
```

#### polyfilling specific js features(methods, promises etc)

```
 import 'core-js/stable/array/find';
 import 'core-js/stable/promise';
```

#### polyfilling async functions

```
import 'regenerator-runtime/runtime';
```
