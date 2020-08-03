### why do we need middleware

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

### Why react-thunk, not react-saga

### Dispatch function 

with help of react-thunk, can dispatch function(action with parameters instead of plain object)
