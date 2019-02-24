/**
 * Table component - displays a table which can render a variable number of rows
 * @tableColumnLabels - Inputs that specify column heading and acts as property names  for 
 * building table elements including th,td
 * @tableName - Name of the table passed as a prop
 * @tableContentArray - Array that holds the data as objects
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component{

    tableContent = (tableContentArray) => {
       return tableContentArray.map((ele) => {
            const tableRowData = this.props.tableRowElementProperties.map((property) => 
                <td key={ property.id }>{ ele[ property.propertyName ] }</td>);
            return <tr key={ ele.id }>{tableRowData}</tr>
       });
    }

    renderTableHeaders = () =>{
        return this.props.tableColumnLabels.map((headerTag) => 
            <th key = { headerTag.id }>{headerTag.labelName}</th>
        );
    }

    render(){

        return(
            <React.Fragment>
                <section className = "table">
                    <h4 className = "table__heading">{this.props.tableName}</h4>
                    <div className= "table__wrapper">
                        <table>
                            <thead>
                                <tr>
                                    { this.renderTableHeaders() }
                                </tr> 
                            </thead>  
                            <tbody>
                                { this.tableContent(this.props.tableContentArray) }
                            </tbody>
                        </table>
                    </div>
                </section>
            </React.Fragment>
        ); 
    }
}

Table.propTypes = {
  tableName: PropTypes.string,
  tableContentArray: PropTypes.array.isRequired,
  tableRowElementProperties: PropTypes.array,
  tableColumnLabels: PropTypes.array
}

export default Table;
