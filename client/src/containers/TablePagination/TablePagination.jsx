import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';
import Spinner from '../../components/Spinner/Spinner';
import Table from '../../components/Table/Table';
import PaginationScroller from '../../components/PaginationScroller/PaginationScroller';

import { getCampaignData,
       updateTableRowsValue,
       handlePaginationPageButtonClick,
       handlePaginationPrevButtonClick,
       handlePaginationNextButtonClick } from '../../actions/actions';

class TablePagination extends Component{

   constructor(props){
       super(props);

       this.handlePageButtonClick = this.handlePageButtonClick.bind(this);
       this.handlePrevButtonClick = this.handlePrevButtonClick.bind(this);
       this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
       this.handleNumberOfTableRowsRangeSelect = this.handleNumberOfTableRowsRangeSelect.bind(this);

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

    handleNumberOfTableRowsRangeSelect(value){
        this.props.updateTableRowsValue(value);
    }

    render(){
        
        const { tableContentArray, currentPage, rowsPerPage, tableName,isLoaded } = this.props.tableAndPaginationData;
        const { errorsCampaign } = this.props.errors;
        const { campaignFetched } = this.props.isFetched;
        //static data
        const tableColumnLabels = [
            { id:1, labelName:'Campaign Id' },
            { id:2, labelName:'Advertisor Id' },
            { id:3, labelName:'Name' },
            { id:4, labelName:'Starting Date' },
            { id:5, labelName:'Ending Date' },
            { id:6, labelName:'Cost Model' },
            { id:7, labelName:'Cost' }
        ];
        const tableRowElementProperties = [
           { id:1, propertyName:'id' },
           { id:2, propertyName:'advertiser_id' },
           { id:3, propertyName:'name' },
           { id:4, propertyName:'start_date' },
           { id:5, propertyName:'end_date' },
           { id:6, propertyName:'cost_model' },
           { id:7, propertyName:'cost' }
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
                    <section className = 'table-pagination'>
                        <Table 
                         tableName = { tableName }
                         tableContentArray = { createCurrentTableData() }
                         tableRowElementProperties =  { tableRowElementProperties }
                         tableColumnLabels = { tableColumnLabels }
                         handleRowsRangeSelect = { this.handleNumberOfTableRowsRangeSelect }
                         />
                        <PaginationScroller 
                         currentPage = { currentPage }
                         tableContentArray = { tableContentArray } 
                         rowsPerPage = { rowsPerPage } 
                         handlePageButton = { this.handlePageButtonClick } 
                         handlePrevButton = { this.handlePrevButtonClick }
                         handleNextButton = { this.handleNextButtonClick }
                         />
                    </section> 
                  ):!campaignFetched && errorsCampaign.errors ?(
                      <section className = 'table-pagination'>
                          <div className='spinner__wrapper'>
                              <Spinner />
                          </div>
                      </section> 
                  ):(
                      <section className = 'table-pagination'>
                          <div className='error-msg__wrapper'>
                              <ErrorMsg msg = { errorsCampaign.response } />
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

TablePagination.propTypes = {
  tableAndPaginationData: PropTypes.shape({
    tableContentArray: PropTypes.array,
    currentPage: PropTypes.number,
    rowsPerPage: PropTypes.number,
    tableName: PropTypes.string,
    isLoaded: PropTypes.bool
  }),
  errors: PropTypes.object,
  isFetched: PropTypes.object.isRequired,
  getCampaignData:PropTypes.func,
  updateTableRowsValue:PropTypes.func, 
  handlePaginationPageButtonClick:PropTypes.func,
  handlePaginationPrevButtonClick:PropTypes.func,
  handlePaginationNextButtonClick:PropTypes.func
}

export default connect(mapStateToProps,{
  getCampaignData,
  updateTableRowsValue,
  handlePaginationPageButtonClick,
  handlePaginationPrevButtonClick,
  handlePaginationNextButtonClick
})(TablePagination);
