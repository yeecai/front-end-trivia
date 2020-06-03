1. All the ways to avoid unneccesary child component re-render!

Fact: Once parent component re-renders, the child component will re-render too.
- [x] PureComponent
    1. shallow comparison:  primitive only compare value, arrays or object only compare reference, expect you don't mutate data(objects or arrays), if you do, child component won't know about props updated.
    2. for class
- [x] React.memo :
    1. Same
    2. for functional component
- [x] shouldComponentUpdate:
```
shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content !== this.props.content){
        return true
    }else{
        return false
    }

}
```

- [x] Immutable + Memo
    1. Immutable data: a tree, once you change a node, all related unchanged upper nodes will be updated and others will be shared, return a new object with new reference, so even shallow comparison can notice it! So cool! So far the best solution in production.
    
