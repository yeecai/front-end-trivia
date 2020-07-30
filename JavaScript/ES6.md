###  
- [ ] let & const
- [x] arrow vs normal function
   1. Arrow functions don't have their own this, they inherit it from the enclosing scope. So when you call or apply this on the arrow functions, it will only pass the arguments, i.g. ```arrowFunction.call(this, arg1) // this will be ingored```
   2. Shorter and cleaner syntax(a huge plus :)
   3. No default arguments object(but can ...args instead), no prototype
   4. Can't yeild so can't be used as generators, can't be newed.
   5. If you trying to return a empty object, you need parentheses [es6-in-depth-arrow-functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/).
   ```
     let newArrays = oldArrays.map(item => {});   // wrong! cause item => {} means an arraw function that returns undefined
     let newArrays = oldArrays.map(item => ({})); // ok
   ```
   
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

Questions:  

- [ ] generator: write a iterator
- [ ] what is new in JavaScript 
- [x] Do we still need normal functions? if so why? when do we need to use normal functions:
   
   A: to write generators.
