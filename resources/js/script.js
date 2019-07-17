/* specify tthat this code can only run after the document has been loaded. */
//inside here is where we put all our code. 
$(document).ready(function() {
    
    /*
    //when we click the h1 element, this is the function that will happen.  $ is the selector of js, to select a css element. It is kinda like dereference, *, in C++, except it addresses a class/object. 
    //as an example, turn the background of the hero text red. 
    $('h1').click(function() {
        //after selecting the h1 object, access its css type; within the bracket, can then select the rule we want to modify. 
        $(this).css('background-color', '#ff0000');
    }) */
    
    
    /* We want sticky navigation to appear once our page hits .js--section-features, using the waypoint plugin.
    @argument direction: detect if user is scrolling down the webpage or scrolling up.
    */
    $('.js--section-features').waypoint(function(direction) {
        //if scrolling down, we want sticky nav to appear
        if (direction == "down") {
            //we do so by adding .sticky, which we've already styled in CSS, as a class to the nav; so in html this'd become <nav class="sticky">, whereas before it was simply <nav>
            $('nav').addClass('sticky');
        }
        //else we want it to disappear
        else {
            $('nav').removeClass('sticky');
        }
        
    }, {
        offset: '60px'
    });
    
    /* When we click on the orange "IM HUNGRY" button... */
    $('.js--scroll-to-plans').click(function () {
        //scrollTo: scroll to a particular place in the html document; in this case, to pricing plans
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top}, 1500);
        });
    
     /* When we click on the ghost "SHOW ME MORE" button... */
    $('.js--scroll-to-start').click(function () {
        //scrollTo: scroll to a particular place in the html document; in this case, to the section right after header.
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top}, 2000);
        });
    
    /* This piece of code enables us to link anchors to site sections. for example, line 58 and line 88 is linked via the 'features' keyword;
    first declare within the anchor, <a href="#targetLocation">; then, assert where it is, such as id="targetLocation" elsewhere. */
    
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    /* Animations when we scroll to that section */
    $('.js--waypoint-1').waypoint(function(direction) {
        $('.js--waypoint-1').addClass('animated fadeIn');
    }, {
        offset: '60%' /* we want the fadein to occur not when the icons hit the top of page, but earlier than that; so offset triggers this animation more above on the page */
    })
    
     $('.js--waypoint-2').waypoint(function(direction) {
        $('.js--waypoint-2').addClass('animated fadeInUp');
         
    }, {
        offset: '50%' /* we want the bounce to occur not when the icons hit the top of page, but earlier than that; so offset triggers this animation more above on the page */
    })
    
     $('.js--waypoint-3').waypoint(function(direction) {
        $('.js--waypoint-3').addClass('animated fadeIn');
    }, {
        offset: '50%' /* we want the fadein to occur not when the icons hit the top of page, but earlier than that; so offset triggers this animation more above on the page */
    })
    
    $('.js--waypoint-4').waypoint(function(direction) {
        $('.js--waypoint-4').addClass('animated pulse');
    }, {
        offset: '40%' /* we want the fadein to occur not when the icons hit the top of page, but earlier than that; so offset triggers this animation more above on the page */
    })
    
     $('.js--waypoint-hero').waypoint(function(direction) {
        $('.js--waypoint-hero').addClass('animated fadeIn');
    }, {
        offset: '40%' /* we want the fadein to occur not when the icons hit the top of page, but earlier than that; so offset triggers this animation more above on the page */
    })
    
    $('.js--scroll-to-plans').waypoint(function(direction) {
        $('.js--scroll-to-plans').addClass('animated fadeIn');
    }, {
        offset: '100%' /* we want the fadein to occur not when the icons hit the top of page, but earlier than that; so offset triggers this animation more above on the page */
    })
    
    $('.js--scroll-to-start').waypoint(function(direction) {
        $('.js--scroll-to-start').addClass('animated fadeIn');
    }, {
        offset: '100%' /* we want the fadein to occur not when the icons hit the top of page, but earlier than that; so offset triggers this animation more above on the page */
    })    
    
    $('.js--waypoint-nav').waypoint(function(direction) {
        $('.js--waypoint-nav').addClass('animated fadeInDown');
    }, {
        offset: '20%' /* we want the fadein to occur not when the icons hit the top of page, but earlier than that; so offset triggers this animation more above on the page */
    })   
    
    /* Mobile sticky navigation */
    $('.js--nav-icon').click(function() {
         //this variable is here to save on writing the same code over and over
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round'); //exchange the icons
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round')
        }
        //this method slides open and close a box: take 200 milliseconds.
        nav.slideToggle(10);
                             
     })
    
});

