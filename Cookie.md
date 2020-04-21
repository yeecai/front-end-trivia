### Cookie or localStorage

4KB vs 5MB is the major difference




[fetch can't receive cookie](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

The back-end need me to res.headers.get('set-cookie'),  then use the cookie to do other modifation

I tried     
       ```
          mode: 'cors',
          credentials: 'include', 
        ```
        
        
but none of above works, then I realized we are dealing a cross-site cookie!
