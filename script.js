$(".search__icon--open").click(function () {
    $(".search-toggle").animate({
        width: 'toggle'
    });

    $(".icon-open").toggle();
    $(".icon-close").toggle();
    $(".search-form").val('');
});