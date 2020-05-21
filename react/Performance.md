1. avoid child component re-render
- [ ] PureComponent
    1. shallow comparison:  primitive only compare value, arrays or object only compare reference
    2. for class
- [ ] React.memo :
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
