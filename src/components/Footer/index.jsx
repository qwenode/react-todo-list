import React, {Component} from 'react';
import PubSub from "pubsub-js";


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{this.props.total}</strong> item left</span>
                <ul className="filters">
                    <li>
                        <button onClick={event => PubSub.publish('updateTodo', {act: 'type', type: 0})}
                                className={this.props.listType === 0 ? "selected" : ""}>All
                        </button>
                    </li>
                    <li>
                        <button onClick={event => PubSub.publish('updateTodo', {act: 'type', type: 1})}
                                className={this.props.listType === 1 ? "selected" : ""}>Active
                        </button>
                    </li>
                    <li>
                        <button onClick={event => PubSub.publish('updateTodo', {act: 'type', type: 2})}
                                className={this.props.listType === 2 ? "selected" : ""}>Completed
                        </button>
                    </li>

                </ul>

                <button className="clear-completed"
                        onClick={event => PubSub.publish('updateTodo', {act: 'clear'})}>Clear completed
                </button>
            </footer>
        );
    }
}

export default Footer;