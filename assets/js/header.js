$('.slider').slick();

        function isMobile() {
            if($(window).width() < 992) {
                return true
            }
            else {
                return false;
            }
            
        }

        $(document).on('click','.mobile_bg',function(){
            var getPosition = toggleHead();
            $('.mobile_group').removeClass('open');
            $('html,body').removeClass('prevent-scroll');
            $('.dropdown-navbar').hide()
            if (getPosition == true) {
                $('.top-nav').addClass('fixed-head-white');
            }
            else {
                $('.top-nav').removeClass('fixed-head-white');
            }
            $("#menuicon").prop("checked", false);
        }) 

        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3500,
        });

        $(window).scroll(function () {
            var getPosition = toggleHead();
            $('.dropdown-navbar').hide();
            $("#menuicon").prop("checked", false);

            if (getPosition == true) {
                $('.top-nav').addClass('fixed-head-white');
            }
            else {
                $('.top-nav').removeClass('fixed-head-white');
            }
        });

        $("#top_nav").hover(function () {
            if(isMobile()) {
                return false;
            }
            $('.top-nav').addClass('fixed-head-white');
            $('.dropdown-navbar').show();
            $("#menuicon").prop("checked", true);
        }, function () {
            if(isMobile()) {
                return false;
            }
            var getPosition = toggleHead();
            $('.dropdown-navbar').hide()
            if (getPosition == true) {
                $('.top-nav').addClass('fixed-head-white');
            }
            else {
                $('.top-nav').removeClass('fixed-head-white');
            }
            $("#menuicon").prop("checked", false);
        });

        $(document).on('change', '#menuicon', function () {
            var getPosition = toggleHead();
            if ($("#menuicon").is(":checked") == true) {
                $('.top-nav').addClass('fixed-head-white');
                $('.dropdown-navbar').show();
                if(isMobile()) {
                $('.mobile_group').addClass('open');
                $('html,body').addClass('prevent-scroll')
                }
            }
            else {
                $('.dropdown-navbar').hide()
                
                $('.mobile_group').removeClass('open');
                $('html,body').removeClass('prevent-scroll');

                if (getPosition == true) {
                    $('.top-nav').addClass('fixed-head-white');
                }
                else {
                    $('.top-nav').removeClass('fixed-head-white');
                }
            }
        });