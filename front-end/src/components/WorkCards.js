import React from 'react'
import { UseWorkContext } from '../context/WorkContext'
import WorkCard from './WorkCard';
import { Container, Row } from 'react-bootstrap'

const WorkCards = () => {

    const { data } = UseWorkContext();

    return (
        <Container>
            <Row>
                {data && data.map((work) => (                    
                        <WorkCard
                            key={work.id}
                            title={work.title}
                            author={work.author}
                            description={work.description}
                            github={work.github}
                            id={work.id}
                            img={work.img}
                            updatedAt={work.craetedAt}
                            likes={work.likes}
                        />
                        
                ))}
            </Row>
        </Container>
    )
}

export default WorkCards