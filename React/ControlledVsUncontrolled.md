The difference is whether you bind the current value with variable in state(couled be internal or external state like store).

1. Uncontrolled
Can get the value using a ref
Easy to implement but the state(current value) of component is not under controlled.
  
2. Controlled, put the current value in state, use onChange(setState) to change it.
 
 ```
 const { currentValue } = props
  handleChange = (event) => {
    this.setState({ currentValue: event.target.value });
  };
  <input value={currentValue} onChange={handleChange} /> 
``` 
 It's your component need to do some change base on the current value controlled component is better choice,
  But more code to write, image you have a form with 100 input, then you will have at least an array with lenght 100 or 100 varable:) 
  
  
  
  [ref](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)
