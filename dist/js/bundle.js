/* ---- Header js ----- */

;(function()
{
    "use strict";

    var Header = (function()
    {
        var CONSTANTS = 
        {
            ID_SELECTORS:
            {
               "headerNav": "#headerNav",
               "headerUl": "#headerNavUl",
               "dummyID": "#dummyID"
            },
            CLASS_SELECTORS:
            {
                
            },
            URLS:
            {
                
            }
        }

        return {
            main: function()
            {
                if ($(CONSTANTS.ID_SELECTORS.name).length)
                    this.functionName();

            },
            functionName: function()
            {
                var that = this;
                $(CONSTANTS.CUSTOM_SELECTORS.showResetPassword).on("click", function(e)
                {
                    e.preventDefault();

                    that.clearResetPasswordMessages();
                    $(CONSTANTS.ID_SELECTORS.resetWrapper).removeClass("hide");
                    $(CONSTANTS.ID_SELECTORS.loginWrapper).addClass("hide");

                    return false;
                });
            },
           
        }
    })();
    
    Header.main();
})();


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

