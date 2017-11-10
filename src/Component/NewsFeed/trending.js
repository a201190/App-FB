import React from 'react';
import classnames from 'classnames';
import {TabContent, TabPane} from 'reactstrap';
class Trending extends React.Component{
    constructor(){
        super();
        this.toggle=this.toggle.bind(this);
        this.toggleDiv=this.toggleDiv.bind(this);
        this.state={
            data:[{},{}],
            toggle:false,
            activeTab:'1'
        }
    }
    toggle(){
        this.setState({
            toggle:!this.state.toggle
        })
    }
    toggleDiv(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
    render(){
        return(
            <div>
            <div className="trendingInline">
            <h3>Trending</h3>
            <ul className="TrendingIcon">
                <li className={classnames({toggle: this.state.activeTab === '1'})} onClick={(()=>{this.toggleDiv('1')})}>
                    <i className="fa fa-line-chart" aria-hidden="true">
                        <span className="tooltriptext2">Trending</span>
                    </i>
                </li>                
                <li className={classnames({toggle: this.state.activeTab === '2'})} onClick={(()=>{this.toggleDiv('2')})}>
                    <i className="fa fa-futbol-o" aria-hidden="true">
                        <span className="tooltriptext2">Sports</span>
                    </i>
                </li>
                <li className={classnames({toggle: this.state.activeTab === '3'})} onClick={(()=>{this.toggleDiv('3')})}>
                    <i className="fa fa-film" aria-hidden="true">
                        <span className="tooltriptext2">Entertainment</span>
                    </i>
                </li>
                <li className={classnames({toggle: this.state.activeTab === '4'})} onClick={(()=>{this.toggleDiv('4')})}>
                    <i className="fa fa-home" aria-hidden="true">
                        <span className="tooltriptext2">Politics</span>
                    </i>
                </li>
                <li className={classnames({toggle: this.state.activeTab === '5'})} onClick={(()=>{this.toggleDiv('5')})}>
                    <i className="fa fa-flask" aria-hidden="true">
                        <span className="tooltriptext2">Science and Technology</span>
                    </i>
                </li>
            </ul>
            </div>
            <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
                {this.state.data.map((data, i)=>{
                    return(
                        <div key={i}>
                            <span>hello</span>
                        </div>
                    );
                })}
                </TabPane>
                <TabPane tabId="2">
                {this.state.data.map((data, i)=>{
                    return(
                        <div key={i}>
                            <span>Amit</span>
                        </div>
                    );
                })}
                </TabPane>
                <TabPane tabId="3">
                {this.state.data.map((data, i)=>{
                    return(
                        <div key={i}>
                            <span>Kumar</span>
                        </div>
                    );
                })}
                </TabPane>
                <TabPane tabId="4">
                {this.state.data.map((data, i)=>{
                    return(
                        <div key={i}>
                            <span>Sharma</span>
                        </div>
                    );
                })}
                </TabPane>
                <TabPane tabId="5">
                {this.state.data.map((data, i)=>{
                    return(
                        <div key={i}>
                            <span>Motiya</span>
                        </div>
                    );
                })}
                </TabPane>
            </TabContent>
            </div>
        );
    }
}
export default Trending;