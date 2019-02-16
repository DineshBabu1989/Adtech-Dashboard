import React, { Component } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import { Row, Col } from "react-bootstrap";

class Dashboard extends Component{

    render(){

        return(
             <div>
                 <Row>
                    <Col sm={3}>
                       <Sidebar/>
                    </Col>
                    <Col sm={9}>
                       <HeaderNav/>
                    </Col>
                 </Row>
            </div>
        )
    }

}
export default Dashboard;