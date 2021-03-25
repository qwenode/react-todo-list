import React, {Component} from 'react';
import Item from "../Item";

class List extends Component {
    state = {"toggle": false}

    render() {
        const {todoList} = this.props
        return (
            <section className="main">
                <input className="toggle-all" onChange={this.handleToggleAll} type="checkbox"/>
                <ul className="todo-list" style={{"display": this.state.toggle ? "none" : "block"}}>
                    {
                        todoList.map((todo) => {
                            if (this.props.listType === 1 && todo.done !== false) {
                                return ''
                            }
                            if (this.props.listType === 2 && todo.done !== true) {
                                return ''
                            }
                            return <Item todo={todo} key={todo.id} u={this.props.u} d={this.props.d}/>;
                        })
                    }

                </ul>
            </section>
        );
    }

    handleToggleAll = (event) => {
        console.log(event.target.checked)
        this.setState({"toggle": event.target.checked})
    };
}

export default List;