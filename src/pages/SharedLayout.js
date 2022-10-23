import { Col, Container, Row } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"
import background from '../img/background.png'

const SharedLayout = ()=>{
    const style={
            backgroundImage:`url(${background})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            height:'100vh'

    }
    return (
        <Container fluid style={style}>
            <Row>
                <Col style={{backgroundColor:'white',padding:'5px',textAlign:'center'}} xs={2}><SideBar/></Col>
                <Col xs={10}><Outlet/></Col>
            </Row>
            
            
        </Container>
    )
}
export default SharedLayout