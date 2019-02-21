const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./routes');
const info = require('./apiWiki');

const port = process.env.port || 8080;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (request, response) => {
    response.json({ info })
})

/**
 * HTTP methods for handling data from the database
 */
app.get('/advertisers', db.getAdvertisers);
app.get('/campaigns', db.getCampaigns);
app.get('/reports', db.getReports);
app.get('/aggregates', db.getAggregatedStats);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});
