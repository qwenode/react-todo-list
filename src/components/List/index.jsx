import React, {Component} from 'react';
import PubSub from 'pubsub-js';
import Item from "../Item";
import {nanoid} from "nanoid";
import Footer from "../Footer";

class List extends Component {
    state = {
        todos: [
            {id: nanoid(), title: "吃饭", done: false},
            {id: nanoid(), title: "睡觉", done: true},
            {id: nanoid(), title: "看电影", done: false},
            {id: nanoid(), title: "写代码", done: false},
        ],
        type: 0,
        "toggle": false
    }

    componentDidMount() {
        PubSub.subscribe('updateTodo', (msg, data) => {
            // console.log(data,'haha',msg)
            const {todos} = this.state
            if (data.act === 'delete') {
                const b = todos.filter((value => {
                    if (data.id === value.id) {
                        return false
                    }
                    return value
                }));
                this.setState({todos: b})
            }
            if (data.act === 'check') {
                todos.map((todo) => {
                    if (todo.id === data.id) {
                        todo.done = data.bool
                    }
                    return todo
                })
                this.setState({todos: todos})
            }
            if (data.act === 'add') {
                // console.log(data.title)
                const nt = [{id: nanoid(), title: data.title, done: false}, ...todos]
                this.setState({todos: nt})
            }

            if (data.act === 'clear') {
                const t = this.state.todos.filter(data => {
                    return !data.done;
                })
                this.setState({todos: t})
            }
            if (data.act === 'type') {
                this.setState({type: data.type})
            }
        })
    }

    componentWillMount() {
        PubSub.unsubscribe('updateTodo')
    }

    getTotal() {
        if (this.state.type === 1) {
            return this.state.todos.reduce((pre, todo) => {
                return pre + (todo.done === false ? 1 : 0)
            }, 0)
        }
        if (this.state.type === 2) {
            return this.state.todos.reduce((previousValue, currentValue) => {
                return previousValue + (currentValue.done === true ? 1 : 0)
            }, 0);
        }
        if (this.state.type === 0) {
            return this.state.todos.length
        }
    };

    render() {
        const {todos: todoList} = this.state
        return (
            <section className="main">
                <input className="toggle-all" onChange={this.handleToggleAll} type="checkbox"/>
                <ul className="todo-list" style={{"display": this.state.toggle ? "none" : "block"}}>
                    {
                        todoList.map((todo) => {
                            if (this.state.type === 1 && todo.done !== false) {
                                return ''
                            }
                            if (this.state.type === 2 && todo.done !== true) {
                                return ''
                            }
                            return <Item todo={todo} key={todo.id}/>;
                        })
                    }

                </ul>
                <Footer listType={this.state.type} total={this.getTotal()}/>
            </section>
        );
    }

    handleToggleAll = (event) => {
        console.log(event.target.checked)
        this.setState({"toggle": event.target.checked})
    };
}

export default List;