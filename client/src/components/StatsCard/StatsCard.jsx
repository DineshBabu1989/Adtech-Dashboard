import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StatsCard extends Component{
    
    render(){
        return(
            <React.Fragment>
                <div className = "statscard">
                    <div className = "statscard__info">
                        <i className = { `statscard__info--icon ${ this.props.data.statsIcon }` } 
                         style = { this.props.data.statsIconColor }/>
                        <div className = "statscard__info--wrapper">
                            <div className="statscard__info--title">{ this.props.data.title }</div>
                            <div className="statscard__info--value">{ this.props.data.value }</div>
                        </div>
                    </div>
                    <div className="statscard__footer">
                        <i className= { `statscard__footer--icon ${ this.props.data.footerIcon }` }/>
                        <div className="statscard__footer--info">{ this.props.data.info }</div>
                    </div>
                </div>
            </React.Fragment>
        ); 
    }
}

StatsCard.propTypes = {
    data:PropTypes.object.isRequired
};

export default StatsCard;