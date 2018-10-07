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
            },
            CLASS_SELECTORS:
            {
               "tabs": ".nav-item",
               "moviePics":  ".movie-pics",
               "cast": ".card"
            },
            URLS:
            {
                "search": ".search-form"
            }
        }

        return {
            main: function()
            {
                if ($(CONSTANTS.CLASS_SELECTORS.tabs).length) {
                    this.handleTabs();
                }


                if ($(CONSTANTS.CLASS_SELECTORS.cast).length) {
                    this.showCastDetails();
                }
            },
            handleTabs: function()
            {
                var $this = this;
                $(CONSTANTS.URLS.search).on("submit", function(e)
                {
                    e.preventDefault();
                    var searchText = $(this).find("input").val();
                    axios.get("http://www.omdbapi.com/?apikey=8778835e&plot=full&t=" + searchText)
                        .then((response) => {
                            $(".title-block, nav").removeClass("d-none");

                           // Ratings
                            let ratings = response.data.Ratings;
                            let output = "";
                            $.each(ratings, (index, rating) => {
                                output += `
                                    <div class="col-4 ratings border d-flex align-items-center">
                                        <div class="row">
                                            <div class="col-12">${rating.Value}</div>
                                            <div class="col-12 info-text blue">${rating.Source}</div>
                                        </div>
                                    </div>
                                `;
                            });
                            $(".ratings-block").html(output);

                            // Title
                            var outputTitle = "";
                            outputTitle = `
                                <div class="col-8">${response.data.Title}
                                <br>${response.data.Title} . ${response.data.Genre} . ${response.data.Runtime}</div>
                            `;
                            $(".title-block").html(outputTitle);
                            $(".desc-block").html(response.data.Plot);

                            var outputMisc = `
                                <p class="">Initial Release: ${response.data.Released}</p>
                                <p class="">Director: ${response.data.Director}</p>
                                <p class="">Box office: ${response.data.BoxOffice}</p>
                                <p class="">Production: ${response.data.Production}</p>
                            `;
                            $(".misc-block").html(outputMisc);

                            var outputPosters = `
                                <div class="movie-pics">
                                    <div><img src="${response.data.Poster}" />
                                    </div>
                                    <div><img src="${response.data.Poster}" />
                                    </div>
                                    <div><img src="${response.data.Poster}" />
                                    </div>
                                    <div><img src="${response.data.Poster}" />
                                    </div>
                                </div>
                            `;

                            $(".movie-block").html(outputPosters);
                            $this.initialiseSlider();

                        })
                        .catch((error) => {
                            console.log(error);
                        });
                });
            },
           initialiseSlider: function() {
                $('.movie-pics').slick({
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    arrows: false,
                    responsive: [{
                        breakpoint: 600,
                        settings: {
                            slidesToShow:3,
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
           },
           showCastDetails: function() {
           }
        }
    })();
    
    Main.main();
})();

