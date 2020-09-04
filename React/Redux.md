**What does createStore do in the shadows?**


```
return {
    getState,
    subscribe,
    dispatch,
    replaceReducer
}
```

#### nextListeners

let currentListeners = []
let nextListeners = currentListeners

#### subsribe()
let isSubscribed = true

return function unsubscribe() {
    if (!isSubscribed) return
}

will create a closure for each listener, so it won't unsubscribe next time, a catchy design.

#### dispatch() 

``` 
    currentState = currentReducer(currentState, action)

```

#### replaceReducer() 

- [ ] to read