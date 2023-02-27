export default class detailsModule{ 
    getDetails(ID){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'be2d24c5b4msh0e4d52566378748p1762d1jsnf50d7b2662f7',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        (async function(){
            const newApi = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${ID}`, options)
            var api = await newApi.json();
            $(".details #imgID").attr("src",api.thumbnail)
            $(".details #titleID").html(api.title)
            $(".details #catID").html(api.genre)
            $(".details #platID").html(api.platform)
            $(".details #stateID").html(api.status)
            $(".details #parID").html(api.description)
            $(".details #linkID").attr("href",api.game_url)
            $(".loading-screen").addClass("d-none")
        })()
    }
}