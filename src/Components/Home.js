import React from 'react'; 
import './comp.css';
import {Row, Col, Typography} from 'antd';

function Home(){

    return (
        
        <div >
            <Row className="text" justify="center" >
                <Col span={16}>
                    <Typography>My name's Franklin. I'm a junior at Middlebury College majoring in computer science.</Typography>
                    <br/>
                    <Typography>I'm currently studying fully remote in Los Angeles, California. </Typography>
                    <br/>
                    <Typography>This semester I've attended 2020 Tapia Conference and 2020 SHPE National Convention
                    I also was apart of the Wellesley Hackathon, and completed two hackathons during SHPE Nationals</Typography>
                    <br/>
                    <Typography>
                        I made this website with React JS, using components from a UI library called <a href="https://ant.design/">Ant Design</a>.
                    </Typography>
                </Col>
            </Row>
 

        </div>
    )
}

export default Home; 