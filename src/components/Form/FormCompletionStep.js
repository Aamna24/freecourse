import React from 'react'
import {Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
const FormCompletetionSteps = ({step1, step2, step3, step4,
step5, step6, step7}) => {
    return (
        <Nav className="justify-content-center mb-4">
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/form'>
                        <Nav.Link>Eligibility</Nav.Link>
                    </LinkContainer>
                ): <Nav.Link disabled>
                    Eligibility
                    </Nav.Link>}
            </Nav.Item>
            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/personal'>
                        <Nav.Link>Personal</Nav.Link>
                    </LinkContainer>
                ): <Nav.Link disabled>
                    Personal
                    </Nav.Link>}
            </Nav.Item>
            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/employment'>
                        <Nav.Link>Employement</Nav.Link>
                    </LinkContainer>
                ): <Nav.Link disabled>
                    Employement
                    </Nav.Link>}
            </Nav.Item>
            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/qualification'>
                        <Nav.Link>Qualification</Nav.Link>
                    </LinkContainer>
                ): <Nav.Link disabled>
                    Qualification
                    </Nav.Link>}
            </Nav.Item>
            <Nav.Item>
                {step5 ? (
                    <LinkContainer to='/oppurtunities'>
                        <Nav.Link>Equal Oppurtunities</Nav.Link>
                    </LinkContainer>
                ): <Nav.Link disabled>
                    Equal Oppurtunities
                    </Nav.Link>}
            </Nav.Item>
            <Nav.Item>
                {step6 ? (
                    <LinkContainer to='/declaration'>
                        <Nav.Link>Declaration</Nav.Link>
                    </LinkContainer>
                ): <Nav.Link disabled>
                    Declaration
                    </Nav.Link>}
            </Nav.Item>
            <Nav.Item>
                {step7 ? (
                    <LinkContainer to='/proof'>
                        <Nav.Link>ID Proof</Nav.Link>
                    </LinkContainer>
                ): <Nav.Link disabled>
                    ID Proof
                    </Nav.Link>}
            </Nav.Item>
        </Nav>
    )
}

export default FormCompletetionSteps
