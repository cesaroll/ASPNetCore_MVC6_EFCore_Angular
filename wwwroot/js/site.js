// site.js
(function () {

    /*
    var ele = $("#username");
    ele.text("Cesar Lerma");

    var main = $("#main");

    main.hover(
        function () {
            main.css("background-color","#888");
        },
        function () {
            main.css("background-color", "");
        }
    );

    var menuItems = $("ul.menu li a");
    menuItems.click(function () {

        var me = $(this);

        alert("Hello: " + me.text());

    });
    */


    var $sidebarAndWrapper = $("#sidebar,#wrapper");
    var $icon = $("#sidebarToggle i.fa"); // This selects objects with class fa inside i inside id=sidebarToggle

    $("#sidebarToggle").click(function () {

        $sidebarAndWrapper.toggleClass("hide-sidebar");

        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $icon.removeClass("fa-angle-left");
            $icon.addClass("fa-angle-right");
        } else {
            $icon.removeClass("fa-angle-right");
            $icon.addClass("fa-angle-left");
        }

    });
    


})();