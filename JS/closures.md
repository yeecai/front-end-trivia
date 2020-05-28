- [x] What is closues:  a function with context {var ; var b; func c()} outside it's scope, the context wont be cleared by js, so the function can access those out-of-scope variables next time because of closure, kinda like static function within a class in other OOP languages i.g. JAVA or C++.
- [x] What's for:  closure is one of the strategies that make JS OOP too, hooray!
- [x] Pitfalls: You might bug your program with loops by creating closures and it might cause memory leak.

more: 
1. function currying is implemented with closures
2. snapshot of the stack so the function can access to the variable

[promise me you will read this!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
