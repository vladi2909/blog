$(document).ready(function() {
    $(".search__icon").click(function () {
        $(".search-toggle").animate({
            width: 'toggle'
        });
    
        $(".icon-open").toggle();
        $(".icon-close").toggle();
        $(".search-form").val('');
    });

    $(".navigation__link").click(function(e) {
        const target = e.target;

        $(".navigation__item").each(function() {
            $(this).removeClass("navigation__item--active");
        });

        $(target.parentElement).addClass("navigation__item--active");

        
    });
    

});