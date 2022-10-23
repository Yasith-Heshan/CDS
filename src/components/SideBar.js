import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import { Col, Container } from 'react-bootstrap';

const SideBar = ()=>{
    return(
            <Container fluid className='sidebar--navbar'>
                <h2>Colombo Drum School</h2>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/">Dashboard</Nav.Link>
                    <Nav.Link href="/">Drum Covers</Nav.Link>
                    <Nav.Link href="/notations">Notations</Nav.Link>
                    <Nav.Link href="/about">About US</Nav.Link>
                    <Nav.Link href="/payments">Payments</Nav.Link>
                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink}>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Options</Dropdown.Item>
                            <Dropdown.Item>Sign Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        
    )
}
export default SideBar