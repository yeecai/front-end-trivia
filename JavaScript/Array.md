//数组去重

// es6
1. [...new Set(arr)]
//es5
2. for + for + splice
3. sort + new Array + for
4. for + new Array + indexOf / includes
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
5. Map : foreach 
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

