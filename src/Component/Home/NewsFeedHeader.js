import React from 'react';
import { Input, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col,Label } from 'reactstrap';
import classnames from 'classnames';
class NewsFeedHeader extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.TakeFile=this.TakeFile.bind(this);
       this.togglediv=this.togglediv.bind(this);
        this.state = {
          activeTab: '1',
          currentValue:'',
          file:'',
          active:false
        };
      }
      togglediv(){
        this.setState({
          active:!this.state.active
        })
      }
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
      TakeFile(event){
        let reader=new FileReader();
        let file = event.target.files[0];
        reader.onloadend=()=>{
          this.setState({currentValue:reader.result, file:file})
        }
        reader.readAsDataURL(file)
      }
      fileUpload(){
        let val;
        if(this.state.active===true){
        val=(<video width="320" height="240" controls><source src={this.state.currentValue} type="video/mp4"/><source src="movie.ogg" type="video/ogg"/></video>)
      }
      else{
        val=<Input type="textarea"  className="NewsFeedHeaderTextArea"/>
      }
      return val;
      }
      render(){
        console.log(this.state.currentValue)
        return(
            <div style={{width: '100%'}}>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Compose Post
                </NavLink>
              </NavItem>
              <NavItem>
                <Label for="file-upload" className="takeFile" onClick={this.togglediv}>Audio/Video</Label>
                <Input id="file-upload" accept="audio/*|video/*|image/*|media_type" type="file" style={{display:'none'}} onChange={this.TakeFile} />
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col className="NewsFeedHeaderTextArea">
                      {this.fileUpload()}
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
