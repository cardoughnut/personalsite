import React from 'react'; 
import './comp.css';
import {Row, Col, Typography} from 'antd';


function About(){

    return (
        
        <div >
            <Row className="text" justify="center" >
                <Col span={16}>
                    <Typography>I'm currently looking for software engineering positions for Summer 2021. I'm more 
                    familiar with frontend development and user experience design, but I'd like to eventually work as a full stack developer</Typography>
                    <br/>
                    <Typography>My hobbies include computer (and <a href="https://youtu.be/Qr3nYR15wxU">keyboard</a>) building, graphic design, and video games</Typography>
                    <br/>
                    <Typography>I'm currently learning React JS. This <a href="https://github.com/cardoughnut/personalsite">website</a> is one of my projects that I'm working on. 
                    Along with improving my JavaScript skills I'm working on learning how to make dynamic web apps that interact with some form of backend. </Typography>
                    <br/>
                </Col>
            </Row>
        </div>
    )
}

export default About; 