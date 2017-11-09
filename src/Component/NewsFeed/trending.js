import React from 'react';
import {NavLink} from 'reactstrap';
class Trending extends React.Component{
    constructor(){
        super();
        this.state={
            data:[
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {}
            ]
        }
    }
    render(){
        return(
            <div>
            <div className="trendingInline">
            <h3>Trending</h3>
            <ul className="TrendingIcon">
                <li>
                    <NavLink href="/" className="Link">
                        <i className="fa fa-line-chart" aria-hidden="true">
                            <span className="tooltriptext2">Trending</span>
                        </i>
                    </NavLink>
                </li>                
                <li>
                <NavLink href="/" className="Link">
                    <i className="fa fa-futbol-o" aria-hidden="true">
                        <span className="tooltriptext2">Sports</span>
                    </i>
                </NavLink>
                </li>
                <li>
                <NavLink href="/" className="Link">
                    <i className="fa fa-film" aria-hidden="true">
                        <span className="tooltriptext2">Entertainment</span>
                    </i>
                </NavLink>
                </li>
                <li>
                <NavLink href="/" className="Link">
                    <i className="fa fa-home" aria-hidden="true">
                        <span className="tooltriptext2">Politics</span>
                    </i>
                </NavLink>
                </li>
                <li>
                <NavLink href="/" className="Link">
                    <i className="fa fa-flask" aria-hidden="true">
                        <span className="tooltriptext2">Science and Technology</span>
                    </i>
                </NavLink>
                </li>
            </ul>
            </div>
                {this.state.data.map((data, i)=>{
                    return(
                        <div key={i}>
                            <span>hello</span>
                        </div>
                    );
                })}
            </div>
        );
    }
}
export default Trending;