(function titleScroller(text) {
  document.title = text;
  setTimeout(function () {
    titleScroller(text.substr(1) + text.substr(0, 1)); // speed
  }, 325);  
}("text"));
