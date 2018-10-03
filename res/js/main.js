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
            },
            CLASS_SELECTORS:
            {
               "tabs" : ".nav-item"
            },
            URLS:
            {
                
            }
        }

        return {
            main: function()
            {
                if ($(CONSTANTS.CLASS_SELECTORS.tabs).length) {
                    this.handleTabs();
                }

            },
            handleTabs: function()
            {
                var that = this;
                $(CONSTANTS.CLASS_SELECTORS.tabs).on("click", function(e)
                {
                    if ($(this).find(".nav-link").attr("href") == "#overview") {
                        console.log("overview");
                        axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=8778835e&t=Fight+Club")
                            .then((response) => {
                                console.log(response);
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    } else {
                        console.log("cast");
                    }
                });
            },
           
        }
    })();
    
    Main.main();
})();

