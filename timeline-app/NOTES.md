# Things learned

* Transition delay one-way can be implemented by first giving an element a transition-delay property with a set time and then on hover (or whatever event), setting transition-delay to 0 will cause it to delay on one way.  In this case, on exit from hover

```css
.img-container {
  width: 300px;
  height: 300px;
  overflow: hidden;
  transition: transform 1.5s ease;
  transition-delay: .5s;
}

.img-container:hover {
  transform: scale(1.3, 1.8);
  transition-delay: 0s;
}
```

* Filter grayscale - https://developer.mozilla.org/en-US/docs/Web/CSS/filter

