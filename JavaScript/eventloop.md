1.GUI thread, for render
2. JS enginne thread
3. Event thread
4. timer thread
5. ajax thread
- [x] why JS single thread:
  1. cus back then broswer is single threaded
  2. it was more complex to code with lock, if there's no lock, result can be unpredictable
  
- [x] GUI & JS thread excluded each other
