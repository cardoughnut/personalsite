import React from 'react'; 
import './comp.css';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import mailgo from "mailgo";
const { SubMenu } = Menu;

mailgo();


function Nav() {

      return (
        <div className="wrapper ">
            <a href="/"><h1 className="name">Franklin Cardona</h1></a>
            <Menu className = "menu" mode="horizontal">
                <Menu.Item><Link to='/home'>Home</Link></Menu.Item>
                <Menu.Item><Link to='/about'>About</Link></Menu.Item>
                <Menu.Item><Link to='/experience'>Experience</Link></Menu.Item>
                <SubMenu key="SubMenu" title="Links">
                    <Menu.Item><a href="https://www.linkedin.com/in/cardonafranklin/" target="_blank" rel="noopener noreferrer">LinkedIn</a></Menu.Item>
                    <Menu.Item><a href="https://drive.google.com/file/d/1z0lNug6fuxHdBEA1dgmplKXeG4Il2FQ4/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></Menu.Item>
                    <Menu.Item><a href="https://franklinc.myportfolio.com/gallery" target="_blank" rel="noopener noreferrer">Portfolio</a></Menu.Item>
                    <Menu.Item><a href="https://github.com/cardoughnut" target="_blank" rel="noopener noreferrer">GitHub</a></Menu.Item>
                </SubMenu>
            <Menu.Item ><a href="mailto:fcardona@middlebury.edu" target="_blank" rel="noopener noreferrer">Contact</a></Menu.Item>
            </Menu>
        </div>

      );
    
  }

export default Nav; 