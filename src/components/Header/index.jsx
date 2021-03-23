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
        console.log(event.)
    }
}

export default Header;