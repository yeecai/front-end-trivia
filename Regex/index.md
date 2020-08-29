transfer irregular object-like string into JSONlike string then, use JSON.parse to turn it into object


```
let yourJson = "[{firstName: 'yeee', lastName: 'Cai'}]"

let jsonTemp = yourJson.replace((/([\w]+)(:)/g), "\"$1\"$2")

let correctTemp = jsonTemp.replace((/'/g), "\"")

console.log(jsonTemp) // {"firstName": 'yeee', "lastName": 'Cai'}]
 

console.log(correntTemp) // [{"firstName": "yeee", "lastName": "Cai"}]

```

