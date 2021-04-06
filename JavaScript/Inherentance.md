https://www.crockford.com/javascript/inheritance.html

#### Parasitic Inheritance

   create a new object and return the instance in constructor
   

#### Constutor(class inheretance)
      ```
      //call superClass's constructor to copy all the properties
      function subClass() {
         superClass.call(this, arguments)
         subClass.prototype.subClassFunction = function() {}
      }
      
      pros: easy
      cons: no function reuse
      ```

#### Prototype                                                                                                                                                     
   ```
      subClass.prototype = new superClass()
   ```
   pros: no dependencies
   cons: no property reuse
   
#### Combination
    ```
    //same with class inheratance but 
    function subClass() {
         superClass.call(this, arguments)
         subClass.prototype.subClassFunction = function() {}
     }
    subClass.prototype = new superClass()
    ...the rest
    ```
    pros: both properties resuse and function reuse
    cons: call superClass twice(copy properties twice)
    
So can we only call the superClass once to copy all the properties and also inherent all the functions refence?

#### Parasitic combination
   ```
    //same with combination inheratance but 
    function subClass() {
         superClass.call(this, arguments)
         subClass.prototype.subClassFunction = function() {}
     }
    subClass.prototype = new superClass.prototype() // new a superClass's prototype
    subClass.prototype.constructor = subClass
    ...the rest
    ```

