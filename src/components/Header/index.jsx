import React, {Component} from 'react';
import PubSub from "pubsub-js";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input onKeyUp={this.handleKeyUp} className="new-todo" placeholder="需要做什么?" autoFocus/>
            </header>
        );
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            const d = event.target.value.trim();
            if (d.length <= 0) {
                return
            }
            PubSub.publish('updateTodo', {title: d, act: 'add'})
            event.target.value = ""
        }
    }
}

export default Header;