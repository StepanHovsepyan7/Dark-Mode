'use strict';

$(document).ready(function() {
    function themeFunc() {

        const settings = {
            themeBtn: $(".themeParent"),
            themeIcon: $(".themeParent i"),
        };

        settings.themeBtn.click(function() {
            
            if($("body").hasClass("dark")) {
                $("body").removeClass("dark");
                settings.themeIcon.removeClass("fa-sun");
                settings.themeIcon.addClass("fa-moon");
            } else {
                $("body").addClass("dark");
                settings.themeIcon.removeClass("fa-moon");
                settings.themeIcon.addClass("fa-sun");
            }

        })

    }

    themeFunc();
})