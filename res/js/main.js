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
                
            },
            URLS:
            {
                
            }
        }

        return {
            main: function()
            {
                $(document).foundation();
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
    
    Main.main();
})();

