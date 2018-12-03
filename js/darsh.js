$(document).ready(function () {

        var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)|(Windows)/i);

        if(isMobile)
        {
          console.log("mobile");
          $("#home,#purdue,#columbia,#internships,#hulu,#contact").css({
            'background-size': 'auto !important',
          });
          console.log($("#home").css('background-size'));
        }
        else
        {
          console.log("desktop");
        }

        var $window = $(window);       

       $("div#menuitems").fadeIn('fast');       

       $('div[data-type="background"]').each(function(){

         var $bgobj = $(this); // assigning the object
         $bgobj.css({'height':$window.height().toString()});
                        
          $(window).scroll(function() 
          {   
            var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));                       
            var coords = '50% '+ yPos + 'px';

            if(!isMobile)
            {
              $bgobj.css({ 
                 backgroundPosition: coords,
                 '-webkit-background-size': 'cover',
                 '-moz-background-size': 'cover',
                 '-o-background-size': 'cover',
                 'background-size': 'cover'
             }); 
            }
            else
            {
              $("#home,#purdue,#columbia,#internships,#hulu,#contact").css({
                'background-size': 'auto auto !important',
                });
            }
            
          });
        }); 
        
        $('div[data-type="background"]').vegas('overlay', {
            src:'lib/vegas/overlays/02.png',
            opacity: 0.25,
        });

        $('a').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              //console.log(target);

              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top
                }, 1000);

                return false;
              }
            }
          });

        $("#home,#purdue,#columbia,#internships,#hulu,#contact").waypoint(function() {
           // console.log("p[name='"+$(this).attr('id')+"']");
           $("div#menuitems p").css({'text-decoration':'none'});
          $("p[name='"+$(this).attr('id')+"']").css({'text-decoration':'underline'});
        });

          $("p.describe,#hideText").hover(function() {
            $(this).css({'cursor':'pointer'});
          }, function() {
            $(this).css({'cursor':'default'});
          });

          $("p.describe").click(function() {
            var id = $(this).attr('id');
            $("a#"+id).trigger('click');
          });
    });  