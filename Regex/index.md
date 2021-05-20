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

### Case2
when the api's data attribut is user-id and your form property is userId
```
"userId".replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()
```
```
"{ label: 'xxxx', value: yyy }".replace(/label: (.*?), value: (.*?)/g,"$1-$2") => "{ 'xxxx'-yyy }"
```

### Case 3
 match vue component name
 ```
 "vue-component-35-el-tooltip".match(/\d+-(.*)/gi) => ['35-el-tooltio']
 ```
 
 ### Case 4
 match everthing between the curly brackets
 ```
 /{(.*?)}/
 ```
