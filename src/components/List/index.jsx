import React, {Component} from 'react';

class List extends Component {
    render() {
        return (
            <section className="main">
                <input className="toggle-all" type="checkbox"/>
                <ul className="todo-list">

                    <li className="completed">
                        <div className="view">
                            <input className="toggle" type="checkbox"/>
                            <label>Taste JavaScript</label>
                            <button className="destroy"/>
                        </div>
                        <input className="edit"/>
                    </li>
                    <li>
                        <div className="view">
                            <input className="toggle" type="checkbox"/>
                            <label>Buy a unicorn</label>
                            <button className="destroy"/>
                        </div>
                        <input className="edit"/>
                    </li>
                </ul>
            </section>
        );
    }
}

export default List;