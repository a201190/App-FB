import React from 'react';
import classnames from 'classnames';
import {TabContent, TabPane} from 'reactstrap';
import Trend from './trend';
import Sports from './sports';
import Entertainment from './entartainment';
import Politics from './politics';
import ScienceTech from './Science&Tech'
class Trending extends React.Component{
    constructor(){
        super();
        this.toggle=this.toggle.bind(this);
        this.toggleDiv=this.toggleDiv.bind(this);
        this.state={
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
      IconColor(tab){
          let val;
          if(this.state.activeTab===tab){
            val=({color: 'blueviolet', borderBottom:'1px solid green'})
          }
          return val;
      }
    render(){
        return(
            <div>
            <div className="trendingInline">
            <h3>Trending</h3>
            <ul className="TrendingIcon">
                <li className={classnames({toggle: this.state.activeTab === '1'})} onClick={(()=>{this.toggleDiv('1')})}>
                    <i className="fa fa-line-chart" aria-hidden="true" style={this.IconColor('1')}>
                        <span className="tooltriptext2">Trending</span>
                    </i>
                </li>                
                <li className={classnames({toggle: this.state.activeTab === '2'})} onClick={(()=>{this.toggleDiv('2')})}>
                    <i className="fa fa-futbol-o" aria-hidden="true" style={this.IconColor('2')}>
                        <span className="tooltriptext2">Sports</span>
                    </i>
                </li>
                <li className={classnames({toggle: this.state.activeTab === '3'})} onClick={(()=>{this.toggleDiv('3')})}>
                    <i className="fa fa-film" aria-hidden="true" style={this.IconColor('3')}>
                        <span className="tooltriptext2">Entertainment</span>
                    </i>
                </li>
                <li className={classnames({toggle: this.state.activeTab === '4'})} onClick={(()=>{this.toggleDiv('4')})}>
                    <i className="fa fa-home" aria-hidden="true" style={this.IconColor('4')}>
                        <span className="tooltriptext2">Politics</span>
                    </i>
                </li>
                <li className={classnames({toggle: this.state.activeTab === '5'})} onClick={(()=>{this.toggleDiv('5')})}>
                    <i className="fa fa-flask" aria-hidden="true" style={this.IconColor('5')}>
                        <span className="tooltriptext2">Science and Technology</span>
                    </i>
                </li>
            </ul>
            </div>
            <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                    <Trend/>
                </TabPane>
                <TabPane tabId="2">
                    <Sports/>
                </TabPane>
                <TabPane tabId="3">
                    <Entertainment/>
                </TabPane>
                <TabPane tabId="4">
                    <Politics/>
                </TabPane>
                <TabPane tabId="5">
                    <ScienceTech/>
                </TabPane>
            </TabContent>
            </div>
        );
    }
}
export default Trending;