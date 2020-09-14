We need localStorage or sessionStorage etc to do data persistance


#### localStorage vs SessionStorage


Can only save Strings, not Objects, arrays. In Application

***Storage can only support newer broser, read only the client side

LocalStorage:
- any window
 - 10MB
 - H5
- last forever

 Sesssion Storage:
 - same window
 - 5MB
 - H5
 - same with local but close on tab

 Cookies:
 - h4 friendily
 - any window
 - 4kb
 - Mannual
 - client n server
 - expire on tab closed by default 
 - document.cookie will read all cookies