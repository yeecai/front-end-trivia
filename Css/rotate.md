This is a way to rotate the webpage by default, but the right side will by covered by the browser's navigation bar.

```
@media screen and (min-width: 320px) and (max-width: 1024px) and (orientation: portrait) {
  html {
    transform: rotate(-90deg);
    transform-origin: left top;
    width: 100vh;
    height: 100vw;
    overflow: hidden;
    position: absolute;
    top: 100%;
    left: 0;
    bottom: 0;
  }
}
```
