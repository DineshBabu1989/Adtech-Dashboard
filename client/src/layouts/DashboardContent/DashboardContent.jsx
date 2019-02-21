import React, { Component } from "react";
import StatsCardSlider from "../../containers/StatsCardSlider/StatsCardSlider";
import TablePagination from "../../containers/TablePagination/TablePagination";


class DashboardContent extends Component{
        
    render(){

        return(
             <React.Fragment>
               <section className = "dashboardcontent">
                     <StatsCardSlider/>
                  <section className="dashboardcontent__table">
                     <TablePagination/>
                  </section>
               </section>
            </React.Fragment>
        )
    }

}
  
export default DashboardContent;