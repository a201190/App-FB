import React from 'react';
import {Link} from 'react-router-dom';
class LinkTable extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Link type="button" to="/home" className="LinkButton">Profile</Link>
                </div>
                <div>
                    <Link type="button" to="/home" className="LinkButton">News Feed</Link>
                </div>
                <div>
                    <Link type="button" to="/home" className="LinkButton">Messenger</Link>
                </div>
                <div>
                     <Link type="button" to="/home" className="LinkButton">Games</Link>
                </div>
                <div>
                    <Link type="button" to="/home" className="LinkButton">Events</Link>
                </div>
                <div>
                 <Link type="button" to="/home" className="LinkButton">Manage App</Link>
                </div>
                <div>
                    <Link type="button" to="/home" className="LinkButton">See More</Link>
                </div>
                <div>
                    <Link type="button" to="/home" className="LinkButton">Pages</Link>               
                </div>
            </div>
        );
    }
}
export default LinkTable;