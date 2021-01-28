import React, { useState } from "react";
import "../components/Nav.css";
import "../components/Animation.css";
import "../components/Media.css";
import { Navbar, Nav, Container, Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '30ch',
//       borderBottom: '1px solid red',
//       borderRadius: '5px',
//     },
//   },
// }));

export default function Navbars() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div className="Nav">
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home"><Link to="/main" className="logos">React-Bootstrap</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home" className="d-flex"><Link to="/main" href="#"><Button className="btn-hover-navs color-1" variant="outline-dark">Головна</Button></Link></Nav.Link>
                            <Nav.Link href="#someinfo" className="d-flex"><Link to="/info" href="#"><Button className="btn-hover-navs color-2" variant="outline-dark">Страви</Button></Link></Nav.Link>
                            <Nav.Link href="#contacts" className="d-flex"><Link to="/contact" href="#"><Button className="btn-hover-navs color-3" variant="outline-dark">Контакти</Button></Link></Nav.Link>
                            <Nav.Link href="#">
                                <Dropdown isOpen={dropdownOpen} toggle={toggle} className="d-flex">
                                    <Dropdown.Toggle className="btn-outline-light btn-hover-navs color-8" caret>
                                        Також
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey="1"><Link className="item_button" to="/fotogalery" href="#">Фотогалерея</Link></Dropdown.Item>
                                        {/* <Dropdown.Item eventKey="2"><Link className="item_button" to="/booking" href="#">Бронювання</Link></Dropdown.Item> */}
                                        <Dropdown.Item eventKey="2"><Link className="item_button" to="/wedding" href="#">Весілля</Link></Dropdown.Item>
                                        <Dropdown.Item eventKey="3"><Link className="item_button" to="/banquest" href="#">Бенкети, ювілеї та дні народження</Link></Dropdown.Item>
                                        <Dropdown.Item eventKey="4"><Link className="item_button" to="/corporate" href="#">Корпоративи</Link></Dropdown.Item>
                                        <Dropdown.Item eventKey="5"><Link className="item_button" to="/test" href="#">Тест</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                            </Nav.Link>
                        </Nav>
                        {/* <form className={classes.root} id="standard-basic" noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Пошук" variant="outlined" color="secondary" />  
                        </form> */}
                        <div className="button_booking">
                            <Link to="/booking" href="#"><button className="btn btn-outline-light buttons_nav_booking">Бронювати</button></Link>
                            <div className="move_circle_1"></div>
                            {/* <div className="move_circle_2"></div>
                            <div className="move_circle_3"></div>
                            <div className="move_circle_4"></div> */}
                        </div>
                    </Navbar.Collapse>
                </Container>
           </Navbar>
        </div>
    );
}