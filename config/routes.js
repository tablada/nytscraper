// Server Routes
// =============

// Bring in the Scrape function from our scripts directory
var scrape = require("../scripts/scrape");

// Bring headlines and notes from the controller
var headlinesController = require("../controllers/headline");
var notesController = require("../controllers/note");

module.exports = function(router) {
    //This route renders the homepage
    router.get("/", function(req, res) {
        res.render("home");
    });
    //This route renders the saved handlebars page
    router.get("/saved", function (req, res) {
        res.render("saved");
    });
}