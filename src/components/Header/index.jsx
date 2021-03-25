import React, {Component} from 'react';

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
            event.target.value = ""
            this.props.u(d)
        }
    }
}

export default Header;