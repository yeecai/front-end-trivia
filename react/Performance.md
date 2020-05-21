1. avoid child component re-render
- [ ] PureComponent
    shallow comparison:  primitive only compare value, arrays or object only compare reference
- [ ] Memo :
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
