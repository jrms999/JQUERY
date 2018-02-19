// Introduction
// jQuery Effects are a group of methods in the jQuery library that are responsible for adding dynamic behavior to websites. 
// You may have seen many of these effects on modern websites without even realizing it. 
// For example, you are seeing jQuery Effects in action 
//when drop-down menus slide into place or a warning message appears after entering an incorrect password.
//While adding dynamic behavior is possible using only JavaScript, the code to do so is somewhat long and confusing. 
//The beauty of jQuery is how one or two lines of jQuery can replace long JavaScript code blocks.
// In this course, you'll learn how to make elements appear and disappear, fade in and out, and slide around the page. 
//Let's get started!

$(document).ready(() => {
  $('.menu-button').on('click',() => {
    $('#nav-dropdown').slideToggle('slow');
  });
	
  $(".login-button").on("click", () => {
    $(".login-form").slideToggle();
  });
  
  $(".arrow-one").on("click", () => {
    $(".shoe-details-one").toggle();
  });
  
  $(".sizes-one").on("click", () => {
    $(".text-one").fadeIn(1000);
  });
  
  $(".arrow-two").on("click", () => {
    $(".shoe-details-two").toggle();
  });
  
  $(".sizes-two").on("click", () => {
    $(".text-two").fadeIn();
  });
  
  $(".arrow-three").on("click", () => {
    $(".shoe-details-three").toggle();
  });
  
  $(".sizes-three").on("click", () => {
    $(".text-three").fadeIn(1000);
  });
  
});

//In this lesson, you will create a table that shows off nine jQuery effects.
//Right now, there is one button in our table. Inside the .ready() callback function, 
//write an event handler that is triggered when a button with the class hide-button is clicked. 
//For now, leave the callback function empty.

$(document).ready(() => {
  $('.hide-button').on('click', () => {
  $('.shoe-information').hide();
});
});

//In the callback function, target the image that has a class first-image
//Call the .hide() method on the targeted element. Test your button!

$(document).ready(() => {
  $('.hide-button').on('click', () => {
    $('.first-image').hide()
  })
});

//We've added a second button to our chart and set up an event handler for it. 
//In its callback function, target the same image as last time. 
//The image is of the class first-image. Call the .show() method on it.
//Once you've run the code, click the "show" button to see it in action.

$(document).ready(() => {
  $('.hide-button').on('click', () => {
    $('.first-image').hide();
  });
  
  $('.show-button').on('click', () => {
    $('.first-image').show()
  });
  
});


//We've now added a third button to our chart and set up an event handler for it. 
//Inside the event handler's callback function, target the image with the class first-image and call the .toggle() method on it. 
//Test all three of your buttons!
//Notice that the Toggle button will produce an effect no matter what!

$(document).ready(() => {
  $('.hide-button').on('click', () => {
    $('.first-image').hide();
  });
  
  $('.show-button').on('click', () => {
    $('.first-image').show();
  });
  
  $('.toggle-button').on('click', () => {
    $('.first-image').toggle()
  });
  
});


//We've added two new buttons and a new image to our table. 
//We've also given you the event handlers for these new buttons. 
//In the first new event handler's callback function, select the image of class fade-image and call .fadeOut() on it.
//Give .fadeOut() an argument to make the animation take 500 milliseconds.
//Test the Fade Out button!

//In the second event handler's callback function, select the same image and call .fadeIn() on it. 
//Let's make the image appear slower than it disappears. Give .fadeIn() a parameter of 4000.
//Try out the Fade In button. You should notice that the image fades in much slower!

$(document).ready(() => {
  $('.hide-button').on('click', () => {
    $('.first-image').hide();
  });
  
  $('.show-button').on('click', () => {
    $('.first-image').show();
  });
  
  $('.toggle-button').on('click', () => {
    $('.first-image').toggle();
  });
  
  $('.fade-out-button').on('click', () => {
    $('.fade-image').fadeOut(500)
  });
  
  $('.fade-in-button').on('click', () => {
    $('.fade-image').fadeIn(4000)
  });
  
});

//Inside the event handler connected to the button of class fade-toggle-button, 
//target the image of class fade-image and call .fadeToggle() on it. 
//Take a look at the jQuery documentation to see how to use a string as an argument. 
//Make the image fade fast. Try all three of your fade buttons!
//Notice that the fade toggle button always produces an effect regardless of the current state of the element.

$(document).ready(() => {
  $('.hide-button').on('click', () => {
    $('.first-image').hide();
  });
  
  $('.show-button').on('click', () => {
    $('.first-image').show();
  });
  
  $('.toggle-button').on('click', () => {
    $('.first-image').toggle();
  });
  
  $('.fade-out-button').on('click', () => {
    $('.fade-image').fadeOut(500);
  });
  
  $('.fade-in-button').on('click', () => {
    $('.fade-image').fadeIn(4000);
  });
  
  $('.fade-toggle-button').on('click', () => {
    $('.fade-image').fadeToggle('fast');
  });
});


//We've added a third image and three more buttons to our chart. 
//We're going to make each button apply a different slide effect to that image. 
//Inside the first new event handler, target the third image by its class slide-image and call the .slideUp() method on it. 
//Let's make it slide up really quickly; use 100 as the parameter. Test that button!


//For the event handler connected to the button of class down-button, call .slideDown() on the .slide-image element. 
//Remember to target the image based on its class!
//Let's have the image slide down slowly. Use 'slow' as the parameter.

//Finally, inside the final event handler's callback function, call .slideToggle() on the image of class slide-image. 
//For this method, don't give it any argument. Remember, the argument is optional! 
//If you don't enter anything, it will default to 400. Test all three of your buttons.

$(document).ready(() => {
  $('.hide-button').on('click', () => {
    $('.first-image').hide();
  });
  
  $('.show-button').on('click', () => {
    $('.first-image').show();
  });
  
  $('.toggle-button').on('click', () => {
    $('.first-image').toggle();
  });
  
  $('.fade-out-button').on('click', () => {
    $('.fade-image').fadeOut(500);
  });
  
  $('.fade-in-button').on('click', () => {
    $('.fade-image').fadeIn(4000);
  });
  
  $('.fade-toggle-button').on('click', () => {
    $('.fade-image').fadeToggle();
  });
  
  $('.up-button').on('click', () => {
    $('.slide-image').slideUp(100);
  });
  
  $('.down-button').on('click', () => {
    $('.slide-image').slideDown('slow')
  });
  
  $('.slide-toggle-button').on('click', () => {
    $('.slide-image').slideToggle(400)
  });
  
});






