import React, { Component } from 'react'
import "./Maizuo.css"
export default class MaiZuoMenu extends Component {
    state = {
        Menu: [
            {
                id: 0,
                text: "首页"
            },
            {
                id: 1,
                text: "影院"
            },
            {
                id: 2,
                text: "我的"
            }
        ]
    }
    render() {
        return (
            <div className="aaa">
                {
                    this.state.Menu.map(item => <li>{item.text}</li>)
                }
            </div>
        )
    }
}
