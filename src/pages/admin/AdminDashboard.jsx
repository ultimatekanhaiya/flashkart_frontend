import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Navigate, Outlet } from "react-router-dom"
import { isAdminUser } from "../../auth/HelperAuth"
import UserContext from "../../context/UserContext"
import SideMenu from "../../components/admin/SideMenu"
import useJwtTokenExpiration from "../../hooks/useJwtTokenExpiration"
const AdminDashboard = () => {

    useJwtTokenExpiration()
    const userContext = useContext(UserContext)
    const dashboardView = () => {
        return (
            <div>
                <Container fluid className="px-5 py-5  ">
                    <Row>
                        <Col md={{
                            span: 2
                        }} className="">
                            <SideMenu />
                        </Col>
                        <Col md={10} className="ps-3 pt-2">
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }

    return (
        (isAdminUser()) ? dashboardView() : <Navigate to="/users/home" />
    )
}

export default AdminDashboard