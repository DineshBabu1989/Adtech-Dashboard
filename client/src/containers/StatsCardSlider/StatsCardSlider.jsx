import React, { Component } from "react";
import { connect } from "react-redux";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";
import Spinner from "../../components/Spinner/Spinner";
import StatsCard from "../../components/StatsCard/StatsCard";
import { get_stats_cards_data } from "../../actions/actions";



class StatsCardSlidder extends Component{

    componentDidMount(){
        this.props.get_stats_cards_data();
      }

    generateStatsProps= (statsInfo,isUpdated)=>{

        const isUpdatedTime = isUpdated.toLocaleTimeString();
        
        return [
            {
                statsIcon: "fa fa-bullhorn",
                statsIconColor:{
                    color:"purple"
                },
                title: "Advertisers",
                value:statsInfo.total_advertisers,
                footerIcon:"fa fa-refresh",
                info:isUpdatedTime
            },
            {
                statsIcon: "fa fa-newspaper-o",
                statsIconColor:{
                    color:"green"
                },
                title: "Campaigns",
                value:statsInfo.total_campagins,
                footerIcon:"fa fa-refresh",
                info:isUpdatedTime
            },
            {
                statsIcon: "fa fa-eye",
                statsIconColor:{
                    color:"orange"
                },
                title: "Impressions",
                value:statsInfo.total_impressions,
                footerIcon:"fa fa-refresh",
                info:isUpdatedTime
            },
            {
                statsIcon: "fa fa-hand-pointer-o",
                statsIconColor:{
                    color:"red"
                },
                title: "Clicks",
                value:statsInfo.total_clicks,
                footerIcon:"fa fa-refresh",
                info:isUpdatedTime
            },
            {
                statsIcon: "fa fa-download",
                statsIconColor:{
                    color:"red"
                },
                title: "Installs",
                value:statsInfo.total_installs,
                footerIcon:"fa fa-refresh",
                info:isUpdatedTime
            },
            {
                statsIcon: "fa fa-money",
                statsIconColor:{
                    color:"green"
                },
                title: "Cost",
                value:`${statsInfo.total_cost/1000}\u20AC`,
                footerIcon:"fa fa-refresh",
                info:isUpdatedTime
            }
        ]
    }

    render(){
        const { isLoaded, isUpdated, stats} = this.props.statsData;
        const { errorsStats } = this.props.errors;
        const { statsFetched } = this.props.isFetched;
    
        const renderStats = (stats) =>{
            const statsProps = this.generateStatsProps(stats[0],isUpdated);
            return statsProps.map((stat,index) => {
                return(
                    <div className="dashboardcontent__statscards--item" key={index}>
                       <StatsCard data ={stat}/>
                    </div>
                );     
            })
        }
        
        return(
             <React.Fragment>
                 {isLoaded && statsFetched && !errorsStats.error ?(
                    <section className="dashboardcontent__statscards">
                      {renderStats(stats)}
                    </section>
                  ):!statsFetched && errorsStats.error ?(
                    <section className="dashboardcontent__statscards">
                       <div className="spinner__wrapper">
                           <Spinner />
                       </div>
                    </section>
                  ):(
                    <section className="dashboardcontent__statscards">
                       <div className="error-msg__wrapper">
                           <ErrorMsg msg={errorsStats.response} />
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
  
export default connect(mapStateToProps,{ get_stats_cards_data })(StatsCardSlidder);
