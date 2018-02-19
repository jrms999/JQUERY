// cut 12 lines of code from vanilla javascript down to 3 //
// so instead of: //
// const login = document.getElementById('login');
// const loginMenu = document.getElementById('loginMenu');
// login.addEventListener('click', () => {
//  if(loginMenu.style.display === 'none'){
//    loginMenu.style.display = 'inline';
//  } else {
//    loginMenu.style.display = 'none';
//  }
// });
// we can use: //

$('.login-button').on('click', () => {
  $('.login-form').toggle();
});

// In main.js add a callback function that executes when the DOM is finished rendering.
//$(document).ready(() => {
//});


// We have several thumbnail images with a class of 'product-photo', 
// but they don't appear in the site because their display property is set to none in style.css . 
//Let's start by using jQuery to target every '.product-photo'.
$(document).ready(() => {
  $('.product-photo').show()
});

// Inside our ready callback function in the main.js file, use jQuery to select the #nav-dropdown element.
$(document).ready(() => {
$('#nav-dropdown').hide();

});

// 1.In the .ready() callback function in main.js, delete $('#nav-dropdown').hide().
//2.In the same place, create a variable called $navDropdown and store the '#nav-dropdown' jQuery object inside it.

$(document).ready(() => {
  const $navDropdown = $('#nav-dropdown')
  $navDropdown.hide()
});


//The .ready() callback function in main.js contains variables for the menu button in the navigation bar 
//(.menu-button) and the dropdown menu (#nav-dropdown).
//Call the .on() method on the $menuButton variable with the first parameter equal to 'click' and the second parameter 
// as an empty callback function.

$(document).ready(() => {
  const $menuButton = $('.menu-button');
  const $navDropdown = $('#nav-dropdown');
$('#login').on('click', () => {
  $loginForm.show();
})
})

//In main.js, we added another .on() callback function, this time on the $navDropdown object.
// We passed it 'mouseleave' with a callback function that hides the $navDropdown object. 
//Before you run the code, read through it and predict the behavior this code causes in the web page.
// When you're ready, run the code.

$(document).ready(() => {
  const $menuButton = $('.menu-button');
  const $navDropdown = $('#nav-dropdown');

  $menuButton.on('click', () => {
    $navDropdown.show();
  })
  
  $navDropdown.on('mouseleave', () => {
    $navDropdown.hide();
  })
})





