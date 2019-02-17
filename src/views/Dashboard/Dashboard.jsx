import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../../components/Sidebar/Sidebar";
import HeaderNav from "../../containers/HeaderNav/HeaderNav";
import DashboardContent from "../../layouts/DashboardContent/DashboardContent";

class Dashboard extends Component{

    render(){

        return(
             <React.Fragment>
               <div className = "dashboard">
                 <nav className = "dashboard__sidebar">
                    <Sidebar/>
                 </nav>
                 <nav className = {`dashboard__header-${this.props.showSideBar}`}>
                    <HeaderNav/>
                    <DashboardContent/>
                 </nav>
                 
                 <nav className = {`dashboard__sidebar--mobile-${this.props.showSideBar}`}>
                    <Sidebar/>
                 </nav>

               </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => ({
    showSideBar: state.toggleSideBar
});
  
export default connect(mapStateToProps,null)(Dashboard);