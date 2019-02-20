import React, { Component } from "react";
import { connect } from "react-redux";

import Table from "../../components/Table/Table";
import PaginationScroller from "../../components/PaginationScroller/PaginationScroller";

import {getCampaignData,
       handle_pagination_page_button_click,
       handle_pagination_prev_button_click,
       handle_pagination_next_button_click} from "../../actions/actions";

class TablePagination extends Component{

   constructor(props){
       super(props);

       this.handlePaginationPageButtonClick = this.handlePaginationPageButtonClick.bind(this);
       this.handlePaginationPrevButtonClick = this.handlePaginationPrevButtonClick.bind(this);
       this.handlePaginationNextButtonClick = this.handlePaginationNextButtonClick.bind(this);

   }

    componentDidMount(){
      
      this.props.getCampaignData();

    }
   
    handlePaginationPageButtonClick(event) {

      const pageNumber = Number(event.target.id);
      this.props.handle_pagination_page_button_click(pageNumber);
     
    }   
    
    handlePaginationPrevButtonClick(){

       this.props.handle_pagination_prev_button_click();
    }

    handlePaginationNextButtonClick(){
        const tableLength = this.props.tableAndPaginationData.tableContentArray.length;
        const tableRows = this.props.tableAndPaginationData.rowsPerPage;

        const numberOfPages = Math.ceil(tableLength/tableRows);

        this.props.handle_pagination_next_button_click(numberOfPages);
    }

    render(){
        
        const { tableContentArray, currentPage, rowsPerPage, tableName, isLoaded } = this.props.tableAndPaginationData;
        console.log(tableContentArray);
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
                 {isLoaded ? (
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
                     handlePageButton = {this.handlePaginationPageButtonClick} 
                     handlePrevButton = {this.handlePaginationPrevButtonClick}
                     handleNextButton = {this.handlePaginationNextButtonClick}
                     />
                   </section> 
                  ) : (
                     <div>Loading...</div>
                 )}  
           </React.Fragment>
        ); 
    }
}

const mapStateToProps = state => ({
  tableAndPaginationData: state.tableDisplayWithPagination
});

export default connect(mapStateToProps,{
  getCampaignData,
  handle_pagination_page_button_click,
  handle_pagination_prev_button_click,
  handle_pagination_next_button_click
})(TablePagination);

