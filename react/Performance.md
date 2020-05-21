1. avoid child component re-render
- [ ] PureComponent
    shallow comparison: only primitive same value ==? or ===, reference same
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
