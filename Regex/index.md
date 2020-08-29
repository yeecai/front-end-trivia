transfer irregular object-like string into JSONlike string then, use JSON.parse to turn it into object


```
let jsonTemp = yourJson.replace((/([\w+])(:)/g), "\"$1\"$2")
let correctTemp = jsonTemp.replace((/'/g, """)
```

e.g. "[{firstName: 'yeee', lastName: 'Cai'}]"
