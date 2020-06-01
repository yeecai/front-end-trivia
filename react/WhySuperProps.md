# why super(props) instead of super()

1.  not allowed to use `this` before super() in class(enforced by JavaScript)
2.  this.props will be undefined before super(props) in contrustor, but okay in other functions like render (React says so)

So why?

1. Probobly get `undefined` error by call this.var1 before super()

```
Component.constructor(props)
{
this.props = props 
...
}
``` 

2. That's because if you don't pass a props, of cause ```this.props === undefined``` will be in the rest of contructor. 
And later after child component constructor, React still assign props to the instance , that's why this.props will be available later
in other life-cycle function!
``` 
const child1 = new childComponent(props)
child1.props = props
```


[ref1](https://overreacted.io/why-do-we-write-super-props/)
