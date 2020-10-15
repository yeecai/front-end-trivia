
  ![pic](https://github.com/yeecai/front-end-trivia/blob/master/react/lifecycle1.png?raw=true)

  ![pic](https://user-images.githubusercontent.com/23628182/82418364-7c161e00-9aaf-11ea-9002-e0c70c4c38e5.png)

1.< 16.4
  - [ ] initializing
  - [ ] mounting:
    1. componentWillMount
    2. render
    3. componentDidMount
  - [ ] updating: 
      1. componentWillReceiveProps: 1) parent compoenent pass props, 2) parent componenet re-render
      2. shouldComponentUpdate: false or true
      3. componentWillUpdate: if shouldComponentUpdate return false, componentWillUpdate will not be executed 
      4. render
      5. componentDidUpdate
  - [ ] unmounting
  
  
  2.>= 16.4
  - [ ] Reason of change
  - [ ] updating:
  
  
  Ps: not save to operate DOM before commit stage.


 - [ ] A question, why can't we write lifecycle functions as arrow function, e.g. componentDidMount = () => {...}
 
 The answer is we can, the broswer won't complain about it, but the performance may suffer if you have lots instance of your component, because arrow function will create function object on each instance instead of reuse the function on prototype, that's why better keep it as componentDidMount() {}
 
 
 Happy coding : )
