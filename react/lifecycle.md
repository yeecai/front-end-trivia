
  ![pic](https://github.com/yeecai/front-end-trivia/blob/master/react/lifecycle1.png)

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
