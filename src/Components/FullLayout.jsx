import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HeadNavbar, ProfileOverview, TechnicalProficiency, ProjectShowcase,
ProfessionalExperience, ContactInformation, Footer } from './exports'

const FullLayout = () => {
    return(
        <div className="h-full bg-gray-800">
            <Container fluid>
                <Row className="sticky top-0 z-50">
                    <HeadNavbar/>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col id="profile"><ProfileOverview/></Col>
                        </Row>
                        <Row>
                            <Col id="proficiency"><TechnicalProficiency/></Col>
                        </Row>
                        <Row>
                            <Col id="showcase"><ProjectShowcase/></Col>
                        </Row>
                        <Row>
                            <Col id="experience"><ProfessionalExperience/></Col>
                        </Row>
                        <Row>
                            <Col id="contact"><ContactInformation/></Col>
                        </Row>
                        <Row>
                            <Footer/>
                        </Row>
                    </Col>
                </Row>
            </Container>            
        </div>
    )
}

export default FullLayout;