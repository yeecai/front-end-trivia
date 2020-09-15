### CRUD

- document.createElement('div')
- document.createTextNode('hello world')

### R

- document.getElementById('id')
- document.getElementByClassName('classname')
- document.getElementsByTagName('tagname')
- document.querySelector('.classname')
- document.querySelectorAll('div.classname1, div.orclassname2')

- let parent = node.parentElement
- ... .parentNode
- let nodes = node.children
- let child = node.getElement...
- let child = node.firstElementChild
- let child = node.lastElementChild
- let sibling = node.nextElementSibling
- let sibling = node.lastElementSibling


### UD
- node.appendChild(child)
- node.remoteChild(child)
- node.replaceChild(old, new)
- node.insertBefore(newChild, whichChildBefore)

### Attributes

- let attrs = node.attributes;
- let attr = node.getAttribute('class') / node.setAttribute('class', 'something')

- node.hasAttribute('class')
- node.removeAttribute('class')
- node.hasAttributes()


Q:
e.g. ```<div> content <br/> </div>```
innerHTML: ```content <br/>```
outerHTML: ```<div> content <br/> </div>```
innerText: content;
outerText: content ;

Difference between inner and outText is that outText includes the tags.



###  Capturing and bubbling

capturing -> target -> bubbling

- preventDefault
- stopPropagation // stop bubbling
- currentTarget


[reference](https://harttle.land/2015/10/01/javascript-dom-api.html)