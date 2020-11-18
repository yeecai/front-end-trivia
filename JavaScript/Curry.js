// 函数咖喱化
const addBase = (a, b) => {
    return a + b
}
const currying = function(fn, initVal){
    const fns = function(...args){
        const func = function(...args2) {
            return fns.call(this, ...args, ...args2)
        }
        func.toString = () => {
            return args.reduce(fn, initVal)
        }
        return func;
    }
    return fns
}

const add = currying(addBase, 0)

console.log(add(1)(2)(1,2));

// fn的tostring字段引用等号右侧函数
// Console 调用toString
