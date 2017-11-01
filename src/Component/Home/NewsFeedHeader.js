import React from 'react';
import { Input, TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col,Label } from 'reactstrap';
import classnames from 'classnames';
class NewsFeedHeader extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
      
      render(){
        return(
            <div>
            <Nav tabs style={{width:'429.2px'}}>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Compose Post
                </NavLink>
              </NavItem>
                <Label for="file-upload" className="takeFile">Audio/Video</Label>
                <Input id="file-upload" type="file" style={{display:'none'}}/>
              <NavItem>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col>
                    <Input type="textarea" className="NewsFeedHeaderTextArea"/>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
            <Nav tabs>
            <NavItem>active</NavItem>
            <NavItem>bind</NavItem>
            <NavItem>class</NavItem>
            <NavItem>default</NavItem>
            <NavItem>export</NavItem>            
            </Nav>
          </div>
        );
    }
}
export default NewsFeedHeader;