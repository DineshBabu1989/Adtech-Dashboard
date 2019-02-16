import React, { Component } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import HeaderNav from "../../components/HeaderNav/HeaderNav";

class Dashboard extends Component{

    render(){

        return(
             <React.Fragment>
               <div className = "dashboard">
                 <nav className = "dashboard__sidebar">
                   <Sidebar/>
                 </nav>
                 <nav className = "dashboard__header">
                   <HeaderNav/>
                 </nav>
               </div>
            </React.Fragment>
        )
    }

}
export default Dashboard;