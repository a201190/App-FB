import React from 'react';
import {Input, InputGroup, InputGroupAddon} from 'reactstrap';
class ChatSearch extends React.Component{
    constructor(){
        super();
        this.textName=this.textName.bind(this);
        this.state={
            data:''
        }
    }
    textName(event){
        this.setState({
            data:event.target.value
        })
    }
    searchFriendList(){
        let filterName= this.props.data.filter((data)=>{
         let val;
         if(this.state.data){
             val=data.name.includes(this.state.data)
         }
         else {
            val=console.log('Not Avl');
         }
         return val;    
     })
     return filterName;
    }
    render(){
        console.log(this.searchFriendList())
        //console.log(this.props.data)
        return(
            <div>
                <InputGroup>
                <InputGroupAddon><i className="fa fa-search" aria-hidden="true"></i></InputGroupAddon>
                <Input type="search" placeholder="search" onChange={this.textName} value={this.state.data}/>
               </InputGroup>
            </div>
        )
    }
}
export default ChatSearch;