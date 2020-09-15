### To understand repaint n reflow


### First understand browsers how to paint 


- [ ] [draw a markdown chart here](https://blog.usejournal.com/what-the-heck-is-repaint-and-reflow-in-the-browser-b2d0fb980c08)
```flowchart

HTML parse -> DOM tree
                                -> Render tree -> Painting
css parser -> Yes, CSSOM tree


```
---

any operation that cause the position change(like font size become bigger will stretch it's surrounding)  will trigger reflow, and reflow will trigger repaint, but not vice versa.

### Reflow
re-render part or all document:(change the whole render tree)

- more expensive: might cause reflowing it's parent 
- render at the 1st time
- window resize
- content size change
- text font size change
- append or remove visible DOM element


### Repaint
When only the style changed but not the position, it will repaint the style of the element:(only change the cssom).

- Changing the visibility
- Changing the outline
- Changing background

tips:

- animation element use display: absolute otherwise trigger re-flowing frequently 