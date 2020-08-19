//数组去重

1. [...new Set(arr)]

2. for + for
3. sort
4. for + indexOf / includes
    ```
    forEach(item => {
        if(!arr.includes(item)) {
            arr.push(item)
        }

        //or 
        if(arr.indexOf(item) === -1) {
            arr.push(item)
        }
    })

    ```
5. Map
   ```
    forEach( item => {
        if(map.has(item)){
            map.set(item, true) //duplicate
        }  else {
            map.set(item, false) // only once
            array.push(item)
        }
        return array;
    })
    ```
6. reduce + includes
    ``` 
    arr.reduce((pre, cur) => pre.includes(cur) ? prev : [...prev, cur], [])
    ```

7. filter + indexOf

    ``` arr.filter((item, index, arr) => { arr.indexOf(item, 0) === index })```

8. filter + obj.hasOwnProperty

    ``` 
    arr.filter((item, index, arr) => { 
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true) 
    })
    ```
[Reference](https://segmentfault.com/a/1190000016418021)
