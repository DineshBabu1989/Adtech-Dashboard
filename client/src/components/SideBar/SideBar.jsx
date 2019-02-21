import React, { Component } from "react";
import logo from "assets/img/logo.png";

class Sidebar extends Component{

    render(){

        return(
           <React.Fragment>
              <nav className = "sidebar">
                  <header className = "sidebar__heading">
                      <div className= "sidebar__heading--wrapper">
                         <img src={logo} className = "sidebar__heading--logo" alt = "kayzen logo"/>
                         <p className = "sidebar__heading--title">KAYZEN</p>
                      </div>
                  </header>

                  <nav className = "sidebar__navlinks--wrapper">
                      <ul className = "sidebar__navlinks">
                         <li className = "sidebar__navlinks--item">
                            <i className="sidebar__navlinks--icon fa fa-tachometer"/>
                            <p className="sidebar__navlinks--msg">Dashboard </p>
                         </li>
                         <li className = "sidebar__navlinks--item">
                            <i className="sidebar__navlinks--icon fa fa-user"/>
                            <p className="sidebar__navlinks--msg">Profile </p>
                         </li>
                         <li className = "sidebar__navlinks--item">
                            <i className="sidebar__navlinks--icon fa fa-line-chart"/>
                            <p className="sidebar__navlinks--msg">Statistics</p>
                         </li>
                      </ul>
                      <ul className = "sidebar__navLinks--signout">
                         <div className = "sidebar__navlinks--item">
                            <i className="sidebar__navlinks--icon fa fa-sign-out"/>
                            <p className="sidebar__navlinks--msg">Logout</p>
                        </div>
                      </ul>
                  </nav>
              </nav>
           </React.Fragment>
        ); 
    }
}

export default Sidebar;