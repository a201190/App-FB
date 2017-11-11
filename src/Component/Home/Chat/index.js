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
                {name:'Prity Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Alok Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Binita Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Usha Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Bikash Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Arun Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Shadashiv Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Janardhan Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
                {name:'Rakesh Sharma', link:require('../../NewsFeed/storiesImg/gmail.png')},
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
            <div className="ChatBox">
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