const filtr=()=>{
    $(function() {

        let newSelection = "";
    
        $(".portfolio-menu li").click(function(){
    
            $(".portfolio-wrapper").fadeTo(200, 0.10);
    
            $(".portfolio-menu li").removeClass("active");
            $(this).addClass("active");
    
            newSelection = $(this).attr("value");
    
            $(".portfolio-block").not("."+newSelection).slideUp();
            $("."+newSelection).slideDown();

            // $(".portfolio-block").is("."+newSelection, function(){
            //     $(".portfolio-no").css({"display":"block"});
            // });
    
            $(".portfolio-wrapper").fadeTo(600, 1);
        });
    }); 
}

module.exports = filtr;