import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';
import Spinner from '../../components/Spinner/Spinner';
import StatsCard from '../../components/StatsCard/StatsCard';
import { getStatsCardsData } from '../../actions/actions';

class StatsCardSlidder extends Component{

    componentDidMount(){
        this.props.getStatsCardsData();
    }

    generateStatsProps= (statsInfo,isUpdated)=>{

        const isUpdatedTime = isUpdated.toLocaleTimeString();

        return [
            {   
                id:1,
                statsIcon: 'fa fa-bullhorn',
                statsIconColor:{
                    color:'purple'
                },
                title: 'Advertisers',
                value:statsInfo.total_advertisers,
                footerIcon:'fa fa-refresh',
                info:isUpdatedTime
            },
            {   id:2,
                statsIcon: 'fa fa-newspaper-o',
                statsIconColor:{
                    color:'green'
                },
                title: 'Campaigns',
                value:statsInfo.total_campagins,
                footerIcon:'fa fa-refresh',
                info:isUpdatedTime
            },
            {   
                id:3,
                statsIcon: 'fa fa-eye',
                statsIconColor:{
                    color:'orange'
                },
                title: 'Impressions',
                value:statsInfo.total_impressions,
                footerIcon:'fa fa-refresh',
                info:isUpdatedTime
            },
            {   
                id:4,
                statsIcon: 'fa fa-hand-pointer-o',
                statsIconColor:{
                    color:'red'
                },
                title: 'Clicks',
                value:statsInfo.total_clicks,
                footerIcon:'fa fa-refresh',
                info:isUpdatedTime
            },
            {   
                id:5,
                statsIcon: 'fa fa-download',
                statsIconColor:{
                    color:'red'
                },
                title: 'Installs',
                value:statsInfo.total_installs,
                footerIcon:'fa fa-refresh',
                info:isUpdatedTime
            },
            {   
                id:6,
                statsIcon: 'fa fa-money',
                statsIconColor:{
                    color:'green'
                },
                title: 'Cost',
                value:`${ statsInfo.total_cost/1000 }\u20AC`,
                footerIcon:'fa fa-refresh',
                info:isUpdatedTime
            }
        ]
    }

    render(){
        const { isLoaded, isUpdated, stats } = this.props.statsData;
        const { errorsStats } = this.props.errors;
        const { statsFetched } = this.props.isFetched;
    
        const renderStats = () =>{
            const statsProps = this.generateStatsProps( stats[ 0 ],isUpdated);
            return statsProps.map((stat) => {
                return(
                    <div className='dashboardcontent__statscards--item' key={ stat.id }>
                        <StatsCard data = { stat }/>
                    </div>
                );     
            })
        }
        
        return(
            <React.Fragment>
                {isLoaded && statsFetched && !errorsStats.error ?(
                    <section className='dashboardcontent__statscards'>
                        {renderStats()}
                    </section>
                    ):!statsFetched && errorsStats.error ?(
                        <section className='dashboardcontent__statscards'>
                            <div className='spinner__wrapper'>
                                <Spinner />
                            </div>
                        </section>
                    ):(
                        <section className='dashboardcontent__statscards'>
                            <div className='error-msg__wrapper'>
                                <ErrorMsg msg={ errorsStats.response } />
                            </div>
                        </section>
                    )
                 }  
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => ({
    statsData: state.statsCardSlider,
    errors:state.errors,
    isFetched:state.isFetched
});
 
StatsCardSlidder.propTypes = {
    statsData: PropTypes.shape({
        stats: PropTypes.array,
        isLoaded: PropTypes.bool.isRequired,
        isUpdated: PropTypes.instanceOf(Date)
    }).isRequired,
    errors: PropTypes.object,
    isFetched: PropTypes.object.isRequired,
    getStatsCardsData: PropTypes.func.isRequired
}

export default connect(mapStateToProps,{ getStatsCardsData })(StatsCardSlidder);
