
// Global Client Side JS Code Here...

// $("li").click(function(e) {
//     e.preventDefault();
//     $("ul .active").removeClass("active");
//     $(this).addClass("active");
// });

// $(document).ready(function(){
//     $("li").click(function() {
//       $("ul .active").removeClass("active");
//       $(this).addClass("active");
//    });
// });
$(document).ready(function () {
    var url = window.location;
    $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
    $('ul.nav a').filter(function() {
      return this.href == url;
    }).parent().addClass('active');
});
