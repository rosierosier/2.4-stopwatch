(function(){
  'use strict';

  var myStartButton;
  console.log(document);
  myStartButton = document.querySelector('.start');
  console.log(myStartButton);

  function startButtonHandler(event) {
    console.log('I was clicked!');
    var startButton = document.querySelector('.start');
    // startButton.style.backgroundColor = 'red';
    startButton.textContent = 'Stop';
    //alert(startButton.textContent);

    var pageTitle = document.querySelector('.page-title');
    console.log(pageTitle.textContent);
    pageTitle.textContent = 'Stopwatch';
    console.log(pageTitle.textContent);
  }

  myStartButton.addEventListener('click', startButtonHandler);

}())
