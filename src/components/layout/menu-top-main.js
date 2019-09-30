import React from 'react';
import {Avatar, Icon, Menu} from "antd";
import {Link} from "react-router-dom";
import {Hub} from "@aws-amplify/core";

export class MyMenuTopMain extends React.Component {

    state = {
        loggedIn: false
    };

    constructor(props) {
        super(props);
        Hub.listen('navigation', (data) => {
            const {payload} = data;
            this.onAuthEvent(payload);
            console.log('A new auth event has happened: ', data.payload.data.username + ' has ' + data.payload.event);
        })
    }

    onAuthEvent(payload) {
        // ... your implementation
    }

    render() {
        return (<Menu
            theme="light"
            mode="horizontal"
            // defaultSelectedKeys={[this.props.location.pathname]}
            style={{lineHeight: '64px'}}
        >
            <Menu.Item key="search"><Link to="search"><Icon type="home"/> Home</Link></Menu.Item>
            {/*<Menu.Item key="browse"><Link to="browse"><Icon type="search"/> Browse </Link></Menu.Item>*/}
            <Menu.Item key="addrss"><Link to="addrss"><Icon type="plus"/> Submit RSS Feed</Link></Menu.Item>
            <Menu.SubMenu
                title={
                    <Avatar shape="square" size="large">USER</Avatar>
                }
            >
                <Menu.ItemGroup title="Settings">
                    <Menu.Item key="setting:3"><Link to="settings">Notifications</Link></Menu.Item>
                    <Menu.Item key="setting:4"><Link to="settings">ETC</Link></Menu.Item>
                    <Menu.Item key="setting:5"><Link to="settings">ETC</Link></Menu.Item>
                </Menu.ItemGroup>

                {this.state.loggedIn &&
                <Menu.Item key="setting:1"><Link to="logout"><Icon type="home"/> Log Out</Link></Menu.Item>}
                {!this.state.loggedIn &&
                <Menu.Item key="setting:2"><Link to="login"><Icon type="home"/> Log In</Link></Menu.Item>}
            </Menu.SubMenu>

        </Menu>)
    }
}
