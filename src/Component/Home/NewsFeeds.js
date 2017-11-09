import React from 'react';
import NewsFeedHeader from './NewsFeedHeader'
class NewsFeeds extends React.Component{
  constructor(){
    super();
    this.state={
      data:[],
      task:''
    }
  }
  NewsFeedsItem(){
    let task=this.state.task;
    let data=this.state.data;
    data.push(task);
    this.setState(data)
  }
    render(){
        return(
            <div>
            <button type="submit" onClick={(()=>{this.NewsFeedsItem();})}>post</button>            
                {this.state.data.map((data, i)=>{
                  return(
                    <NewsFeedHeader key={i}/>
                  );
                })}
            </div>
        )
    }
}
export default NewsFeeds;
