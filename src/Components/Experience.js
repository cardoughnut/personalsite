import React from 'react'; 
import './comp.css'; 
import { Card, Row, Col } from 'antd';

function Experience(){
    return (
        <div  className="background">
            <Row justify="center" className="card" >
                <Col xs={20} xl={5}>
                    <Card  cover={<img alt="example" src="https://i.imgur.com/nj6iw5Q.png" />} style={{ width: 300 }}>
                        <h1>Middlebury College</h1>
                        <h3>Computer Science</h3>
                        <h4>Expected Grad: May 2022</h4>
                        <p>Computer Science Department, Tutor</p>
                        <p>Under Represented in STEM (URSTEM) Club, Treasurer</p>
                        <p>The Middlebury Video Game Club, President</p>
                    </Card>
                </Col>
                <Col xs={20} xl={5}>
                    <Card cover={<img alt="example" src="https://i.imgur.com/IkVff7Q.png" />} style={{ width: 300 }}>
                        <h2>MiddCORE: Innovation Program</h2>
                        <h3>Student Consultant</h3>
                        <h4>Winter 2020</h4>
                        <p>Built professional skills in mentor guided workshops</p>
                        <p>Worked in small teams to solve problems for emergine companies</p>
                    </Card>
                </Col>
                <Col xs={20} xl={5}>
                    <Card cover={<img alt="example" src="https://i.imgur.com/ufFNzxX.png" />} style={{ width: 300 }}>
                        <h2>Ace.so Intiative</h2>
                        <h3>Software Developer Intern</h3>
                        <h4>Summer 2020</h4>
                        <p>Researched PHP bulletin platforms and databases</p>
                        <p>Developed landing page wireframe with Figma design</p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Experience; 