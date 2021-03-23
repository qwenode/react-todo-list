import {Component} from "react";

import './App.css';
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer";

class App extends Component {
    state={
        todos:[
            {id:1,title:"吃饭", done: false},
            {id:2,title:"睡觉", done: true},
            {id:3,title:"看电影", done: false},
            {id:4,title:"泡妞", done: false},
        ]
    }
    render() {
        return (
            <div className="App">
                <section className="todoapp">
                    <Header/>
                    <List todoList={this.state.todos}/>
                    <Footer/>
                </section>
            </div>
        );
    }
}

export default App;
