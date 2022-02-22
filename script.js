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

    let links = {
        all: 'Все',
        upgrade: 'Обновления решений',
        bitrix24: 'Битрикс24',
        news: 'Новости'
    };

    var DEFAULT_LINK = 'all';

    let menuElem = document.querySelector(".navigation");
    let titleElem = menuElem.querySelector(".navigation__title");

    function selectOption(optionName) {
        titleElem.dataset.link = optionName;
        titleElem.innerText = links[optionName];
    }

    selectOption(DEFAULT_LINK);
    
    let optionsHolter = menuElem.querySelector(".navigation__list");

    titleElem.addEventListener("click", function() {
        menuElem.classList.toggle("open");
    });

    optionsHolter.addEventListener("click", function(event) {
        menuElem.classList.remove('open');
        if (event.target.dataset && event.target.dataset.link) {
            selectOption(event.target.dataset.link);
        }
    });
    


});