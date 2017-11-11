import React from 'react';
import './style.scss';
import { Form, FormGroup,Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Input, Button } from 'reactstrap';
class NavBar extends React.Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        const LoginForm =<Form inline>
            <FormGroup>
                <Input type="text" name="id" required/>
                <Input type="password" name="Pword" required/>
            </FormGroup>
            <Button type="submit">Login</Button>
        </Form>;
        return(
            <div className="NavBar">
                <Navbar style={{background:'green'}} light expand="md">
                    <NavbarBrand href="/">Welcome to Amit</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                {LoginForm}
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">SiginUp</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default NavBar;
