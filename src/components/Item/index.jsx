import React, {Component} from 'react';

class Item extends Component {
    render() {
        const {todo}=this.props
        return (
            <li className={todo.done?"completed":""}>
                <div className="view">
                    <input className="toggle" id={todo.id} type="checkbox" defaultChecked={todo.done}/>
                    <label htmlFor={todo.id}>{todo.title}</label>
                    <button className="destroy"/>
                </div>
                <input className="edit"/>
            </li>
        );
    }
}

export default Item;