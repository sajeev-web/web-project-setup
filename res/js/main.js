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
               "tabs": ".nav-item".
               "moviePics":  ".movie-pics"
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

                this.initialiseSlider();


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
           initialiseSlider: function() {
                $('.movie-pics').slick({
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows: true,
                    responsive: [{
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                       breakpoint: 400,
                       settings: {
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1
                       }
                    }]
                });
           }
        }
    })();
    
    Main.main();
})();

