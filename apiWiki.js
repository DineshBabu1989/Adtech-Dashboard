module.exports = {
    intro: "This is a API for kayzen dashboard",
    route1: {
        path:"http://localhost:8080/advertisers",
        details:" Will respond with a list of advertisers"
    },
    route2: {
        path:"http://localhost:8080/campaigns",
        details:" Will respond with a list of campaigns"
    },
    route3: {
        path:"http://localhost:8080/reports",
        details:" Will respond with a campaigns & reports"
    },
   
    gettingStarted:{
        step1: "Create a postgres database and note down the credentials",
        step2: "Run:'node loadCSV', from your terminal to create tables and upload CSV data",
        step3: "Run:'node server', your routes will be operational"
    }
};