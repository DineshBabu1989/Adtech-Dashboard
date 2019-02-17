import React, { Component } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import HeaderNav from "../../components/HeaderNav/HeaderNav";

class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state = {
            sidebarToggle:false
        }

        this.handleHeaderSideBarToggle = this.handleHeaderSideBarToggle.bind(this);
    }

    handleHeaderSideBarToggle(){
       this.setState({
           sidebarToggle:!this.state.sidebarToggle
       });
    }

    render(){

        return(
             <React.Fragment>
               <div className = "dashboard">
                 <nav className = "dashboard__sidebar">
                    <Sidebar/>
                 </nav>
                 <nav className = {`dashboard__header-${this.state.sidebarToggle}`}>
                    <HeaderNav showMobileSideBar = {this.handleHeaderSideBarToggle}/>
                 </nav>
                 <nav className = {`dashboard__sidebar--mobile-${this.state.sidebarToggle}`}>
                    <Sidebar/>
                 </nav>
               </div>
            </React.Fragment>
        )
    }

}
export default Dashboard;