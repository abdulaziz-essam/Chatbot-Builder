import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './signup.css'
export default function SignIn() {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
         
                    {/* <Form.Check type="checkbox" label="Check me out" /> */}
                </Form.Group>

                <Link to="/mainpage"> <Button variant="primary" type="submit" >Create
                </Button></Link>


            </Form>

        </div>
    )
}
