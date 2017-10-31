import React from 'react';
class Left extends React.Component{
    constructor(){
        super();
        this.state={
            data:[
                {imgLink:'https://i.pinimg.com/originals/d4/e2/2d/d4e22dd0c172a148b1c318276a6a9dfa.jpg'},
                {imgLink:'https://i.pinimg.com/originals/d4/e2/2d/d4e22dd0c172a148b1c318276a6a9dfa.jpg'},
                {imgLink:'https://i.pinimg.com/originals/d4/e2/2d/d4e22dd0c172a148b1c318276a6a9dfa.jpg'},
                {imgLink:'https://i.pinimg.com/originals/d4/e2/2d/d4e22dd0c172a148b1c318276a6a9dfa.jpg'},                
                {imgLink:'https://i.pinimg.com/originals/d4/e2/2d/d4e22dd0c172a148b1c318276a6a9dfa.jpg'},                
                {imgLink:'https://i.pinimg.com/originals/d4/e2/2d/d4e22dd0c172a148b1c318276a6a9dfa.jpg'},                
                {imgLink:'https://i.pinimg.com/originals/d4/e2/2d/d4e22dd0c172a148b1c318276a6a9dfa.jpg'},                
                {imgLink:'https://i.pinimg.com/originals/d4/e2/2d/d4e22dd0c172a148b1c318276a6a9dfa.jpg'},                
                {imgLink:'https://i.pinimg.com/originals/d4/e2/2d/d4e22dd0c172a148b1c318276a6a9dfa.jpg'},                
                {imgLink:'https://i.pinimg.com/originals/d4/e2/2d/d4e22dd0c172a148b1c318276a6a9dfa.jpg'},                
                {imgLink:'https://i.pinimg.com/originals/d4/e2/2d/d4e22dd0c172a148b1c318276a6a9dfa.jpg'},                
                {imgLink:'https://i.pinimg.com/originals/d4/e2/2d/d4e22dd0c172a148b1c318276a6a9dfa.jpg'},                
                {imgLink:'https://i.pinimg.com/originals/d4/e2/2d/d4e22dd0c172a148b1c318276a6a9dfa.jpg'},                
                {imgLink:'https://i.pinimg.com/originals/d4/e2/2d/d4e22dd0c172a148b1c318276a6a9dfa.jpg'},
                {imgLink:'https://i.pinimg.com/originals/d4/e2/2d/d4e22dd0c172a148b1c318276a6a9dfa.jpg'}                
            ]
        }
    }
    render(){
        return(
          this.state.data.map((data, i)=>{
              return(
                  <img key={i} src={data.imgLink} alt="prof" className="LeftImg"/>
              )
            })  
        );
    }
}
export default Left;