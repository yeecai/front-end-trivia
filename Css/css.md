### Position: absolute vs relative vs fixed


1. static is the default one aka normal position, according to where it is in the html file.

2. fixed at left right top bottom of the current window

3. relative is relative to static based on change of 'left;right;..'

4. absolute is relative to the nearest positioned ancestor(if there's no absolute ancester, will reverse to <html>)

5. Sticky: sticky to the bottom of screen, like sticky footer


### px, em, rem, vw, wh

1. em, font-size, one em equals to parent's font-size, by default often as browser's 16px, it got a problem as compounding
2. rem values is relative to root HTML so no compounding [ref](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)

### Block, inline, inline-block
 1. Block: one element one line
 i.g. ```<div>```
 2. inline, can't change size(width, height, padding), same line with other inline elements.
 i.g. ```<span>```
 3. inline-block: still inline but can set width, height, padding etc. i.g. ```<img> <input>```
 
 ### Semantic tag
 1. Good for search engine to take snapshot
 2. Good for render the content ?

### Visibility:hidden vs display:none vs opacity:0
1. display: none will destroy element, cause repaint;
2. visibility:hidden will hide the element but hold the same space;
3. opacity will be transparent and hold all the event.

- [ ] the process of repainting of broswer
