- [ ] how to use to!
- [ ] why
- [ ] example for each
- [ ] How to implement a bind

1. bind(thisArg): create a new func, bind this to thisArg
```
    constructor() {
        ...
        this.changeContent = this.changeContent.bind(this);
    }
    //or arrow func
```
2. apply(thisArg, [...argsArray]): 
```
const max = Math.max.apply(null, numbers);
// bind Math.max to max with numbers as arguments
// B.func1.apply(A, args) means objA call func1 of objB with args as arguments
```
3. call(thisArg, arg1,arg2，...):
same with apply but with a list of args instead of an array
```
