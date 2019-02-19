import React, { Component } from "react";
import { connect } from "react-redux";

import Table from "../../components/Table/Table";
import PaginationScroller from "../../components/PaginationScroller/PaginationScroller";

import {load_table_pagination_bar,
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

      this.props.load_table_pagination_bar();

    }
   
    handlePaginationPageButtonClick(event) {

      const pageNumber = Number(event.target.id);
      this.props.handle_pagination_page_button_click(pageNumber);
     
    }   
    
    handlePaginationPrevButtonClick(){

       this.props.handle_pagination_prev_button_click();
    }

    handlePaginationNextButtonClick(){

        this.props.handle_pagination_next_button_click();
    }

    render(){
        console.log(this.props.tableAndPaginationData);
        const { tableContentArray, currentPage, rowsPerPage, tableName, isLoaded } = this.props.tableAndPaginationData;

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
            "campaign_id", 
            "advertiser_id",
            "name",
            "starting_date",
            "ending_date",
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
  load_table_pagination_bar,
  handle_pagination_page_button_click,
  handle_pagination_prev_button_click,
  handle_pagination_next_button_click
})(TablePagination);

