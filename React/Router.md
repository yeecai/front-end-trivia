BroswerRouter vs HashRouter

### BroswerRouter

It uses history API,  vue-router's push/replace/go() imimates History API
- history.pushState()
 - [ ] cus url 
- 404 problem
- need broswer support history API

### HashROuter

The hash part of url will be actually igorned by server, and it's handled as parameter by the client side.
- window.hash
- window.addEventListener('hashchange')
- full support


### history API
- pushState()
- replaceState()
- go(1/-1/0)()
- back() back(2)
