function ready(callbackFunc) {
  if (document.readyState !== 'loading') {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener('DOMContentLoaded', callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'complete') {
        callbackFunc();
      }
    });
  }
}

ready(function() {
  // newDiv() {
  //   let div = document.createElement('div');
  //   div.setAttribute('class', )
  // }

  nheads = (text) => {
    let head = document.createElement('h1');
    let heading = document.createTextNode(text);
    head.appendChild(heading);
    //document.body.appendChild(head);
    return(head); //returns the value of the created element
  };

  ndivs = (content) => {
    let div = document.createElement('div');
    let contents = document.createTextNode(content);
    div.appendChild(contents);
    //document.body.appendChild(div);
  };

  main = () => document.querySelector('#batman'); //function of retreiving batman
  main().className = 'main'; //added the main class
  main().insertAdjacentElement('afterbegin', nheads("Batman")).className = "hero"; //inserts new element within element, at the front
  main().insertAdjacentElement('beforeend', nheads("Robin")).className = "sidekick"; //inserts new element within target element, after it's last child
  main().insertAdjacentElement('beforeend', nheads("Wonder Woman")).className = "ladypimp"; //inserts new element within target element, after it's last child
  console.log(main());
});