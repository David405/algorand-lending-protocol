window.onload = (event) => {
    // Toggle the side navigation
    $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
            $('.sidebar .collapse').collapse('hide');
        };
    });

    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function() {
        if ($(window).width() < 768) {
            $('.sidebar .collapse').collapse('hide');
        };

        // Toggle the side navigation when window is resized below 480px
        if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
            $("body").addClass("sidebar-toggled");
            $(".sidebar").addClass("toggled");
            $('.sidebar .collapse').collapse('hide');
        };
    });

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
        if ($(window).width() > 768) {
            var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
        }
    });

    // Scroll to top button appear
    $(document).on('scroll', function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.scroll-to-top', function(e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeInOutExpo');
        e.preventDefault();
    });
    $(function() {
            $('[data-toggle="tooltip"]').tooltip()
        })
        // inspired by http://jsfiddle.net/arunpjohny/564Lxosz/1/
    $('.table-responsive-stack').each(function(i) {
        var id = $(this).attr('id');
        //alert(id);
        $(this).find("th").each(function(i) {
            $('#' + id + ' td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack-thead">' + $(this).text() + ':</span> ');
            $('.table-responsive-stack-thead').hide();

        });



    });





    $('.table-responsive-stack').each(function() {
        var thCount = $(this).find("th").length;
        var rowGrow = 100 / thCount + '%';
        //console.log(rowGrow);
        $(this).find("th, td").css('flex-basis', rowGrow);
    });




    function flexTable() {
        if ($(window).width() < 768) {

            $(".table-responsive-stack").each(function(i) {
                $(this).find(".table-responsive-stack-thead").show();
                $(this).find('thead').hide();
            });


            // window is less than 768px   
        } else {


            $(".table-responsive-stack").each(function(i) {
                $(this).find(".table-responsive-stack-thead").hide();
                $(this).find('thead').show();
            });



        }
        // flextable   
    }

    flexTable();

    window.onresize = function(event) {
        flexTable();
    };

};