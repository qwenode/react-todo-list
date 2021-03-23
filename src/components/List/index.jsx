import React, {Component} from 'react';
import Item from "../Item";

class List extends Component {
    render() {
        const {todoList}=this.props
        return (
            <section className="main">
                <input className="toggle-all" type="checkbox"/>
                <ul className="todo-list">
                    {
                        todoList.map((todo)=>{
                            return <Item todo={todo}/>
                        })
                    }

                </ul>
            </section>
        );
    }
}

export default List;