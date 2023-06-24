import React from 'react';
import { Accordion, ListGroup } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <h4>What is the purpose of react router?</h4></Accordion.Header>
                    <Accordion.Body>
                        <h5>The purpose of react router is ,</h5>
                        <ListGroup as="ol" numbered>
                            <ListGroup.Item as="li">Making single page application and mobile apps</ListGroup.Item>
                            <ListGroup.Item as="li">It enables "client side routing"</ListGroup.Item>
                            <ListGroup.Item as="li">It enables "nested routing"</ListGroup.Item>
                            <ListGroup.Item as="li">It allows active link</ListGroup.Item>
                            <ListGroup.Item as="li">It enables data loading very easy without useEffect</ListGroup.Item>
                            <ListGroup.Item as="li">It allows dynamic route</ListGroup.Item>
                            <ListGroup.Item as="li">It enables relative link</ListGroup.Item>
                            <ListGroup.Item as="li">It enables redirects</ListGroup.Item>
                            <ListGroup.Item as="li">It data motations</ListGroup.Item>
                            etc etc <br />
                           <h1 className='h5'> So the main thing is making easy and comfortable the react and making single page application is the purpose of React Router</h1>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h4>How does ContextApi works? </h4></Accordion.Header>
                    <Accordion.Body>
                        <h5>When Context API set in the  parent components, that allow this context each child without passing data to prop at every level.</h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h4>What is UseRef hook?</h4></Accordion.Header>
                    <Accordion.Body>
                        <h5>
                        UseRef Hook can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.It allow to persist values between renders.
                        </h5>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;