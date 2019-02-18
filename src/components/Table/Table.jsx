import React, { Component } from "react";


class Table extends Component{


    tableContent = (tableContentArray) => {
       if(tableContentArray.length === 0)
       {
           return "loading..."
       }
       
       return tableContentArray.map((ele,unique_id) => {
                return <tr key={unique_id}>
                            <th>{ele.campaign_id}</th> 
                            <th>{ele.advertiser_id}</th>
                            <th>{ele.name}</th>
                            <th>{ele.starting_date}</th>
                            <th>{ele.ending_date}</th>
                            <th>{ele.cost_model}</th>
                            <th>{ele.cost}</th>
                        </tr>
       });
    }

    render(){

        return(
           <React.Fragment>
              <section className = "table">
                  <h4 className = "table__heading">Campagins breakdown</h4>
                  <table>
                    <thead>
                      <tr>
                         <th>campaign_id</th> 
                         <th>advertiser_id</th>
                         <th>name</th>
                         <th>starting_date</th>
                         <th>ending_date</th>
                         <th>cost_model</th>
                         <th>cost</th>
                      </tr> 
                    </thead>  
                    <tbody>
                      {this.tableContent(this.props.tableContentArray)}
                    </tbody>
                  </table>
              </section>
           </React.Fragment>
        ); 
    }
}

export default Table;
