### why do we need middleware

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));
