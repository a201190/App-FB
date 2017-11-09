import React from 'react';
class NewsFeeds extends React.Component{
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
    render(){
        return(
            <div>
                {this.state.data.map((data, i)=>{
                  return(
                    <h1>hello</h1>
                  );
                })}
            </div>
        )
    }
}
export default NewsFeeds;
