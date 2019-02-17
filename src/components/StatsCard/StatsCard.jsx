import React, { Component } from "react";

class StatsCard extends Component{

    render(){

        return(
           <React.Fragment>
              <div className = "statscard">
                  <div className="statscard__info">
                      <i className="statscard__info--icon fa fa-database"/>
                      <div className="statscard__info--wrapper">
                          <div className="statscard__info--title">Advertisors</div>
                          <div className="statscard__info--value">10</div>
                      </div>
                  </div>
                  <div className="statscard__footer">
                       <i className="statscard__footer--icon fa fa-refresh"/>
                       <div className="statscard__footer--info">Updated now</div>
                  </div>
              </div>
           </React.Fragment>
        ); 
    }
}

export default StatsCard;