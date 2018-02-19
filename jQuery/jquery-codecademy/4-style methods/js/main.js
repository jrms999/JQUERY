//.css()
//To modify CSS properties of an element, jQuery provides a method called .css(). 
//This method accepts an argument for a CSS property name, and a corresponding CSS value.
//It's syntax looks like:
//$('.example-class').css('color', '#FFFFFF');
//Let's break the example above into two pieces:
//We call the .css() method on .example-class. The first argument is the CSS property we want to change. 
//In this case, that's 'color'.
//The second argument specifies the new value for the given property in the first argument. 
//In this case, the .css() method changes the color of .example-class elements to '#FFFFFF'.
//Notice, both of the inputs to the .css() method are strings.
$(document).ready(() => {
 
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  })
  
}); 


//In main.js there is a mouse enter event listener on the .menu-button element. 
//Inside this callback function, use the .css() method to set the .menu-button element's color value to #C3FF00.
$(document).ready(() => {
 
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').css('color', '#C3FF00')
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css('color', '#EFEFEF')
  })
  
}); 



//Modify the .css() methods you wrote in the last exercise to accept one object.
//On mouse enter, the object should change the 'color' to '#C3FF00', and should change the backgroundColor to '#535353'.
//On mouse leave, the object should change the 'color' to '#EFEFEF', and should change the backgroundColor to '#303030'.

$(document).ready(() => {
 
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').css({
     color: '#C3FF00',
     backgroundColor: '#535353'
    })
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css({
      color: '#EFEFEF',
      backgroundColor: '#303030'
    })
  })
  
}); 


//1.Inside of the menu button's mouse enter callback function, 
//change the fontSize of the .menu-button element to 24px over the course of 200 milliseconds.
//2.Inside of the navigation menu's mouse leave callback function, 
//change the fontSize of the .menu-button element to 18px over the course of 200 milliseconds.

$(document).ready(() => {
 
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').css({
     color: '#C3FF00',
     backgroundColor: '#535353'
    })
    
    $('.menu-button').animate({
      fontSize: '24px'
    }, 200)
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css({
      color: '#EFEFEF',
      backgroundColor: '#303030'
    })
    
    $('.menu-button').animate({
      fontSize: '18px'
    }, 200)
  })
  
}); 


//Instead of changing the text color and background color with the .css() method, 
//replace the code in the menu button mouse leave handler with the .addClass() method.
//If you navigate to css/styles.css, 
//there's a class named .button-active, which defines the text color and background color of an element. 
//Use the .addClass() method to add button-active to the .menu-button element when it's moused over.

$(document).ready(() => {
 
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').addClass('button-active')
    
    $('.menu-button').animate({
      fontSize: '24px'
    }, 200)
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css({
      color: '#EFEFEF',
      backgroundColor: '#303030'
    })
    
    $('.menu-button').animate({
      fontSize: '18px'
    }, 200)
  })
  
}); 


//Currently, the navigation menu is assigned a class called hide that sets its display to none.
//Use the .removeClass() method to show the navigation menu when a user's mouse enters the menu button's area.

$(document).ready(() => {
 
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').addClass('button-active');
    $('.nav-menu').removeClass('hide');
    
    $('.menu-button').animate({
      fontSize: '24px'
    }, 200)
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.menu-button').removeClass('button-active')
    
    $('.menu-button').animate({
      fontSize: '18px'
    }, 200)
  })
  
}); 


//1.In main.js we changed the mouse enter event to a click event so you can see the changes that are caused by the .toggleClass() method below.
//Let's use .toggleClass() to add or remove the hide class from the navigation menu element.
//2.Use .toggleClass() to add and remove the button-active class from the menu button.

$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').show();
  });
  
  $('.menu-button').on('click', () => {
    $('.nav-menu').toggleClass('hide')
    $('.menu-button').toggleClass('button-active')
  })
}); 





