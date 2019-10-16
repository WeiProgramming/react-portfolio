import React, {useState} from 'react';
import {Form, Button, Container} from 'react-bootstrap';


const Contact = () => {
    const [validated, setValidated] = useState(false);
    return (
        <div className="radial-black contact-container white">
            <Container>
                <div className="section-header text-center">
                    <h2 className="text-center">
                        Got Something To Say?
                    </h2>
                    <p>
                        Reach out to me, have a question or an inquiry?
                        Ask away and I will get back to you as soon as possible.
                    </p>
                </div>
                <Form action="mailto:wleung1995@hotmail.com" noValidate validated={validated}>
                    <Button variant="info" type="submit" block>
                        Send Mail
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Contact;