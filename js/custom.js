'use strict';

$( function() {
    //zmienne
    var slideCount = $(".single-slide").length;
    var slideShow = $(".slide-show");
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;
    
    function slide(newSlideIndex) {
        if(newSlideIndex < 0 || newSlideIndex >= slideCount) {
           return; 
        }
        
        var marginLeft = (newSlideIndex * (-100)) + "%";
        slideShow.animate({"margin-left": marginLeft}, 800, function(){
            slideIndex = newSlideIndex;
        });
    }
    
    
    //szerokość kontenera
    slideShow.css("width", slideCount * 100 + "%");
    console.log(slideCount);
    
    
    /* szerokość i położenie jednego slide */
    
//   można zrobić z find $("slide-show")find
       $(".single-slide").each(function(index) {
        $(this).css({"width": slideWidth + "%", "marginLeft": index * slideWidth + "%"})
    });
    
    
    
    //kliknięcia w strzałki
    $(".prev-slide").on("click", function() {
         slide(slideIndex - 1);
    });
    

    
    $(".next-slide").on("click", function() {
       slide(slideIndex + 1);
        });
       
    });
    
    


