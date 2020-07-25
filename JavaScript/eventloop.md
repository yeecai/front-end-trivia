


1. GUI thread, for render
2. JS enginne thread
3. Event thread
4. timer thread
5. ajax thread
- [x] why JS single thread:
  1. cus back then broswer is single threaded
  2. it was more complex to code with lock, if there's no lock, result can be unpredictable in multip-thread
  
- [x] why GUI & JS thread excludes each other


Difference beatween tasks and micro-tasks:
1. tasks in task queue won't be executed till next event-loop, even it's added at the beginning of the current loop.
2. microtask queue can add new micros-tasks in middle of one event-loop and the new ones will be executed too, before the end of same event-loop

The problem of JavaScript being single-threaded:

the problem of singe-threaded, ui and code in same thread, same event loop, bug or time-consuming operations can block the ui, the website is not responsing, it even then stall the broswer.

The fixes: 
1. multip-thread(web workers), 
2. async(promise)
3. micro task(micro-async), finer and more flexiable and faster, it's like promise if faster than setTimeout(..., 0)

[In depth: Microtasks and the JavaScript runtime environment](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)
[「前端进阶」从多线程到Event Loop全面梳理](https://juejin.im/post/5d5b4c2df265da03dd3d73e5#heading-15)
