import UIModule from "./UIModule.js";
import gamesModule from "./gamesModule.js";
import detailsModule from "./detailsModule.js";


var UI = new UIModule()
var games = new gamesModule()
var details = new detailsModule()

UI.navbarMoving()
UI.navbarClickItems()
UI.closeDetails()
UI.loadingScreen()
UI.resizeWindow()

games.getGames()
    


