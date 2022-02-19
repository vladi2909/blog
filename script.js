$(".search__icon").click(function () {
    $(".search-toggle").animate({
        width: 'toggle'
    });

    $(".icon-open").toggle();
    $(".icon-close").toggle();
    $(".search-form").val('');
});