import React, {useState} from 'react';
import './components.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {Button, Form, FormControl, Nav, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function Header(props) {

    return (
        <Navbar bg="grey" expand="lg">
            <Container fluid>
                <Navbar.Brand className={"logo"} id={"logo-name"}>SNEAK</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="Brand">
                            <input type="checkbox" className="form-check-input" id={"checkbox-brand-1"}
                                   onClick={_ => props.changeBrand(0)} checked={props.brand[0]}/>
                            <label className="form-check-label" htmlFor="checkbox-brand-1">Nike</label>
                            <NavDropdown.Divider />
                            <input type="checkbox" className="form-check-input" id={"checkbox-brand-2"}
                                   onClick={_ => props.changeBrand(1)} checked={props.brand[1]}/>
                            <label className="form-check-label" htmlFor="checkbox-brand-2">Adidas</label>
                            <NavDropdown.Divider />
                            <input type="checkbox" className="form-check-input" id={"checkbox-brand-3"}
                                   onClick={_ => props.changeBrand(2)} checked={props.brand[2]}/>
                            <label className="form-check-label" htmlFor="checkbox-color-3">Other brands</label>
                        </NavDropdown>
                        <NavDropdown title="Color">
                            <input type="checkbox" className="form-check-input" id={"checkbox-color-1"}
                                   onClick={_ => props.changeColor(0)} checked={props.color[0]}/>
                            <label className="form-check-label" htmlFor="checkbox-color-1">White</label>
                            <NavDropdown.Divider />
                            <input type="checkbox" className="form-check-input" id={"checkbox-color-2"}
                                   onClick={_ => props.changeColor(1)} checked={props.color[1]}/>
                            <label className="form-check-label" htmlFor="checkbox-color-2">Black</label>
                            <NavDropdown.Divider />
                            <input type="checkbox" className="form-check-input" id={"checkbox-color-4"}
                                   onClick={_ => props.changeColor(2)} checked={props.color[2]}/>
                            <label className="form-check-label" htmlFor="checkbox-color-4">Other</label>
                        </NavDropdown>

                        <NavDropdown title={"Sort by"}>
                            <input type="checkbox" className="form-check-input" id={"checkbox-sort-0"}
                                   onClick={_ => props.changeSort()}/>
                            <label className="form-check-label" htmlFor="checkbox-sort-0">price</label>
                        </NavDropdown>

                        <Form className="d-flex">
                            <NavDropdown className={"justify-content-end"} title={"Liked Sneakers: " + props.fav}>
                                <label>total price is {props.totPrice}$</label>
                            </NavDropdown>
                        </Form>



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header;