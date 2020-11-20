//        header

////      index.html

//////    header scroll

$(document).ready(function(){
    
        $(window).on("scroll",function(){
            if($(this).scrollTop()>0){
                $('.header').attr("id","header");
                $('.header>div').attr("id","header_child");
                $("a#active").css({color:"#0fb78d"});
            }else{
                $(".header").removeAttr("id");
                $(".header>div").removeAttr("id");
                $("a#active").css({color:"#333"});
            }
        });
        
////        search button for all pages
    
        
        $('#poisk').click(function (){
            $(".form_panel").css({visibility:"visible"}) 
        });
        
        $(".times").click(function (){
            $(".form_panel").css({visibility:"hidden"})
        });
        
////        Accordion header right-navigation for all pages

        $(".h-li").click(function (){
            that = $(this).find("span").attr("id");
            $(this).next().slideToggle();
            if(typeof that != typeof 'undefined'){
                $(this).find("span").attr("id","rotate");                
            }else{
                $(this).find("span").removeAttr("id","rotate");
            }
        });
        
////        right-navigation for all pages
        
        $("#checkbox3").click(function (){
            $(".right-nav").css({
                right:"0px",
                transition:"all 0.3s ease"
            });
            $("#cover").css({ display:"block" })
            setTimeout(()=>{
                $("#checkbox3").prop("checked",false);
            },1000);
        });
        
        $(".iks").click(function (){
            $(".right-nav").css({ right:"-300px", transition:"all 0.3s ease" });
            $("#cover").css("display","none");
            $("#checkbox3").prop("checked",false);
        });
        
        $("#cover").click(function (){
            $(this).css("display","none");
            $(".right-nav").css({ right:"-300px", transition:"all 0.3s ease" });
            $("#checkbox3").prop("checked",false);
        });  
        
            
    
    
    
//for index.html    
//slider-carousel            
            
        $(".slide-one").owlCarousel({
            items:1,
            loop:true,
            autoplay:4000,
            smartSpeed:750,
            dots:true,
        });  
            
            
//slider-items-3 for index.html and shop.html
            
        $(".slide-two").owlCarousel({
            items:3,
            loop:true,
            margin:35,
            autoplay:4000,
            smartSpeed:750,
            dots:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                    margin:20
                },
                630:{
                    items:3,
                    margin:40  
                },
                850:{
                    items:3,
                    margin:35
                }
            }
        });

        var owl = $('.slide-two');
        owl.owlCarousel();
        $('.nav_next').click(function() {
            owl.trigger('next.owl.carousel');
        });
        $('.nav_prev').click(function() {
            owl.trigger('prev.owl.carousel');
        })
    
});

//for page checkout.html
    
$(document).ready(function(){
        $(".toggle > span").click(function(){
            let check = $(this).parent().find(".check");
            check.prop("checked",!check.prop("checked"));
            $(this).parent().next().slideToggle(300);
        })
        
        $(".check").click(function (){
            $(this).parent().next().slideToggle(300);                
        })
        
        
        $(".dhol>div").click(function (){
            $(this).next().slideToggle(300);
        });    

//for page elements.html accordion
    
        $(".info-toggle").next().slideDown();
        
        $(".information > li").click(function (){
            $(this).toggleClass("info-toggle");
            $(this).find("i").toggleClass("fas fa-minus");
            $(this).find("i").toggleClass("fas fa-plus");
            $(this).next().slideToggle(300);
        });    

//for page elements.html
    
        $(".slider-three").owlCarousel({
            items:1,
            loop:true,
            dots:true,
            autoplay:3000,
            smartSpeed:400
        })

})
//    Year for footer, for all pages
        window.onload = () =>{
            year.innerHTML = new Date().getFullYear();
        }


//for page cart.html
//    Quantity

        function plus(a){
            let num=a.previousElementSibling;
            num.value= +num.value + 1;
        }
        
        function minus(a){
            let num=a.nextElementSibling;
            (num.value <=1) ? num.value = 1 : num.value= +num.value - 1;
        }



//lightbox video

const cover_vid = document.createElement("div");
cover_vid.id="video";

const times = document.createElement("span");
times.id = "video_times";

document.body.appendChild(cover_vid);

const vid = document.querySelectorAll(".video-block");

vid.forEach(vid=>{
    vid.addEventListener("click",e=>{
        cover_vid.classList.add("play");
        const vv = document.createElement("VIDEO");
        vv.src = vid.getAttribute("video-name");
        vv.setAttribute("controls","controls");
        vv.setAttribute("autoplay","autoplay");
        cover_vid.appendChild(times);
        cover_vid.appendChild(vv);
    });
});

let close=(e)=>{
    if(e.target == e.currentTarget){
        video.classList.remove("play");
        video.innerHTML = "";
    }
}

video.addEventListener("click",close);
times.addEventListener("click",close);