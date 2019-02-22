import React, { Component } from "react";
import { connect } from "react-redux";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";
import Spinner from "../../components/Spinner/Spinner";
import Table from "../../components/Table/Table";
import PaginationScroller from "../../components/PaginationScroller/PaginationScroller";

import { getCampaignData,
       handlePaginationPageButtonClick,
       handlePaginationPrevButtonClick,
       handlePaginationNextButtonClick } from "../../actions/actions";

class TablePagination extends Component{

   constructor(props){
       super(props);

       this.handlePageButtonClick = this.handlePageButtonClick.bind(this);
       this.handlePrevButtonClick = this.handlePrevButtonClick.bind(this);
       this.handleNextButtonClick = this.handleNextButtonClick.bind(this);

   }

    componentDidMount(){
      this.props.getCampaignData();
    }
   
    handlePageButtonClick(event) {
      const pageNumber = Number(event.target.id);
      this.props.handlePaginationPageButtonClick(pageNumber);
    }   
    
    handlePrevButtonClick(){
      this.props.handlePaginationPrevButtonClick();
    }

    handleNextButtonClick(){
        const tableLength = this.props.tableAndPaginationData.tableContentArray.length;
        const tableRows = this.props.tableAndPaginationData.rowsPerPage;
        
        const numberOfPages = Math.ceil(tableLength/tableRows);

        this.props.handlePaginationNextButtonClick(numberOfPages);
    }

    render(){
        
        const { tableContentArray, currentPage, rowsPerPage, tableName,isLoaded } = this.props.tableAndPaginationData;
        const { errorsCampaign } = this.props.errors;
        const { campaignFetched } = this.props.isFetched;

        const tableColumnLabels = [
            "Campaign Id",
            "Advertisor Id",
            "Name",
            "Starting Date",
            "Ending Date",
            "Cost Model",
            "Cost"
        ]
        const tableRowElementProperties = [
            "id", 
            "advertiser_id",
            "name",
            "start_date",
            "end_date",
            "cost_model",
            "cost"
       ];

    
        const createCurrentTableData = () =>{
            // Logic for displaying current table content
            const indexOfLastItem = currentPage * rowsPerPage;
            const indexOfFirstItem = indexOfLastItem - rowsPerPage;
            const currentTableItems = tableContentArray.slice(indexOfFirstItem, indexOfLastItem);
            return currentTableItems
        }
       

        return(
           <React.Fragment>
                 {isLoaded && campaignFetched && !errorsCampaign.errors ? (
                   <section className = "table-pagination">
                     <Table 
                      tableName = {tableName}
                      tableContentArray = {createCurrentTableData()}
                      tableRowElementProperties =  {tableRowElementProperties}
                      tableColumnLabels = {tableColumnLabels}
                     />
                     <PaginationScroller 
                      currentPage ={currentPage}
                      tableContentArray = {tableContentArray} 
                      rowsPerPage = {rowsPerPage} 
                      handlePageButton = {this.handlePageButtonClick} 
                      handlePrevButton = {this.handlePrevButtonClick}
                      handleNextButton = {this.handleNextButtonClick}
                     />
                   </section> 
                  ):!campaignFetched && errorsCampaign.errors ?(
                    <section className = "table-pagination">
                       <div className="spinner__wrapper">
                           <Spinner />
                       </div>
                    </section> 
                  ):(
                    <section className = "table-pagination">
                      <div className="error-msg__wrapper">
                          <ErrorMsg msg={errorsCampaign.response} />
                      </div>
                    </section> 
                  )
                 }  
           </React.Fragment>
        ); 
    }
}

const mapStateToProps = state => ({
  tableAndPaginationData: state.tableDisplayWithPagination,
  errors:state.errors,
  isFetched:state.isFetched
});

export default connect(mapStateToProps,{
  getCampaignData,
  handlePaginationPageButtonClick,
  handlePaginationPrevButtonClick,
  handlePaginationNextButtonClick
})(TablePagination);

