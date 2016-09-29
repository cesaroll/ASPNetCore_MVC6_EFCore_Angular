// site.js
(function () {

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

})();