//Replace the ____ in the .on() method with click.
//Run the code and click the login button.
//Nice work, the login button now listens for a click event. 
//The callback function in the event handler displays a login form when you click the button.

$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').show();
  })
  
  
}); 

//on mouseenter function = 
//Inside of the .ready() callback function, create an event handler that targets the element with class menu-button. 
//The event handler should listen for a mouse enter event.
//Pass the method an empty callback function.
//Inside of the callback function, use the .show() method to display the .nav-menu element.

$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').show();
  });
  

  $('.menu-button').on('mouseenter', () =>{
    $('.nav-menu').show()
  })
}); 


//mouse-leave function = 
//In the ready callback function, target the .nav-menu element, 
//and add an event handler with a mouseleave event listener and empty callback function.
//Inside the empty callback function, use the .hide() method to hide the .nav-menu element when a user's mouse leaves the navigation menu.

$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').show();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show()
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  })

  
}); 

//chaining events = 
//1.Target the .product-photo element and add an event handler that listens for a mouseenter event. 
//For now, leave the callback function empty.
//2.We want to make the product photos zoom in when someone hovers over them. 
//To do this, you'll need to add a CSS class to the product photo elements. You can add a class with the following code:
//$('.example-class').addClass('photo-active');
//Adjust the code above to select the '.product-photo' elements, and add the class 'photo-active' (without a period). 
//While you may not know .addClass() yet, the syntax should look like other jQuery methods you've seen.
//When you mouse over a product photo, the photo gets larger.
//You can learn more about CSS methods in our CSS methods course.
//3.Chain an event handler to the mouseenter event handler, but this time with a mouseleave event listener.
//Inside the mouseleave event's callback function, we want to remove the photo-active class. 
//To do this, you can use code like this:
//$('.example-class').removeClass('photo-active');
//Use the syntax above to remove the class photo-active from the '.product-photo' elements.

$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').show();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show()
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  })
  
  
  $('.product-photo').on('mouseenter', () => {
    $('.product-photo').addClass('photo-active')
  }).on('mouseleave', () => {
    $('.product-photo').removeClass('photo-active')
  })
  
}); 


//currentTarget function = 
//Add event as an argument to your .product-photo callback functions.
//Inside the callback functions, use event.currentTarget to make only one image at a time 
//zoom in and zoom out when your mouse enters and leaves.

$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').show();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show()
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  })
  
  $('.product-photo').on('mouseenter', (event) => {
    $(event.currentTarget).addClass('photo-active')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('photo-active')
  })
  
  
}); 






