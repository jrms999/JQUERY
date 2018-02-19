$(document).ready(() => {
  
  $('.shoe-details').show();
  
  $('.more-details-button').on('click', event => {
    
  });  
  
  $('.shoe-details li').on('click', event => {
    $(event.currentTarget).addClass('active');
    
    $(event.currentTarget).siblings().removeClass('active')
  });
  ///////////////////////////////////////////
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
    $('.login-button').toggleClass('button-active');
  });

  $('.product-photo').on('mouseenter', () => {
    $(this).addClass('photo-active');
  }).on('mouseleave', function() {
    $(this).removeClass('photo-active');
  });

  $('.menu-button').on('click', () => {
    $('.menu-button').toggleClass('button-active');
    $('.nav-menu').toggleClass('hide');
  });
})


//Within the click event handler on the '.shoe-details li' selector, target the children of the '.shoe-details' elements.
//Use .removeClass() to remove the 'disabled' class from the targeted children.
//When you select a shoe size, this jQuery activates the ADD TO CART button.

$(document).ready(() => {
  
  $('.shoe-details').show();
  
  $('.more-details-button').on('click', event => {
    
  });  
  
  $('.shoe-details li').on('click', event => {
    $(event.currentTarget).addClass('active');
    
    $(event.currentTarget).siblings().removeClass('active')
    
    $('.shoe-details').children().removeClass('disabled')
  });
  ///////////////////////////////////////////
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
    $('.login-button').toggleClass('button-active');
  });

  $('.product-photo').on('mouseenter', () => {
    $(this).addClass('photo-active');
  }).on('mouseleave', function() {
    $(this).removeClass('photo-active');
  });

  $('.menu-button').on('click', () => {
    $('.menu-button').toggleClass('button-active');
    $('.nav-menu').toggleClass('hide');
  });
})

//1.Now, click on multiple shoe sizes for one shoe and notice that they all light up. 
//In order to remove the active class from all of the other shoe sizes, you can utilize .siblings().
//Write another selector for the shoe size selected using $(event.currentTarget). 
//Then, select all of its siblings with .siblings().
//2.Use the .removeClass() method to remove the active class from all of the current target's siblings. 
//You can chain .removeClass() directly onto the .siblings() method.

$(document).ready(() => {
  
  $('.shoe-details').show();
  
  $('.more-details-button').on('click', event => {
    
  });  
  
  $('.shoe-details li').on('click', event => {
    $(event.currentTarget).addClass('active');
  
    $('.shoe-details').children().removeClass('disabled')   
        $(event.currentTarget).siblings().removeClass('active')
  });
  ///////////////////////////////////////////
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
    $('.login-button').toggleClass('button-active');
  });

  $('.product-photo').on('mouseenter', () => {
    $(this).addClass('photo-active');
  }).on('mouseleave', function() {
    $(this).removeClass('photo-active');
  });

  $('.menu-button').on('click', () => {
    $('.menu-button').toggleClass('button-active');
    $('.nav-menu').toggleClass('hide');
  });
})


//1.In the Children exercise, you removed the 'disabled' class from all '.shoe-details' elements when a user clicked a size. 
//When you did that, it activated the ADD TO CART button in every product details card.
//Use the .closest() method to activate only the current product details ADD TO CART button.
//Inside of the '.shoe-details li' click event handler, 
//create a jQuery object with the current element and use .closest() to target the nearest '.shoe-details' element.
//2.//Now that you've targeted the current '.shoe-details' card, 
//use the .children() and .removeClass() methods to activate the current ADD TO CART button (remove the 'disabled' class).
//3.Next, we need to use the .closest() method to target the nearest shoe details element when a user selects a .more-details-button element.
//Inside the '.more-details-button' click event handler's callback function, 
//write another $(event.currentTarget) selector. 
//Then, call the .closest() method on it, and find the closest element with a class of '.product-details'.
//In the next exercise, we will chain a .next() method to this.

$(document).ready(() => {
  
  $('.shoe-details').show();
  
  $('.more-details-button').on('click', event => {
    $(event.currentTarget).closest('.product-details').next().toggle()
  });  
  
  $('.shoe-details li').on('click', event => {
    $(event.currentTarget).addClass('active');
    
    $(event.currentTarget).siblings().removeClass('active')
    
    $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled') 
  });
  ///////////////////////////////////////////
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
    $('.login-button').toggleClass('button-active');
  });

  $('.product-photo').on('mouseenter', () => {
    $(this).addClass('photo-active');
  }).on('mouseleave', function() {
    $(this).removeClass('photo-active');
  });

  $('.menu-button').on('click', () => {
    $('.menu-button').toggleClass('button-active');
    $('.nav-menu').toggleClass('hide');
  });
})


//1.To get the '.shoe-details' element to display when clicking the '.more-details-button', 
//you need to select the element next after the '.product-details' element.
//In a previous exercise, you used .closest() to select '.product-details'.
//Now, chain a .next() method on the .closest() method to select the '.shoe-details' element.
//2.Now that you have the '.shoe-details' selected with logical selectors, 
//chain the .toggle() method on the .next() method you just wrote, so that when clicking the more details button, 
//the '.shoe-details' section becomes visible.

$(document).ready(() => {
  
  $('.shoe-details').show();
  
  $('.more-details-button').on('click', event => {
    $(event.currentTarget).closest('.product-details').next().toggle()
  });  
  
  $('.shoe-details li').on('click', event => {
    $(event.currentTarget).addClass('active');
    
    $(event.currentTarget).siblings().removeClass('active')
    
    $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled') 
  });
  ///////////////////////////////////////////
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
    $('.login-button').toggleClass('button-active');
  });

  $('.product-photo').on('mouseenter', () => {
    $(this).addClass('photo-active');
  }).on('mouseleave', function() {
    $(this).removeClass('photo-active');
  });

  $('.menu-button').on('click', () => {
    $('.menu-button').toggleClass('button-active');
    $('.nav-menu').toggleClass('hide');
  });
})


//1.Let's use .find() to make the arrow in the .more-details-button rotate when it is selected.
//Inside of the .more-details-button click event, create a jQuery object with the current element ($(event.currentTarget)).
//Use the .find() method to find the img inside the current element.
//2.Chain a .toggleClass() method to .find() and add or remove the 'rotate' class.

$(document).ready(() => {
  
  $('.more-details-button').on('click', event => {
    $(event.currentTarget).closest('.product-details').next().toggle();
    
    $(event.currentTarget).find('img').toggleClass('rotate')
  });  
  
  $('.shoe-details li').on('click', event => {
    $(event.currentTarget).addClass('active');
    
    $(event.currentTarget).siblings().removeClass('active')
    
    $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled') 
  });
  ///////////////////////////////////////////
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
    $('.login-button').toggleClass('button-active');
  });

  $('.product-photo').on('mouseenter', () => {
    $(this).addClass('photo-active');
  }).on('mouseleave', function() {
    $(this).removeClass('photo-active');
  });

  $('.menu-button').on('click', () => {
    $('.menu-button').toggleClass('button-active');
    $('.nav-menu').toggleClass('hide');
  });
})






