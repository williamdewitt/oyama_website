(function ($, Drupal) {

    'use strict';

    $(document).ready(function () {
        $('.owl-carousel').owlCarousel(
            {
                loop: true,
                margin: 10,
                nav: true,
                navText: [
                    "<button type='button' class='btn btn-default btn-lg'><span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span></button>",
                    "<button type='button' class='btn btn-default btn-lg'><span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span></button>"
                ],
                dots: false
            }
        );

        $('.img-responsive').on('click', function (event) {
            var $this = $(this);
            var theSrc = $(this).attr('src');
            var $myModal = $('#myModal');
            
            document.getElementById("collectionImage").src = theSrc;

            $myModal.modal('show');
        });
    });

})(window.jQuery, window.Drupal);