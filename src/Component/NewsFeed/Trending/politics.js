import React from 'react';
import {NavLink} from 'reactstrap';
class Politics extends React.Component{
    constructor(){
        super();
        this.state={
            data:[
                {header:'Note Bandi', link:'https://www.crickbuzz.com',paragraph:'England reached stumps on day two at 5 for 0, a lead of 65 runs, with star opener Alastair'},
                {header:'Note Bandi', link:'https://www.crickbuzz.com',paragraph:'England reached stumps on day two at 5 for 0, a lead of 65 runs, with star opener Alastair'},
                {header:'Note Bandi', link:'https://www.crickbuzz.com',paragraph:'England reached stumps on day two at 5 for 0, a lead of 65 runs, with star opener Alastair'}               
            ]
        }
    }
    render(){
        return(
            this.state.data.map((data, i)=>{
                return(
                    <div key={i} className="ixon">
                    <i className="fa fa-line-chart" aria-hidden="true">
                        <NavLink href={data.link} className="NavLink">{data.header}</NavLink>
                    </i>
                    <NavLink href={data.link}>
                        <span className="trendPara">{data.paragraph}</span>
                    </NavLink>                        
                </div>
                );
            })
        );
    }
}
export default Politics;