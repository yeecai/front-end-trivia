
```mermaid
sequenceDiagram
    a-->>b: a
    b->>a: ok
    a-x b:hmm
    Note right of b: hhhh
 
```
 
###flowchat

```flow
st=>start: 开始
e=>end: 结束
op=>operation: 我的操作
cond=>condition: 确认？

st->op->cond
cond(yes)->e
cond(no)->op
```
