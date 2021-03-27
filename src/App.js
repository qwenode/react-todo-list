import {Component} from "react";

import './App.css';
import Header from "./components/Header"
import List from "./components/List"

class App extends Component {

    render() {
        return (
            <div className="App">
                <section className="todoapp">
                    <Header/>
                    <List/>

                </section>
            </div>
        );
    }
}

export default App;
