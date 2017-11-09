import React from 'react';
import {NavLink} from 'reactstrap';
import Trending from './trending'
class Stories extends React.Component{
    constructor(){
        super();
        this.state={
            data:[
                {header:require('./storiesImg/facebook.png'), link:'https://facebook.com'},
                {header:require('./storiesImg/gmail.png'), link:'https://gmail.com'},
                {header:require('./storiesImg/linkedin.jpg'), link:'https://linkedin.com'},
                {header:require('./storiesImg/angelList.png'), link:'https://angel.co'},
                {header:require('./storiesImg/naukri.jpg'), link:'https://naukri.com'}
            ]
        }
    }
render(){
    console.log(this.state.toggle)
    return(
        <div>
        <div className="storiess">
        <div className="storiesHeader">
            <h3>Stories</h3>
                <i className="fa fa-question" id="tooltip">
                    <span className="tooltiptext">Stories are photos and videos that only last temporarily.<br/>When a friend shares to their story, it'll appear here.</span>
                </i>
        </div>
        <div>
        <hr/>
            {this.state.data.map((data, i)=>{
                return(
                    <NavLink key={i} href={data.link} className="link"><img className="stories" src={data.header} alt="header"/></NavLink>
                );
            })}
        </div>
        </div>
        <div className="Trending">
            <Trending/>
        </div>
        </div>
    );
}
}
export default Stories;