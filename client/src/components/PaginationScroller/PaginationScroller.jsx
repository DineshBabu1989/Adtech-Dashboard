import React, { Component } from "react";

class PaginationScroller extends Component{

   pageNumbersInScroller(currentPage,tableContentArray,rowsPerPage){
     const pageNumbers = [];
     const tableLength = tableContentArray.length;
     const numberOfPages = Math.ceil(tableLength / rowsPerPage);

     for (let i = 1; i <= numberOfPages; i++) {
        pageNumbers.push(i);
     }
    
     if(currentPage === 1){
        return pageNumbers.slice(currentPage - 1, 3);
     }else if (currentPage === numberOfPages){
        return pageNumbers.slice(-3, numberOfPages);
     }
     else{
         return [ currentPage - 1, currentPage, currentPage + 1];
     }
   }
  
   renderPageNumbers(){
       return this.pageNumbersInScroller(
                 this.props.currentPage,
                 this.props.tableContentArray,
                 this.props.rowsPerPage).map(ele => {
                        if(this.props.currentPage === ele){
                          const currentSelection = true;
                          return <li key = {ele} id ={ele} onClick = {this.props.handlePageButton} 
                                     className={`pagination-scroller__page pagination-scroller__page--${currentSelection}`}>
                                     {ele}
                                 </li>
                        }
                        else{
                            const currentSelection = false;
                            return <li key = {ele} id ={ele} onClick = {this.props.handlePageButton} 
                                       className={`pagination-scroller__page pagination-scroller__page--${currentSelection}`}>
                                      {ele}
                                   </li> 
                        }
                  }   
                );
   }
    render(){ 
   
        return(
           <React.Fragment>
              <div className = "pagination-scroller">
                 <button className = "pagination-scroller__button button__default" 
                  onClick = {this.props.handlePrevButton}>Prev</button>

                 {this.renderPageNumbers()}

                 <button className = "pagination-scroller__button button__default" 
                  onClick = {this.props.handleNextButton}>Next</button>
              </div>
           </React.Fragment>
        ); 
    }
}

export default PaginationScroller;

  
  
 