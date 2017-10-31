import React from 'react';
import {Input, Container, Form, FormGroup, Button, Label} from 'reactstrap'
class Right extends React.Component{
    constructor(){
        super();
        this.GenderType=this.GenderType.bind(this);
        this.state={
            genderType:false
        }
    }
    GenderType(){
        this.setState({
            genderType:!this.state.genderType
        })
    }
    render(){
        console.log(this.state.genderType)
        return(
            <Container>
                <h1>Sign Up</h1>
                <Form>
                    <FormGroup className="fName">
                        <Input type="text"  name="firstName" placeholder="Enter your First Name"/>
                    </FormGroup>
                    <FormGroup className="lName">
                    <Input type="text" name="lastName"  placeholder="Enter your Last Name"/>                    
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <h3>Gender</h3>
                        <FormGroup className="Male">
                            <Label><Input name="male" type="radio"/>{' '}Male</Label>                        
                        </FormGroup>
                        <FormGroup className="Female">
                            <Label><Input name="female" type="radio"/>{' '}Female</Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="email||mob" placeholder="Enter Your Email or Mobile Number"/>
                    </FormGroup>
                    <FormGroup>
                         <Input type="Password" name="password" placeholder="Password"/>                    
                    </FormGroup>                    
                    <FormGroup>
                        <Input type="Cpassword" name="Cpassword" placeholder="Confirm Password"/>                           <FormGroup></FormGroup>                    
                    </FormGroup>                    
                    <Button type="submit">Submit</Button>
                    </Form>
            </Container>
        );
    }
}
export default Right;