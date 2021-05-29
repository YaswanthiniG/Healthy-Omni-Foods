/* Fot sticky navigation    */

$(document).ready(function(){  
    $('.js--section-feature').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
            
        }else{
            $('nav').removeClass('sticky');    
        }       
    },{
     offset: '60px;'      
    });
    
/* Scroll on buttons    */ 
    
    /* I am hungry    */ 
   $('.js--scroll-to-plans').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
       
   });
        /* shome me more    */
    $('.js--scroll-to-start').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-feature').offset().top}, 1000);
       
   });
    
    
    /* navigation scroll     */
    
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
   });
});
  
/* animations on scroll     */
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
        
        
    });
    
    
});