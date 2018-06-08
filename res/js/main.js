/* ---- Main js ----- */

;(function()
{
    "use strict";

    var Main = (function()
    {
        var CONSTANTS = 
        {
            ID_SELECTORS:
            {
                "div1": "#div1",
                "div2": "#div2"
            },
            CLASS_SELECTORS:
            {
                "singleItem": ".single-item"
            },
            URLS:
            {
                
            }
        }

        return {
            main: function()
            {
                $(document).foundation();
                if ($(CONSTANTS.CLASS_SELECTORS.singleItem).length)
                    this.initaliseSlider();

            },
            initaliseSlider: function()
            {
                var $this = this;
                $(CONSTANTS.CLASS_SELECTORS.singleItem).slick({
                    dots: false,
                    nextArrow: '<i class="fa fa-arrow-right"></i>',
                    prevArrow: '<i class="fa fa-arrow-left"></i>',
                    autoplay:true,
                    autoplaySpeed:1500,
                    arrows:true
                }); 
            },
           
        }
    })();
    
    Main.main();
})();

