- [x] how to use to!
- [x] why : because this will change to the last object calling it
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
```
//version1
    const bind1(fun, ctx) {
        const newFun = function(){
            return newFun.appy(ctx, arguments)
        }
        //toString
        return newFun
    }
    
    ps: you can also curring with bind
    let base = (x, y) => x + y 
    let curr = base.bind(null, 1) // bind 1 to x
    curr(2) // 3
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

https://segmentfault.com/a/1190000018017796
