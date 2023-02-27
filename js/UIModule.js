import gamesModule from "./gamesModule.js";
var games = new gamesModule()

export default class UIModule{
    
    navbarMoving(){
        const remHeight = $("nav").outerHeight(true)/2
        
        $(document).scroll(()=>{
            if ( $("html body").scrollTop() >= $(".cover").outerHeight(true)-remHeight ){
                $(".emptyNav").height($("nav").outerHeight(true))
                $("nav").css({
                    "position" : "fixed",
                    "top" : "0",
                    "transform" : "translateY(0)",
                    "left" : `${($(window).outerWidth()-$("nav").outerWidth())/2-8.5}`
                })
            }
            else{
                $(".emptyNav").height(0)
                $("nav").css({
                    "position" : "relative",
                    "top": "-25",
                    "left" : "0",
                    "margin-left": "auto",
                    "margin-right": "auto"
                })
            }
        })
    }
    navbarClickItems(){
        $(".games nav .navbar-nav .nav-item .nav-link").click((e)=>{
            $(e.target).addClass("active")
            $(e.target).parent().siblings().children().removeClass("active")


            $(".loading-screen").removeClass("d-none")
            $("body").css({
                "overflow" : "hidden"
            })
            $(".games .add").empty()
            games.getGames($(e.target).attr("category"))
        })
    }
    closeDetails(){
        $(".details .close").click(()=>{
            $(".details").toggleClass("d-none")
            $(".games").toggleClass("d-none")
        })
    }
    loadingScreen(){
        $(window).on("load",()=>{
            $(".loading-screen").addClass("d-none")
            $("body").css({
                "overflow" : "visible"
            })
        })
    }
    resizeWindow(){
        $(window).on(
            "resize",()=>{
                $("nav").css({
                            "left" : `${($(window).outerWidth(true)-$("nav").outerWidth(true))/2-8.5}`
                        })
            }
        )
    }
    
}