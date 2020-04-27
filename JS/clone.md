This is a function for clone 5 data types in JS, the difference is when the data is array inside object aka object array, it could very become a tree so have to use recursion.


```
function clone(obj) {
        var copy;
        switch(typeof obj){
            case 'number': 
            case 'string': 
            case 'boolean': 
            copy = obj;
            break;
            case 'object': 
            if (obj == null) {
                copy = null
            } else if (toString.apply(obj) === '[object Array]') {
                copy = [];
                for (var i in obj) {
                    copy.push(clone(obj[i]))
                };
            } else {
                copy = {};
                for (var j in obj) {
                    copy[j] = clone(obj[j]);
                }
            }
        }
        return copy;
    } 
```
