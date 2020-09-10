[principles](https://github.com/banama/aboutVue/blob/master/vue-observe.md)



when data changed the related DOM change automatically


proxy


Vue2.x MVVM data-binding

Pass a js object to vue instance as data, Object.defineProperty -> getter/setter

deep reverse data, proxy 


1. can't detect new property and delete
 Vue.$set
2. array.length can't be detected
change array
this.$forceUpdate
3. data, performance, foreach

Vue3.0 Proxy ES6


Vue's 
 - [ ] object.defineOwnProperty: setter & getter
