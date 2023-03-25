$(window).on('load', function() {
    $('li').delay(300).fadeTo(500, 1)
    $('#formal-image').delay(300).fadeTo(500, 1)
    $(function(){
        // Detect Click on Tab Selectors
        $('.tabs li').on('click', function(){
            var $selectedpanel = $(this).closest('body');
            $selectedpanel.find('.tabs li.active').removeClass('active');
            $(this).addClass('active');
            $('.tabs li').toggle(200)


            //Make Box Visible
            var boxShow = $(this).attr('rel');

            //Hide Previous Box
            $selectedpanel.find('.info.active').slideUp(500, changeBox);

            //Show Corresponding Box
            function changeBox(){
                $(this).removeClass('active');
                $('#'+boxShow).slideDown(500, function(){
                    $(this).addClass('active');
                    $('.tabs li').toggle(200)
                })
            }
        })
        $('#formal-image').on('mouseover', function(){
            $(this).stop()
            $(this).css({opacity: '1'})
            $(this).animate({borderWidth: '7px'}, 200, 'swing')
        })
        $('#formal-image').on('mouseleave', function(){
            $(this).stop()
            $(this).animate({borderWidth: '3px'}, 200, 'swing')
        })
    })
})