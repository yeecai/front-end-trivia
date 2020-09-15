9 ways to request resources from different origins



same protocol & domain & port

https: domain.com/8080



limited by same origin:

- Cookie, LocalStorage, IndexDB

-  DOM, JS  objects

- ajax request 

Besides, fine to request images, css, js etc. static files(except  iconfont(eot/otf/ttf/woff/svg) files).

### What is same-origins strategies

1. JSONP: <script src: targe.com /> 

2. CORS

3. nginx proxy_table:

4. node.js middleware, same with nginx proxy

5. vue+ webpack+webpack-dev-server: webpack.config.js

   module.exports = {

   ​	proxy:[{

   ```javascript
   target:xxx.com
   ```

   ​	}]

   }

   ----those I haven't tried yet but good to know-----

6. postMessage: iframe

7. websocket

8. iframe:

   1. document.domain:  document.domain: 'domain.com', window.parent.varA
   2. location.hash: onhaschange => window.parant.parentonCallback
   3. window.name
