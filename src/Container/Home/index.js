import React from 'react';
import './style.css'
import {Container, Row, Col} from 'reactstrap';
import LinkTable from '../../Component/Home/LinkTable';
import NewsFeeds from '../../Component/Home/NewsFeeds';
import NewsFeedHeader from '../../Component/Home/NewsFeedHeader'
class Home extends React.Component{
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col md="2"><LinkTable /></Col>
                    <Col md="4">
                    <Row><NewsFeedHeader /></Row>
                    <Row><NewsFeeds /></Row>                    
                    </Col>
                    <Col md="4">hell</Col>
                    <Col md="2">hell</Col>                    
                </Row>
            </Container>
        )
    }
}
export default Home;