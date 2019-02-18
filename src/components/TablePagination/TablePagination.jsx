import React, { Component } from "react";
import Table from "../Table/Table";
import PaginationScroller from "../TablePagination/PaginationScroller";

class TablePagination extends Component{

   constructor(props){
       super(props);
       this.state = {
           tableContentArray : [
            {
              unique_id: 1,
              campaign_id: 1,
              advertiser_id:1,
              name: "diaper man",
              starting_date: "24/04/2019",
              ending_date: "25/07/2019",
              cost_model: "pay per click",
              cost: "$45"
            },
            {
              unique_id: 2,
              campaign_id: 2,
              advertiser_id:1,
              name: "diaper man",
              starting_date: "24/04/2019",
              ending_date: "25/07/2019",
              cost_model: "pay per click",
              cost: "$45"
            },
            {
              unique_id: 3,
              campaign_id: 3,
              advertiser_id:1,
              name: "diaper man",
              starting_date: "24/04/2019",
              ending_date: "25/07/2019",
              cost_model: "pay per click",
              cost: "$45"
            },
            {
                unique_id: 2,
                campaign_id: 4,
                advertiser_id:1,
                name: "diaper man",
                starting_date: "24/04/2019",
                ending_date: "25/07/2019",
                cost_model: "pay per click",
                cost: "$45"
              },
              {
                unique_id: 3,
                campaign_id: 5,
                advertiser_id:1,
                name: "diaper man",
                starting_date: "24/04/2019",
                ending_date: "25/07/2019",
                cost_model: "pay per click",
                cost: "$45"
              },
              {
                unique_id: 2,
                campaign_id: 4,
                advertiser_id:1,
                name: "diaper man",
                starting_date: "24/04/2019",
                ending_date: "25/07/2019",
                cost_model: "pay per click",
                cost: "$45"
              },
              {
                unique_id: 3,
                campaign_id: 5,
                advertiser_id:1,
                name: "diaper man",
                starting_date: "24/04/2019",
                ending_date: "25/07/2019",
                cost_model: "pay per click",
                cost: "$45"
              }
          ],
          currentPage: 1,
          rowsPerPage: 1
       }

       this.handlePaginationPageButtonClick = this.handlePaginationPageButtonClick.bind(this);
       this.handlePaginationPrevButtonClick = this.handlePaginationPrevButtonClick.bind(this);
       this.handlePaginationNextButtonClick = this.handlePaginationNextButtonClick.bind(this);

   }

    handlePaginationPageButtonClick(event) {
     this.setState({
         currentPage: Number(event.target.id)
     })
    }   
    
    handlePaginationPrevButtonClick(){
        if(this.state.currentPage !== 1){
            const newCurrentPage = this.state.currentPage - 1;
            this.setState({
                currentPage: newCurrentPage
            })
        }
        console.log(this.state.currentPage);
    }

    handlePaginationNextButtonClick(){
        const numberOfPages = Math.ceil(this.state.tableContentArray.length / this.state.rowsPerPage);
        if(this.state.currentPage !== numberOfPages){
            const newCurrentPage = this.state.currentPage + 1;
            this.setState({
                currentPage: newCurrentPage
            })
        }
        console.log(this.state.currentPage);
    }

    render(){
      
        const { tableContentArray, currentPage, rowsPerPage } = this.state;

        // Logic for displaying current table content
        const indexOfLastItem = currentPage * rowsPerPage;
        const indexOfFirstItem = indexOfLastItem - rowsPerPage;
        const currentTableItems = tableContentArray.slice(indexOfFirstItem, indexOfLastItem);

        return(
           <React.Fragment>
              <section className = "table-pagination">
                  <Table tableContentArray = {currentTableItems}/>
                  <PaginationScroller 
                   currentPage ={currentPage}
                   tableContentArray = {tableContentArray} 
                   rowsPerPage = {rowsPerPage} 
                   handlePageButton = {this.handlePaginationPageButtonClick} 
                   handlePrevButton = {this.handlePaginationPrevButtonClick}
                   handleNextButton = {this.handlePaginationNextButtonClick}
                   />
              </section>
           </React.Fragment>
        ); 
    }
}

export default TablePagination;
