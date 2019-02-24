import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SideBar from '../../components/SideBar/SideBar';
import HeaderNav from '../../containers/HeaderNav/HeaderNav';
import DashboardContent from '../../layouts/DashboardContent/DashboardContent';

class Dashboard extends Component{

    render(){

        return(
            <React.Fragment>
                <div className = 'dashboard'>
                    <nav className = 'dashboard__sidebar'>
                        <SideBar/>
                    </nav>
                    <nav className = { `dashboard__header-${ this.props.showSideBar }` }>
                        <HeaderNav/>
                        <DashboardContent/>
                    </nav>  
                    <nav className = { `dashboard__sidebar--mobile-${ this.props.showSideBar }` }>
                        <SideBar/>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    showSideBar: state.toggleSideBar
});

Dashboard.propTypes = {
    showSideBar: PropTypes.func
}

export default connect(mapStateToProps,null)(Dashboard);