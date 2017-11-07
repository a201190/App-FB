import React from 'react';
import './style.scss';
import {Container, Row, Col} from 'reactstrap';
import Right from '../../Component/Footer/right';
import Left from '../../Component/Footer/left'
class Footer extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col><Left/></Col>
                    <Col><Right/></Col>
                </Row>
            </Container>
        );
    }
}
export default Footer;
