import React, {Component} from 'react';
import PubSub from 'pubsub-js'

class Item extends Component {
    state = {
        "mouse": false,
    }


    render() {
        const {todo} = this.props
        return (
            <li style={{backgroundColor: this.state.mouse ? "#fafafa" : "#ffffff"}}
                className={todo.done ? "completed" : ""} onMouseEnter={event => this.setState({mouse: true})}
                onMouseLeave={event => this.setState({mouse: false})}>
                <div className="view">
                    <input onChange={event => {
                        PubSub.publish('updateTodo', {act: 'check', id: todo.id, bool: event.target.checked})
                    }} className="toggle" id={todo.id} type="checkbox"
                           defaultChecked={todo.done}/>
                    <label htmlFor={todo.id}>{todo.title}</label>
                    <button className="destroy"
                            onClick={(event => PubSub.publish('updateTodo', {act: 'delete', id: todo.id}))}/>
                </div>
                <input className="edit"/>
            </li>
        );
    }

    // onClick={this.props.d(todo.id)}
    //onMouseEnter={this.move(true)} onMouseLeave={this.move(false)}
    move = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    checkItem = (event) => {
        this.props.u(event.target.id, event.target.checked)
    };

}

export default Item;