import React from 'react';
import './style.scss'
import {Container, Row, Col} from 'reactstrap';
import LinkTable from '../../Component/Home/LinkTable';
import NewsFeeds from '../../Component/Home/NewsFeeds';
import NewsFeedHeader from '../../Component/Home/NewsFeedHeader'
import Stories from '../../Component/NewsFeed/stories';
import Chat from '../../Component/Home/Chat/index';
class Home extends React.Component{
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col md="2"><LinkTable /></Col>
                    <Col md="4" style={{top:'56px'}}>
                        <Row ><NewsFeedHeader /></Row>
                        <Row><NewsFeeds /></Row>
                    </Col>
                    <Col md="4" style={{top:'56px'}}><Stories/></Col>
                    <Col md="2"><Chat/></Col>
                </Row>
            </Container>
        )
    }
}
export default Home;
