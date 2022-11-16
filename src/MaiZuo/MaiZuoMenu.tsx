import React, { Component } from 'react'
import "./Maizuo.css"
import propType from 'prop-types'

interface MaiZuoMenuProps {
    Menu: Array<{
        id: number
        text: string
    }>
}
export default class MaiZuoMenu extends Component<{ name: string, on: string }, MaiZuoMenuProps> {
    static propTypes = {
        name: propType.string
    }
    static defaultProps = {
        name: "1111"
    }
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
        const { name, on } = this.props
        return (
            <div>
                <div className="Menu">
                    {
                        this.state.Menu.map((item, index) => <li key={index} className='MenuItem'>{item.text}</li>)
                    }
                </div>
                <div>
                    {name}
                </div>
            </div>
        )
    }
}
