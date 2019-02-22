const Pool = require('pg').Pool;
const config = require('./config/keys');

const pool = new Pool(config);

pool.connect(function(err, client, done) {
    console.log('connected to db');
    done()
  })

/**
 * GET request to the controller to get data from advertisers table
 * @param {*} request GET request from the client
 * @param {*} response JSON response with table data
 */  
const getAdvertisers = (request, response) => {
  const queryString = 'SELECT * FROM advertisers ORDER BY id ASC';
  pool.query(queryString)
      .then(res =>  response.status(200).json(res.rows))
      .catch(err =>  response.status(400).json(err));
}

/**
 * GET request to the controller to get data from campaigns table
 * @param {*} request GET request from the client
 * @param {*} response JSON response with table data
 */  
const getCampaigns = (request, response) => {
  const queryString = 'SELECT * FROM campaigns ORDER BY id ASC';
  pool.query(queryString)
      .then( res =>  response.status(200).json(res.rows))
      .catch(err =>  response.status(400).json(err));
}

/**
 * GET request to the controller to get data from reports table
 * @param {*} request GET request from the client
 * @param {*} response JSON response with table data
 */  
const getReports = (request, response) => {
   const queryString = 'SELECT * FROM reports ORDER BY advertiser_id ASC';
   pool.query(queryString)
       .then(res =>  response.status(200).json(res.rows))
       .catch(err =>  response.status(400).json(err));
}

const getAggregatedStats = (request, response) => {
  const queryString = `SELECT MAX(advertiser_id) AS total_advertisers ,
                              MAX(campaign_id) AS  total_campagins,  
                              SUM(impressions) AS total_impressions, 
                              SUM(clicks) as total_clicks, 
                              SUM(installs) AS total_installs, 
                              SUM(cost_micros) AS total_cost FROM reports`;
  pool.query(queryString)
      .then(res =>  response.status(200).json(res.rows))
      .catch(err =>  response.status(400).json(err));
}
   
module.exports = {
  getAdvertisers,
  getCampaigns,
  getReports,
  getAggregatedStats
}
