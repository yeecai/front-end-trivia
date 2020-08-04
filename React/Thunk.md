Hope you are not unfamiliar with this if you writing code with redux.

  ```
  const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
  ));
  ```

### What is thunk
 -  [ ] A function with delay operation


### What do we need middleware for async data flow in redux
very good question I literally got asked during an interview with a company using redux-saga
redux-thunk here is the representive.
Of cause we can make a regular actionCreator for dispatch async actions, pass dispatch function as parameter, and dispatch action inside, 

 ```actionCreator1(dispatch, parameter) 
 ```
Without reac-thunk, action needs to be plain object(async operation can be in wrapper function tho), and with help of middleware, you can dispatch thunk(action as function instead of plain object)
```dispatch(actionCreator2(parameter)
```

1. The most convienient point is that react-thunk provide getState as 2nd parameter, if you need to access store value in the future, don't have change the caller code to pass another variable as const state = store.getState()
2. Your component can dispatch the action without knowing it's async or sync, if not we need to be aware of adding dispatch as parameter api or not.
3. You can change the async action back to sync action without change the caller, you might need to do change like:
 ```
 actionCreator1(dispatch, parameter) => dispatch(actionCreator1(parameter))
 ```

  [Examples by Dan](https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux)
I think the reason I need to think about whether I should pass dispatch or not for async state change, it's enough to convince me to embrace redux-thunk.


### Why react-thunk, not react-saga(tbd)
1. Thunk is easier
2. saga => daemons, tbd
3. redux-promise, to be discovered.



