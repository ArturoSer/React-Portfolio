import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const styles = {
    button: {
        backgroundColor: 'gray',
        border: "transparent",
    },
};

export default function Contact() {
    return (
        <Form className="content">
            <h2>Contact</h2>
            <p>
                <br></br>Contact me! <br></br>
                <br></br> Arturo Serrato <br></br>
                <br></br> arturo.serrato@yahoo.com <br></br>
            </p>

            <Form.Group className='mb-3'>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name Here" />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter Email Here" />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Message</Form.Label>
                <Form.Control type="text" placeholder="Enter Message Here" style={{ height: "75px" }} />
            </Form.Group>

            <Button style={styles.button} type="submit">Submit</Button>

        </Form>
    );
}