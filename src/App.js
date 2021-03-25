import {Component} from "react";

import './App.css';
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer";
import {nanoid} from "nanoid";

class App extends Component {
    state = {
        todos: [
            {id: nanoid(), title: "吃饭", done: false},
            {id: nanoid(), title: "睡觉", done: true},
            {id: nanoid(), title: "看电影", done: false},
            {id: nanoid(), title: "写代码", done: false},
        ],
        type: 0
    }
    updateTodo = (todo) => {
        const todos = this.state.todos;
        const nt = [{id: nanoid(), title: todo, done: false}, ...todos]
        this.setState({todos: nt})
    }
    setTodo = (id, state) => {
        const {todos} = this.state
        todos.map((todo) => {
            if (todo.id === id) {
                todo.done = state
            }
            return todo
        })
        this.setState({todos: todos})
    };
    delTodo = (id) => {
        return () => {

            const {todos} = this.state;
            const b = todos.filter(data => {
                return data.id !== id
            })
            this.setState({todos: b})
        }
    }
    changeList = (type) => {
        return () => {
            this.setState({type: type})
        }
    };
    clearComplete = () => {
        const t = this.state.todos.filter(data => {
            return !data.done;
        })
        this.setState({todos: t})
    };

    render() {
        return (
            <div className="App">
                <section className="todoapp">
                    <Header u={this.updateTodo}/>
                    <List todoList={this.state.todos} listType={this.state.type} u={this.setTodo} d={this.delTodo}/>

                    <Footer clear={this.clearComplete} changeList={this.changeList} listType={this.state.type}
                            total={this.state.todos.length}/>
                </section>
            </div>
        );
    }
}

export default App;
