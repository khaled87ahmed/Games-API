import detailsModule from "./detailsModule.js";

var details = new detailsModule()


export default class gamesModule{ 
    getGames(Category="mmorpg"){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'be2d24c5b4msh0e4d52566378748p1762d1jsnf50d7b2662f7',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    (async function(){
        const newApi = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${Category}`, options)
        var api = await newApi.json();
        
        for(let i=0 ; i<api.length ; i++){
            $(".games .add").append(`
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4 " >
                        <div class="game rounded-2 xxx d-flex flex-wrap" id="${api[i].id}">
                            <div class="container xxx">
                                <div class="image my-3 position-relative">
                                    <img src="${api[i].thumbnail}" class="w-100 rounded-2" alt="">
                                    <div class="layer position-absolute top-0 end-0 start-0 bottom-0 rounded-2"></div>
                                </div>
                                
    
                                <div class="d-flex justify-content-between">
                                    <h6 class="align-self-center">${api[i].title}</h6>
                                    <div class="free d-flex justify-content-center align-items-center align-self-start rounded-2">Free</div>
                                </div>
                                <p class="text-center">${api[i].short_description}</p>
    
                                
                            </div>

                            <div class="align-self-end w-100">
                                <div class="line w-100"></div>
                                <div class="container ">
                                    <div class="d-flex justify-content-between align-items-center my-2 ">
                                            <span class="px-2 rounded-2">${api[i].genre}</span>
                                            <span class="px-2 rounded-2">${api[i].platform}</span>
                                    </div>
                                </div>
                            </div>

                            
    
                    </div>`)
                    
        }

        $(".loading-screen").addClass("d-none")
            $("body").css({
                "overflow" : "visible"
            })
        
        $(".games .game").click((e)=>{
            $(".loading-screen").removeClass("d-none")
            $(".games").toggleClass("d-none")
            $(".details").toggleClass("d-none")
            var ID
            var element = $(e.target)
            while(true){
                if(element.attr("id")!=undefined){
                    
                    ID=Number(element.attr("id"));
                    break;
                }
                else{
                    element=element.parent();
                }
            }
            details.getDetails(ID)
            
        })


    })()
    
    
}

}