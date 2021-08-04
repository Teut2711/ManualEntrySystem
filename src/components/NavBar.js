import React, { createRef, useState } from 'react';
import { Input, Menu, Segment, Navbar, Button } from 'semantic-ui-react'
import Modal from "./Modal";

const NavBar = () => {
    const [activeItem, setActiveItem] = useState('home')
    const handleItemClick = (e, { name }) => setActiveItem(name);
    return (
        <Menu style={{ width: "100%" }}>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='login'
                active={activeItem === 'login'}
                onClick={handleItemClick}
            />

            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item>
                    <Modal />
                </Menu.Item>
            </Menu.Menu>

        </Menu>
    )
}
export default NavBar;