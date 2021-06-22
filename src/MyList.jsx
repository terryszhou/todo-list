import React, { Component } from 'react'
import ListItem from './ListItem'
import './MyList.css'

export default class MyList extends Component {
    state = {
        taskArray: this.props.theList,
        newItem: ""
    }

    clearList = () => {
        this.setState({
            taskArray: []
        })
    }

    newItemChange = (e) => {
        this.setState({
            newItem: e.target.value
        })
    }

    addItem = (e) => {
        e.preventDefault()
        let tempTaskArray = this.state.taskArray
        tempTaskArray.push(this.state.newItem)
        this.setState({
            taskArray: tempTaskArray,
            newItem: ""
        })
    }

    render() {
        let todoItems = this.state.taskArray.map((item, index) => {
            return <ListItem task={item} key={`todo${index}`} />
        })
        return (
            <main>
            <div class="todo-box">
                <h1> Things I should stop procrastinating:</h1>
                <ul>
                    {todoItems}
                    <li>
                        <form onSubmit={(e) => this.addItem(e)}>
                            <input
                                type="text"
                                placeholder="Type an item here"
                                onChange={(e) => this.newItemChange(e)}
                                value={this.state.newItem}
                            />
                        </form>
                    </li>
                    <li>
                        <button onClick={this.clearList}>Finished the list!</button>
                    </li>
                </ul>
            </div>
            </main>
        )
    }
}