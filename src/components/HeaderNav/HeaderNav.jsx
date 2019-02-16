import React, { Component } from "react";


class HeaderNav extends Component{

    render() {
        return (
          <React.Fragment>
            <header className="header">
               <div className="header__item header__dashboard">
                  <i className="header__dashboard-icon fa fa-dashboard"/> 
                  <p className="header__dashboard-title">Dashboard </p>
               </div>

               <form className="header__item search">
                  <input type="text" className="search__input" placeholder="advertisor"/>
                  <button className="search__button">
                    <i className="search__icon fa fa-search"/>
                  </button>
               </form>
              
              <nav className="header__item navlinks">
                 <div className= "navlinks__item">
                   <i className="navlinks__icon fa fa-bookmark"/>
                   <span className="navlinks__icon--value">5</span>
                 </div>
                 <div className= "navlinks__item">
                   <i className="navlinks__icon fa fa-gears"/>
                 </div>
                 <div className= "navlinks__item">
                   <i className="navlinks__icon fa fa-user-circle-o"/>
                   <p className="navlinks__msg">Logout </p>
                 </div>
              </nav>
               

            </header>
          </React.Fragment>
        );
      }
}

export default HeaderNav;