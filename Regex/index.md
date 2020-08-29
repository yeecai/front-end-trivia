### case 1

transfer irregular object-like string into JSONlike string then, use JSON.parse to turn it into object


```
let yourString = "[{firstName: 'yeee', lastName: 'Cai'}]"

let temp = yourJson.replace((/([\w]+)(:)/g), "\"$1\"$2")

let result = temp.replace((/'/g), "\"")

console.log(temp) // {"firstName": 'yeee', "lastName": 'Cai'}]
 
console.log(result) // [{"firstName": "yeee", "lastName": "Cai"}]

JSON.parse(JSON(result)) // 
0:
 firstName: "yeee"
 lastName: "Cai"
__proto__: Object
 length: 1
__proto__: Array(0)

```

