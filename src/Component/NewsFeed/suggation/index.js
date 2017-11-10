import React from 'react';
import {NavLink, Button} from 'reactstrap'
class Suggetion extends React.Component{
    render(){
        return(
            <div className="Suggetion">
                <div className="header">
                    <h3>Suggetion</h3>
                    <span>see all</span>
                </div>
                <NavLink href="/home" style={{padding:'0px'}} id="Images">
                        <img className="Image" src={require('../storiesImg/suggetion.jpeg')} alt="poto"/>
                        <span>Nature</span>
                        <div className="model">
                                <img className="Image" src={require('../storiesImg/suggetion.jpeg')} alt="poto"/>
                                <span>Nature</span>
                        </div>
                    </NavLink>
                    <span>Nature Suggetion</span>
                    <div>
                        <Button>Like Pages</Button>
                    </div>
            </div>
        )
    }
}
export default Suggetion;