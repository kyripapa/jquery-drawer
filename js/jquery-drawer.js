(function ($) {

    $.fn.drawer = function () {

        if (this.length > 1) {
            this.each (function () {
                $ (this).drawer ();
            });

            return this;
        }

        this.init = function () {
            console.log ("initialize");

            $ (this).data ("width", $ (this).outerWidth ());

            styles = {
                position: "fixed",
                top: "0px",
                left: "0px",
                height: "100%",
                width: "0px",
                display: "none"
            };

            $ (this).css (styles);


            return this;

        }

        this.open = function () {

            console.log ("open");

            $ (this).css ("display", "block").animate ({
                    width: $ (this).data ("width")
                },
                800
            );

        }

        this.close = function () {

            console.log ("close");

            $ (this).animate ({

                    width: "0px"
                },
                500,
                function () {
                    $ (this).css ("display", "none");
                }
            );

        }


        return this.init ();

    };


} (jQuery));