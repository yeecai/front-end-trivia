https://www.crockford.com/javascript/inheritance.html

1. Parasitic Inheritance

   create a new object and return the instance in constructor
   

2. Constutor(class inheretance)
      ```
      //call superClass's constructor to copy all the properties
      function subClass() {
         superClass.call(this, arguments)
         subClass.prototype.subClassFunction = function() {}
      }
      
      pros: easy
      cons: no function reuse
      ```

3. Prototype
4. Combination
    ```
    //same with class inheratance but 
    function subClass() {
         superClass.call(this, arguments)
         subClass.prototype.subClassFunction = function() {}
     }
    subClass.prototype = new superClass()
    ...the rest
    ```

4. Parasitic combination
