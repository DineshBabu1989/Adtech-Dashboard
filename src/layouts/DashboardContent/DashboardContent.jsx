import React, { Component } from "react";
import StatsCard from "../../components/StatsCard/StatsCard";
import TablePagination from "../../components/TablePagination/TablePagination";

const StatsProps =[
    {
        statsIcon: "fa fa-bullhorn",
        statsIconColor:{
            color:"purple"
        },
        title: "Campagins",
        value:"500",
        footerIcon:"fa fa-refresh",
        info:"uploaded now"
    },
    {
        statsIcon: "fa fa-hand-pointer-o",
        statsIconColor:{
            color:"green"
        },
        title: "Clicks",
        value:"3456000",
        footerIcon:"fa fa-refresh",
        info:"uploaded now"
    },
    {
        statsIcon: "fa fa-eye",
        statsIconColor:{
            color:"orange"
        },
        title: "Impressions",
        value:"4567890",
        footerIcon:"fa fa-refresh",
        info:"uploaded now"
    },
    {
        statsIcon: "fa fa-download",
        statsIconColor:{
            color:"red"
        },
        title: "Downloads",
        value:"9087",
        footerIcon:"fa fa-calendar",
        info:"last week"
    }
]

class DashboardContent extends Component{
        
    render(){

        const statsCards = StatsProps.map((stat,index) => {
            return(
                <div className="dashboardcontent__statscards--item" key={index}>
                   <StatsCard data ={stat}/>
                </div>
            );     
        })

        return(
             <React.Fragment>
               <section className = "dashboardcontent">
                  <section className="dashboardcontent__statscards">
                     {statsCards}
                  </section>
                    <TablePagination/>
               </section>
            </React.Fragment>
        )
    }

}
  
export default DashboardContent;