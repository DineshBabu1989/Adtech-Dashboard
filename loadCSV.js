const path = require('path');
const Pool = require('pg').Pool;
const Config = require('./config/keys');

const pool = new Pool(Config);

pool.connect(function(err, client, done) {
    console.log('connected to db');
    done()
});

/**
 * Loads CSV files in to the postgres database defined in the keys file
 * @return Boolean promise after the succesfull upload
 */
const createTablesAndLoadDataFromCSV = async() => {

  const localPath = path.resolve(__dirname);

  //const dropTables             =  `DROP TABLE advertisers,campaigns,reports`;

  const createTableAdvertisers = `CREATE TABLE advertisers(
                                        id INT,
                                        name VARCHAR(20)
                                   )`;

  const createTableReports     = `CREATE TABLE reports (
                                        advertiser_id INT,
                                        campaign_id INT,
                                        date VARCHAR(10),
                                        impressions INT,
                                        clicks INT,
                                        installs INT,
                                        cost_micros BIGINT
                                  )`;
                                  
  const createTableCampaigns   = `CREATE TABLE campaigns (
                                        id INT,
                                        advertiser_id INT,
                                        name VARCHAR(30),
                                        start_date VARCHAR(10),
                                        end_date VARCHAR(10),
                                        cost_model VARCHAR(20),
                                        cost NUMERIC(5,2)
                                   )`;
 
  const loadCampaignCSV      =  `COPY campaigns(
                                        id,
                                        advertiser_id,
                                        name,
                                        start_date,
                                        end_date,
                                        cost_model,
                                        cost
                                    ) FROM '${localPath}/seeds/campaigns.csv' DELIMITER ',' CSV HEADER`;

  const loadAdvertiserCSV   =   `COPY advertisers(
                                        id,
                                        name
                                        ) FROM '${localPath}/seeds/advertisers.csv' DELIMITER ',' CSV HEADER`; 
  
  const loadReportsCSV      =   `COPY reports(
                                        advertiser_id,
                                        campaign_id,
                                        date,
                                        impressions,
                                        clicks,
                                        installs,
                                        cost_micros) FROM '${localPath}/seeds/reports.csv' DELIMITER ',' CSV HEADER`;    
                                        
  try{
   //await pool.query(dropTables);
   await pool.query(createTableAdvertisers);
   await pool.query(createTableCampaigns);
   await pool.query(createTableReports);
   await pool.query(loadAdvertiserCSV);
   await pool.query(loadCampaignCSV);
   await pool.query(loadReportsCSV);
  
   console.log(`tables created and CSV files loaded to ${Config.database} succesfully`);
  
   return Promise.resolve(true); 
 }
 catch{
  return Promise.reject(false);
 }

}

createTablesAndLoadDataFromCSV();
