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

    const accordion = document.querySelector(".accordion");
    let flag = true;
    
    accordion.addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (flag) {
            panel.style.maxHeight = 0;
            flag = false;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            flag = true;
        }
    });


});