import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleSideBar } from "../../actions/actions";

class HeaderNav extends Component{

    constructor(props){
      super(props);

      this.handleMobileSideBarToggle = this.handleMobileSideBarToggle.bind(this);
    }

    handleMobileSideBarToggle(){
      const toggleButtonState = this.props.showSideBar;
      this.props.toggleSideBar(toggleButtonState);
    }

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
                 <div className= "navlinks__item">
                   <button className="navlinks__mobile-button" onClick = {this.handleMobileSideBarToggle}>
                      <div className = "navlinks__mobile-button--wrapper">
                         <span className="navlinks__mobile-button--line"></span>
                         <span className="navlinks__mobile-button--line"></span>
                         <span className="navlinks__mobile-button--line"></span>
                      </div>
                   </button>
                 </div>
              </nav>

            </header>
          </React.Fragment>
        );
      }
}

const mapStateToProps = state => ({
  showSideBar: state.toggleSideBar
});

export default connect(mapStateToProps,{ toggleSideBar })(HeaderNav);