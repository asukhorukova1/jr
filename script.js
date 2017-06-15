function init() {

    //     $("img").hover(function(){
    // $("h1").hide("slow");
    //     },function(){
    // $("h1").show("slow");
    //     });


    function getName(object) {
        var fullPath = object.src;
        var filename = fullPath.replace(/^.*[\\\/]/, '');
        // or, try this, 
        // var filename = fullPath.split("/").pop();


        var filename = fullPath.replace(/^.*[\\\/]/, '');

        var stringname = filename;
        var newstringname = stringname.replace(".jpg", "");
        var newstringname = newstringname.replace(".png", "");
        var newstringname = newstringname.replace(".gif", "");
        var newstringname = newstringname.replace("%20", " ");
        var newstringname = newstringname.replace("%20", " ");
        var newstringname = newstringname.replace("%3E", ">");
        var newstringname = newstringname.replace("%20", " ");
        var newstringname = newstringname.replace("%20", " ");
        var newstringname = newstringname.replace("%20", " ");
        var newstringname = newstringname.replace("%20", " ");
        var name = newstringname;
        // document.getElementById("h1").value = filename;
        console.log(name);
        $(object).on({
            mouseenter: function() {
                $("h1").text(name);
            },
            mouseleave: function() {
                $("h1").text("RUSSIAN FOR JAKOB");
            }
        });
    };
       $('img').each(function(){
    getName(this);
   })






    $("img").on({
        mouseenter: function() {
            $(this).css("box-shadow","0px 0px 20px pink");
            // getName(this);
        },
        mouseleave: function() {
            $(this).css("box-shadow","0px 0px 0px pink");
            // getName(this) === false;
        }

    });




    //     $("img").hover(function(){
    // $("h1").innerHTML("slow");
    //     },function(){
    // $("h1").show("slow");
    //     });
}
window.onload = init();
