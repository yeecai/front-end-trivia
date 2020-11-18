### Horizontally

The methods include flexbox, absolute position with 50% offset and margin auto:

- [x] display flex; margin: 0 auto/ justify-content: center; // flexbox is always the simplest solution;

- [x] margin: 0 auto; width: fit-content; //use a parent div as wrapper with margin auto and width: fit-content, the child will be centered;
- display: block; width; margin: 0 auto; //
- [x] display: inline-block; parent: text-align: center(optional);
- [x] position: absolute; left or right : 50%; transform: translateX(-50 or 50%) or calc(50% - half width).

### Vertically

flexbox, table-cell:

1. position absolute + 50% offset;

```scss
.logo {
  position: absolute;
  top: calc(50% - half the height);
}
```

2. display: table-cell; vertical-align: middle;

```scss
.verticalAlign {
  display: table-cell;
  vertical-align: middle;
  margin-top: 20px;
  background-color: #767;
  height: 200px;
  width: 50vw;
  .innerBox {
    height: 40px;
    width: 40px;
    background-color: #547;
  }
}
```

3. display: flex; align-items: center;

4. display:flex; margin:auto 0.

### H & V

flexbox, absolute position with offset:

- [x] display: flex; (align-items: center; justify-content: center;)/ margin: auto;
- [x] postion: absolute; left and top 50%; margin: -half the height, 0, -half the width,0.
