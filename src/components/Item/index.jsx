import React, {Component} from 'react';

class Item extends Component {
    state = {
        "mouse": false,
    }

    render() {
        const {todo} = this.props
        return (
            <li style={{backgroundColor: this.state.mouse ? "#fafafa" : "#ffffff"}}
                className={todo.done ? "completed" : ""} onMouseEnter={this.move(true)} onMouseLeave={this.move(false)}>
                <div className="view">
                    <input onClick={this.checkItem} className="toggle" id={todo.id} type="checkbox"
                           defaultChecked={todo.done}/>
                    <label htmlFor={todo.id}>{todo.title}</label>
                    <button className="destroy" onClick={this.props.d(todo.id)}/>
                </div>
                <input className="edit"/>
            </li>
        );
    }

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