import React from 'react';
import {NavLink} from 'reactstrap'
class Trend extends React.Component{
    constructor(){
        super();
        this.state={
            data:[
                {header:'Amazone',link:'https://www.amazon.com', span:'Follow the create-react-app instructions up to the Adding Bootstrap section and instead follow .'},
                {header:'Amazone',link:'https://www.amazon.com', span:'Follow the create-react-app instructions up to the Adding Bootstrap section and instead follow .'},
                {header:'Amazone',link:'https://www.amazon.com', span:'Follow the create-react-app instructions up to the Adding Bootstrap section and instead follow .'},
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
                                <span className="trendPara">{data.span}</span>
                            </NavLink>                        
                        </div>
                    );
                })
        );
    }
}
export default Trend;