import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { UseWorkContext } from '../context/WorkContext'

const PostWork = () => {

    const { postData } = UseWorkContext();

    const [values, setValues] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        postData(values);
        console.log(values);
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
        console.log(name, value);
    }

    return (
        <div className='post-movie'>
            <h2>Post Your Work Here</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter yoy work title" onChange={handleInputChange} name='title'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>PublishBy</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" onChange={handleInputChange} name='publishBy'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='Your work description' onChange={handleInputChange} name='description'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>GitHub</Form.Label>
                    <Form.Control type="text" placeholder="Enter the github repository url" onChange={handleInputChange} name='github'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Img</Form.Label>
                    <Form.Control type="text" placeholder="Enter a url image adress" onChange={handleInputChange} name='img'/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default PostWork