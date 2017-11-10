import React from 'react';
import { Modal } from 'reactstrap';
class Chat extends React.Component{
    constructor(){
        super();
        this.renderContent=this.renderContent.bind(this);
        this.toggle=this.toggle.bind(this);
        this.state={
            data:[
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Amit Kumar Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                
            ],
            isOpen:false
        }
    }
    toggle(){
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    renderContent(){
        let val;
        if(this.state.isOpen){
        val=<Modal isOpen={this.state.isOpen} onClick={this.toggle}>hello</Modal>
    }
    return val;
    }
    render() {
        return (
            <div>
            {this.state.data.map((data, i)=>{
                return(
                <div key={i} onClick={this.toggle}>
                    <img src={data.link} alt="Profile" className="Chat"/>
                    <span>{data.name}</span>
                </div>
            );
            })}
            {this.renderContent()}
            </div>
        );
    }
}
export default Chat;