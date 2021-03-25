import React, {Component} from 'react';


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{this.props.total}</strong> item left</span>
                <ul className="filters">
                    <li>
                        <button onClick={this.props.changeList(0)}
                                className={this.props.listType === 0 ? "selected" : ""}>All
                        </button>
                    </li>
                    <li>
                        <button onClick={this.props.changeList(1)}
                                className={this.props.listType === 1 ? "selected" : ""}>Active
                        </button>
                    </li>
                    <li>
                        <button onClick={this.props.changeList(2)}
                                className={this.props.listType === 2 ? "selected" : ""}>Completed
                        </button>
                    </li>

                </ul>

                <button className="clear-completed" onClick={this.props.clear}>Clear completed</button>
            </footer>
        );
    }
}

export default Footer;