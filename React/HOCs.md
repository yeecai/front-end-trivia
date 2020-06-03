
If you reading source code using material-ui, ever curious like me about why's the classes coming from props but no parent component ever pass any.
''' const { classes } = this.props; '''


### What n why HOCs

Higer order component, like decorator in Python, take one component as input and return a wrapped one, such as Redux’s connect and material-ui's withStyles,
to solve problems like two components have some logic but different data set, to avoid duplication.

### When do we need HOC

### How to write one
