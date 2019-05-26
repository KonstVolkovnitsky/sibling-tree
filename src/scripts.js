'use strict';


  document.querySelector('#tree').addEventListener('click', function(event) {
    if (event.target.tagName === 'SPAN' && event.target.nextElementSibling !== null) {
      event.target.nextElementSibling.classList.toggle('hidden');
    }
  });
