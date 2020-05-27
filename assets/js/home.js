if ('scrollRestoration' in history) {
  // Back off, browser, I got this...
  history.scrollRestoration = 'manual';
}

// $(".horizontal-scroll").wrapInner("<table cellspacing='0'><tr>");
// $(".panel").wrap("<td></td>");
// $("body").mousewheel(function(event, delta) {
//   this.scrollLeft -= delta * 30;
//   event.preventDefault();
// });