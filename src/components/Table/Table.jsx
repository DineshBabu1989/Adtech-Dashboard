/**
 * Table component - displays a table which can render a variable number of rows
 * @tableColumnLabels - Inputs that specify column heading and acts as property names  for 
 * building table elements including th,td
 * @tableName - Name of the table passed as a prop
 * @tableContentArray - Array that holds the data as objects
 */


import React, { Component } from "react";

class Table extends Component{

    tableContent = (tableContentArray) => {

       if(tableContentArray.length === 0)
       {
           return "loading..."
       }
       
       return tableContentArray.map((ele,unique_id) => {

            const tableRowData = this.props.tableRowElementProperties.map(property => 
            <td>{ele[property]}</td>);

            return <tr key={unique_id}> {tableRowData} </tr>
       });
    }

    renderTableHeaders = () =>{
        
        return this.props.tableColumnLabels.map((headerTag,index) => 
        <th key = {index}>{headerTag}</th>
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
                          {this.renderTableHeaders()}
                        </tr> 
                      </thead>  
                     <tbody>
                          {this.tableContent(this.props.tableContentArray)}
                     </tbody>
                   </table>
                  </div>
              </section>
           </React.Fragment>
        ); 
    }
}

export default Table;
