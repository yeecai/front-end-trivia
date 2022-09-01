### https://zh.javascript.info/proxy
### https://www.cnblogs.com/mengff/p/15817513.html
const handlers = Symbol('handlers')

function makeObservable(target) {
    /* 你的代码 */
    target[handlers] = []
    target.observe=function(handler) {
        this[handlers].push(handler)
    }
    return new Proxy(target, {
        // save handler
        set(target, prop, value, receiver) {
            const success = Reflect.set(...arguments)
            if(success) {
                target[handlers].forEach(handler => handler(prop, value))
            }
            return success
        }
    })
  }
  
  let user = {};
  user = makeObservable(user);
  
  user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
  });
  
  user.name = "John"; 
