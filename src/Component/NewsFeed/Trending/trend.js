import React from 'react';
import {NavLink} from 'reactstrap'
class Trend extends React.Component{
    constructor(){
        super();
        this.state={
            data:[
                {header:'Amazone',link:'https://www.amazon.com', span:'hi'},
                {header:'',link:'', span:''},                
            ]
        }
    }
    render(){
        return(
                this.state.data.map((data, i)=>{
                    return(
                        <div key={i}>
                            <i className="fa fa-line-chart" aria-hidden="true"></i>
                            <NavLink href={data.link}>{data.header}</NavLink>
                            <span>{data.span}</span>
                        </div>
                    );
                })
        );
    }
}
export default Trend;