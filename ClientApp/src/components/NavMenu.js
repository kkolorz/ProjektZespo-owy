import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
    displayName = NavMenu.name


    render() {

        const isLogged = sessionStorage.getItem('logged') == 'true' ? true : false;


        return (
            <Navbar inverse fixedTop fluid collapseOnSelect>
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <LinkContainer to={'/'} exact>
                            <NavItem>
                                Strona główna
              </NavItem>
                        </LinkContainer>

                        {
                            isLogged ?

                                <div>
                                <LinkContainer to={'/adminpanel'}>
                                    <NavItem>
                                        Panel Administracyjny
                                    </NavItem>
                                </LinkContainer>


                                 <LinkContainer to={'/logout'}>
                                    <NavItem>
                                        Wyloguj
                                    </NavItem>
                                </LinkContainer>
                                </div>

                                :

                                <div>
                                <LinkContainer to={'/register'}>
                                    <NavItem>
                                        Rejestracja
                                    </NavItem>
                                </LinkContainer>

                                    <LinkContainer to={'/login'}>
                                        <NavItem>
                                            Logowanie
                        </NavItem>
                                    </LinkContainer>
                                </div>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
  }
}
