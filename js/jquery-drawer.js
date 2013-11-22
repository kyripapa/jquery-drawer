(function ($) {

    $.fn.drawer = function () {

        if (this.length > 1) {
            this.each (function () {
                $(this).drawer();
            });

            return this;
        }

        this.open = function () {

            console.log ("open");

        }

        this.close = function () {

            console.log ("close");

        }

    };


} (jQuery));